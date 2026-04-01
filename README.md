# Tesfahun Aschalew Tsegaye — Portfolio

A dark-prestige personal portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Nodemailer**, and **PostgreSQL (Supabase)**.

---

## Tech Stack

| Layer      | Technology                        |
|------------|-----------------------------------|
| Framework  | Next.js 14 (App Router)           |
| Language   | TypeScript                        |
| Styling    | Tailwind CSS + CSS Variables      |
| Email      | Nodemailer (Gmail)                |
| Database   | PostgreSQL via Supabase           |
| Deployment | Vercel                            |

---

## Project Structure

```
my-portfolio/
├── app/
│   ├── page.tsx              ← Home page (all sections)
│   ├── layout.tsx            ← Root layout + fonts + metadata
│   └── api/
│       └── contact/
│           └── route.ts      ← Contact form email API
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx          ← Add your projects here!
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── db.ts                 ← PostgreSQL (Supabase) client
├── styles/
│   └── globals.css           ← Tailwind + CSS variables
├── public/                   ← Put your profile photo here
├── .env.local                ← Your secret keys (never commit!)
├── .gitignore
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Step 1 — Install

```bash
# Make sure you have Node.js v18+ installed
node --version

# Install all dependencies
npm install

# Also install pg for the database
npm install pg
npm install --save-dev @types/pg
```

---

## Step 2 — Set Up Environment Variables

Open `.env.local` and fill in your real values:

```env
EMAIL_USER=tesfahun21aschalew@gmail.com
EMAIL_PASS=your_gmail_app_password_here
EMAIL_TO=tesfahun21aschalew@gmail.com

DATABASE_URL=postgresql://postgres:[PASSWORD]@[HOST]:5432/postgres
```

### How to get Gmail App Password:
1. Go to your Google Account → Security
2. Enable **2-Step Verification** (required)
3. Search for **"App passwords"**
4. Create a new App Password for "Mail"
5. Copy the 16-character password into `EMAIL_PASS`

### How to get Supabase DATABASE_URL:
1. Go to [supabase.com](https://supabase.com) → Create a free project
2. Go to **Settings → Database → Connection string → URI**
3. Copy the URI and replace `[YOUR-PASSWORD]` with your project password

---

## Step 3 — Set Up Database (Supabase)

In your Supabase project, open the **SQL Editor** and run this:

```sql
CREATE TABLE projects (
  id          SERIAL PRIMARY KEY,
  title       VARCHAR(100)  NOT NULL,
  description TEXT          NOT NULL,
  tech_stack  TEXT[]        NOT NULL DEFAULT '{}',
  is_public   BOOLEAN       NOT NULL DEFAULT true,
  demo_url    TEXT,
  github_url  TEXT,
  created_at  TIMESTAMP     DEFAULT NOW()
);

CREATE TABLE messages (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(100) NOT NULL,
  email    VARCHAR(100) NOT NULL,
  message  TEXT         NOT NULL,
  sent_at  TIMESTAMP    DEFAULT NOW()
);
```

---

## Step 4 — Add Your Projects

Open `components/Projects.tsx` and fill in the `projects` array:

```ts
const projects: Project[] = [
  {
    title: "Your Project Title",
    description: "What the project does in 2–3 sentences.",
    techStack: ["Node.js", "React", "PostgreSQL"],
    demoUrl: "https://yourproject.com",    // optional
    githubUrl: "https://github.com/...",  // optional
    isPublic: true,
  },
];
```

---

## Step 5 — Run Locally

```bash
npm run dev
```

Open [http://localhost:4001](http://localhost:4001) in your browser.

---

## Step 6 — Deploy to Vercel (Free)

```bash
# Option A: Vercel CLI
npm install -g vercel
vercel

# Option B: GitHub (recommended)
# 1. Push this project to GitHub
# 2. Go to vercel.com → Import project → Select your repo
# 3. Add your environment variables in Vercel dashboard:
#    EMAIL_USER, EMAIL_PASS, EMAIL_TO, DATABASE_URL
# 4. Click Deploy ✓
```

---

## Customization Quick Guide

| What to change            | Where                            |
|---------------------------|----------------------------------|
| Your name / title / bio   | `components/Hero.tsx`, `About.tsx` |
| Work experience           | `components/Experience.tsx`      |
| Skills list               | `components/Skills.tsx`          |
| Projects                  | `components/Projects.tsx`        |
| Contact email             | `components/Contact.tsx` + `.env.local` |
| Colors / theme            | `styles/globals.css` (CSS vars)  |
| SEO / page title          | `app/layout.tsx` (metadata)      |
| Profile photo             | `public/profile.jpg` (add it!)   |

---

## Adding Your Photo

1. Add your photo to the `public/` folder as `profile.jpg`
2. In `components/About.tsx`, add this inside the about grid:

```tsx
import Image from "next/image";

<Image
  src="/profile.jpg"
  alt="Tesfahun Aschalew"
  width={300}
  height={300}
  style={{ objectFit: "cover", border: "1px solid var(--border)" }}
/>
```

---

## License

MIT — free to use and modify.
