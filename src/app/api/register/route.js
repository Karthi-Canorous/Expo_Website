import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_RE = /^[6-9]\d{9}$/;

const REGISTRATION_COLUMNS =
  "id, full_name, email, mobile, company_name, person_type, created_at";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, mobile, company, person_type } = body ?? {};

  // Validate all required fields
  if (!name?.trim() || name.trim().length < 2)
    return NextResponse.json({ error: "Full name is required." }, { status: 422 });
  if (!EMAIL_RE.test(email?.trim()))
    return NextResponse.json({ error: "Invalid email address." }, { status: 422 });
  if (!MOBILE_RE.test(mobile?.replace(/\s/g, "")))
    return NextResponse.json({ error: "Invalid mobile number." }, { status: 422 });
  if (!company?.trim() || company.trim().length < 2)
    return NextResponse.json({ error: "Company name is required." }, { status: 422 });
  if (!person_type?.trim())
    return NextResponse.json({ error: "Person type is required." }, { status: 422 });

  const normalizedEmail = email.toLowerCase().trim();
  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("registration")
    .insert([
      {
        full_name: name.trim(),
        email: normalizedEmail,
        mobile: mobile.replace(/\s/g, ""),
        company_name: company.trim(),
        person_type: person_type.trim(),
      },
    ])
    .select(REGISTRATION_COLUMNS)
    .single();

  if (error) {
    // Duplicate email — fetch the existing record so the user can proceed
    if (error.code === "23505") {
      const { data: existing, error: fetchErr } = await supabase
        .from("registration")
        .select(REGISTRATION_COLUMNS)
        .eq("email", normalizedEmail)
        .single();

      if (fetchErr || !existing) {
        return NextResponse.json(
          { error: "Registration failed. Please try again." },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { success: true, duplicate: true, registration: existing },
        { status: 200 }
      );
    }

    console.error("[/api/register]", error);
    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { success: true, duplicate: false, registration: data },
    { status: 201 }
  );
}
