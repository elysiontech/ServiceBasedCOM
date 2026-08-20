# FOURGE — Company Website (Frontend)

Placeholder name — search/replace "FOURGE" and edit `src/data/content.js`
to rebrand once you've picked a company name.

## Stack
- React + Vite
- Tailwind CSS v4
- Framer Motion (hero diagram animation)
- Firebase Firestore (enquiry form storage)

## Getting started
```bash
npm install
npm run dev
```

## Wiring up Firebase (for the contact form)
1. Create a free project at https://console.firebase.google.com
2. Add a Web App inside it, copy the config values shown
3. Copy `.env.example` to `.env` and paste the values in
4. In Firestore, set rules so the public can only *create* enquiries:
   ```
   match /enquiries/{doc} {
     allow create: if true;
     allow read, update, delete: if false;
   }
   ```
5. Submissions land in the `enquiries` collection — read them from the
   Firebase console, or from any other app/site using the Firebase
   Admin SDK + your service account key.

Until `.env` is filled in, the form still works — it just logs the
enquiry to the browser console instead of writing to Firestore, so you
can develop the UI without a live project.

## Deploying
Both Render and Netlify can build this as a static site:
- Build command: `npm run build`
- Publish directory: `dist`
- Add the same Firebase env vars in the host's dashboard (Render:
  Environment tab; Netlify: Site settings → Environment variables)

## Theme
Dark/light follows the visitor's OS setting by default (`prefers-color-scheme`),
applied before first paint via a small inline script in `index.html` to avoid
a flash of the wrong theme. The toggle in the navbar (sun/moon/monitor icon)
lets a visitor override it — their choice is saved to `localStorage` and wins
over the system setting until they pick "System" again.

## Structure
```
src/
  components/   All page sections (Hero, Services, Founders, Contact, ...)
  data/         content.js — all site copy in one place, edit freely
  lib/          firebase.js — Firestore init + submitEnquiry() helper
```

## What's placeholder and needs your input
- Company name & tagline (`src/data/content.js` → `brand`)
- Founder names, roles, bios (`founders` array)
- Work / case studies (`work` array)
- Testimonials (`testimonials` array) — currently generic, replace once
  you have real clients
- Engagement models describe *how* you charge, not fixed prices — add
  real numbers once you've decided them, or keep it quote-based\
