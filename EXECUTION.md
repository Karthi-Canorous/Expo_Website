# Execution Guide — CTPL Expo Website

Step-by-step instructions for setting up, running, and deploying the CTPL Expo Website.

---

## Prerequisites

| Tool | Minimum Version | Check |
|---|---|---|
| Node.js | 18.x | `node -v` |
| npm | 9.x | `npm -v` |
| Git | Any | `git --version` |
| Supabase account | — | supabase.com |

---

## 1. Clone the Repository

```bash
git clone <repository-url>
cd Expo_Website
```

---

## 2. Install Dependencies

```bash
npm install
```

Installs:
- `next`, `react`, `react-dom`
- `@supabase/supabase-js`
- `framer-motion`
- `tailwindcss`, `postcss`

---

## 3. Supabase Project Setup - npm install @supabase/supabase-js

Porject name : Canorous FeedBack Portal
Project ID:iltnfcbxnmjnrkaliscc
Project region : ap-south-1
Password: Canorous@2026
### 3.1 Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in
2. Click **New Project**
3. Fill in project name, database password, and region
4. Wait for provisioning (approx. 1–2 minutes)

---

### 3.2 Create Database Tables

Open your project → **SQL Editor** → **New query** → paste and run the following:

```sql
-- ─────────────────────────────────────────
-- Table: registration
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.registration (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name    TEXT NOT NULL,
  email        TEXT NOT NULL,
  mobile       TEXT NOT NULL,
  company_name TEXT NOT NULL,
  person_type  TEXT NOT NULL,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Prevent duplicate registrations for the same email
CREATE UNIQUE INDEX IF NOT EXISTS registration_email_unique
  ON public.registration (LOWER(email));

-- ─────────────────────────────────────────
-- Table: feedback
-- ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.feedback (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  registration_id UUID NOT NULL REFERENCES public.registration(id),
  rating          SMALLINT CHECK (rating >= 1 AND rating <= 5),
  message         TEXT NOT NULL,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
```

---

### 3.3 Enable Row Level Security

```sql
-- Enable RLS (all direct client access is blocked;
-- only the service role key used in API routes can write)
ALTER TABLE public.registration ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "deny_all_registration"
  ON public.registration FOR ALL TO anon, authenticated USING (false);

CREATE POLICY "deny_all_feedback"
  ON public.feedback FOR ALL TO anon, authenticated USING (false);
```

---

### 3.4 Get Your API Keys

1. In your Supabase project, go to **Settings** (gear icon) → **API**
2. Copy the following values:

| Key | Location on page | Used as |
|---|---|---|
| Project URL | "Project URL" field | `NEXT_PUBLIC_SUPABASE_URL` |
| Service role key | "Project API keys" → `service_role` → click **Reveal** | `SUPABASE_SERVICE_ROLE_KEY` |

> **Do not use the `anon` key.** This project uses the service role key exclusively via server-side API routes.

---

## 4. Configure Environment Variables

Create a file named `.env.local` in the project root:

```
Expo_Website/
└── .env.local    ← create this file
```

Add the following content (replace with your actual values):

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=sb_secret_your_service_role_key_here
```

**Rules:**
- `.env.local` is listed in `.gitignore` — it must never be committed to version control
- `SUPABASE_SERVICE_ROLE_KEY` must never have the `NEXT_PUBLIC_` prefix — this would expose it to the browser
- Restart the dev server every time you change `.env.local`

---

## 5. Run in Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Hot reload** is active — changes to `.jsx` and `.js` files update the browser automatically. Changes to `.env.local` require a full server restart.

---

## 6. Verify the Integration

### Registration
1. Fill in all 5 fields on the registration form and submit
2. Go to Supabase Dashboard → **Table Editor** → `registration`
3. Confirm the row appears with correct `full_name`, `email`, `mobile`, `company_name`, `person_type`
4. Open browser DevTools → **Application** → **Local Storage** → confirm `ctpl_user` contains `registrationId`

### Feedback
1. After registering, scroll to the feedback section
2. Select a star rating and write a message (min. 10 characters), submit
3. Go to Supabase Dashboard → **Table Editor** → `feedback`
4. Confirm the row appears with `registration_id` matching the registration record

---

## 7. Production Build

```bash
npm run build
```

Verify the output:
- `/api/register` and `/api/feedback` are marked `ƒ (Dynamic)` — correct for server-side API routes
- Build completes with zero errors

### Confirm the service role key is not in the client bundle:

```bash
# Windows PowerShell
Select-String -Path ".next\static\*" -Pattern "SUPABASE_SERVICE_ROLE_KEY" -Recurse
# Should return no matches

# macOS / Linux
grep -r "SUPABASE_SERVICE_ROLE_KEY" .next/static
# Should return no matches
```

---

## 8. Run in Production Mode (Local)

```bash
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000).

---

## 9. Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo
3. In the Vercel project settings → **Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase project URL
   - `SUPABASE_SERVICE_ROLE_KEY` = your service role key
4. Click **Deploy**

> Do not add these variables to any `.env` file that is committed to the repo. Set them only in the Vercel dashboard.

---

## 10. Scripts Reference

| Script | Command | Purpose |
|---|---|---|
| Development | `npm run dev` | Start local dev server with hot reload |
| Build | `npm run build` | Create optimised production build |
| Production | `npm run start` | Serve the production build locally |
| Lint | `npm run lint` | Run ESLint across the project |

---

## Database Schema Reference

### Table: `registration`

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `uuid` | PRIMARY KEY, DEFAULT `gen_random_uuid()` | Unique registration ID |
| `full_name` | `text` | NOT NULL | Visitor's full name |
| `email` | `text` | NOT NULL, UNIQUE (case-insensitive) | Email address |
| `mobile` | `text` | NOT NULL | 10-digit mobile number |
| `company_name` | `text` | NOT NULL | Company or organisation |
| `person_type` | `text` | NOT NULL | Role: Customer, Partner, Distributor, etc. |
| `created_at` | `timestamptz` | NOT NULL, DEFAULT `NOW()` | Registration timestamp |

**Indexes:**
- `registration_email_unique` — unique index on `LOWER(email)` (prevents case-variant duplicates)

---

### Table: `feedback`

| Column | Type | Constraints | Description |
|---|---|---|---|
| `id` | `uuid` | PRIMARY KEY, DEFAULT `gen_random_uuid()` | Unique feedback ID |
| `registration_id` | `uuid` | NOT NULL, FK → `registration.id` | Links feedback to the visitor's registration |
| `rating` | `smallint` | CHECK (1 ≤ rating ≤ 5), nullable | Optional star rating |
| `message` | `text` | NOT NULL | Feedback text (min. 10 characters enforced at API level) |
| `created_at` | `timestamptz` | NOT NULL, DEFAULT `NOW()` | Submission timestamp |

**Foreign key:** `feedback.registration_id → registration.id`
Ensures every feedback record is tied to a valid registered visitor. Orphan records are impossible.

---

## Troubleshooting

| Error | Cause | Fix |
|---|---|---|
| `Invalid supabaseUrl` | `.env.local` has placeholder text or missing URL | Replace with actual Supabase project URL |
| `Invalid API key` | Wrong key type (anon key instead of service role) | Use the `service_role` key from Supabase Settings → API |
| `Could not find table 'registrations'` | Table name mismatch | Table is named `registration` (singular) in this project |
| `Missing Supabase env vars` | `.env.local` not created, or dev server not restarted after changes | Create the file and run `npm run dev` again |
| `Registration ID is required` | Old localStorage entry has no `registrationId` | The app detects this automatically and prompts re-registration |
| `500 Internal Server Error` on feedback | `registration_id` in localStorage is invalid or missing | Clear browser storage and re-register |
| Build fails with env var error | Service role key not available at build time | Set the variable in your hosting platform's environment settings, not in committed files |
