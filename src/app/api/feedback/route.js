import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { registration_id, rating, message } = body ?? {};

  // Validate registration_id: must be present and a valid UUID
  if (!registration_id || !UUID_RE.test(registration_id))
    return NextResponse.json(
      { error: "A valid Registration ID is required." },
      { status: 422 }
    );

  if (!message?.trim() || message.trim().length < 10)
    return NextResponse.json(
      { error: "Feedback must be at least 10 characters." },
      { status: 422 }
    );

  const parsedRating = rating != null ? Number(rating) : null;
  if (
    parsedRating !== null &&
    (!Number.isInteger(parsedRating) || parsedRating < 1 || parsedRating > 5)
  )
    return NextResponse.json(
      { error: "Rating must be an integer between 1 and 5." },
      { status: 422 }
    );

  const { data, error } = await getSupabase()
    .from("feedback")
    .insert([
      {
        registration_id,
        rating: parsedRating,
        message: message.trim(),
      },
    ])
    .select("id, registration_id, rating, message, created_at")
    .single();

  if (error) {
    // Foreign key violation — registration_id does not exist in registrations table
    if (error.code === "23503") {
      return NextResponse.json(
        { error: "Invalid Registration ID. Please re-register and try again." },
        { status: 422 }
      );
    }
    console.error("[/api/feedback]", error);
    return NextResponse.json(
      { error: "Failed to save feedback. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, feedback: data }, { status: 201 });
}
