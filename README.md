# Shosanacodemia

A full-stack software development training institute web app built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Firebase**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS |
| Auth | Firebase Authentication (email/password) |
| Database | Firebase Firestore |
| Hosting | Vercel |
| API | Next.js Route Handlers (Serverless) |

---

## Quick Start

```bash
# 1. Clone and install
git clone <your-repo>
cd shosanacodemia
npm install

# 2. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Firebase credentials (see Firebase Setup below)

# 3. Run development server
npm run dev
# → http://localhost:3000
```

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts         # POST — stores contact messages
│   │   ├── register/route.ts        # POST — stores cohort registrations
│   │   └── cohortEndDate/route.ts   # GET  — returns cohort end date
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                     # Homepage — assembles all sections
├── components/
│   ├── Header.tsx                   # Nav + auth buttons + mobile menu
│   ├── AuthModal.tsx                # Sign In / Sign Up modal
│   ├── Banner.tsx                   # Hero + countdown timer
│   ├── Curriculum.tsx               # Course grid
│   ├── Benefits.tsx                 # Why us + stats
│   ├── AboutUs.tsx                  # Mission + team placeholder
│   ├── Testimonials.tsx             # Horizontal scroll testimonials
│   ├── Partners.tsx                 # Partner logos
│   ├── Registration.tsx             # Cohort registration form
│   ├── ContactUs.tsx                # Contact form
│   └── Footer.tsx                   # Links + social
├── data/
│   └── index.ts                     # All mock/static data
├── hooks/
│   └── useAuth.ts                   # Firebase Auth hook
├── lib/
│   └── firebase/
│       ├── client.ts                # Firebase client SDK init
│       └── admin.ts                 # Firebase Admin SDK init
└── types/
    └── index.ts                     # All TypeScript interfaces
```

---

## Firebase Setup

### 1. Create Firebase Project
1. Go to [https://console.firebase.google.com](https://console.firebase.google.com)
2. Click **Add project** → give it a name → continue
3. Disable Google Analytics (optional) → **Create project**

### 2. Add a Web App
1. In your project → **Project Overview** → click the **</>** (Web) icon
2. Register app with a nickname → **Register app**
3. Copy the `firebaseConfig` values into `.env.local`

### 3. Enable Authentication
1. Firebase Console → **Authentication** → **Get started**
2. **Sign-in method** → Enable **Email/Password**

### 4. Create Firestore Database
1. Firebase Console → **Firestore Database** → **Create database**
2. Choose **Start in production mode** → select a region → **Enable**
3. Deploy security rules: `firebase deploy --only firestore:rules`

### 5. Create Cohort Settings Document
In Firestore, create:
- **Collection**: `settings`
- **Document ID**: `cohort`
- **Field**: `endDate` (type: Timestamp) — set to your target cohort date

### 6. Admin SDK (for serverless functions)
1. Firebase Console → **Project Settings** → **Service Accounts**
2. Click **Generate new private key** → download JSON
3. Base64-encode it:
   ```bash
   node -e "const fs=require('fs'); console.log(Buffer.from(fs.readFileSync('serviceAccount.json')).toString('base64'))"
   ```
4. Paste the output as `FIREBASE_SERVICE_ACCOUNT_BASE64` in `.env.local`
5. In `src/app/api/register/route.ts` and `src/app/api/contact/route.ts`, uncomment the Firestore write blocks.

---

## Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo at https://vercel.com/new
```

### Environment Variables on Vercel
In your Vercel project → **Settings** → **Environment Variables**, add all variables from `.env.local.example`:
- All `NEXT_PUBLIC_FIREBASE_*` values
- `FIREBASE_SERVICE_ACCOUNT_BASE64`

---

## Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # ESLint
npm run type-check   # TypeScript check without emitting
```

---

## Enabling Firebase Features (TODOs)

All Firebase integration points are marked with `// TODO:` comments. To go from demo mode to production:

1. **Firestore writes** — Uncomment `getAdminDb()` calls in API routes and ensure `FIREBASE_SERVICE_ACCOUNT_BASE64` is set.
2. **Cohort date from Firestore** — Uncomment the Firestore read in `/api/cohortEndDate/route.ts`.
3. **Auth protection** — Uncomment JWT verification in `/api/register/route.ts` to require signed-in users.
4. **Email notifications** — Replace `console.log` in contact/register routes with Resend or SendGrid.

---

## Firestore Security Rules

See `firestore.rules`. Deploy with:
```bash
firebase deploy --only firestore:rules
```

---

## License
MIT
