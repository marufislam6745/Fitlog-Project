FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. Browse a library of workouts, dive into detailed instructions, and build your daily training plan — all tracked live with badge counters and persisted across reloads.


Technologies Used

Next.js (App Router) — routing and page structure
TypeScript — type-safe components and data models
Tailwind CSS — styling and full responsive design
React Context API — global state for Plan and Saved workouts
react-toastify — toast notifications for user actions


Features

Dynamic Workout Library — Fetches all workouts from a live API and displays them in a responsive 3-column grid with category tags, equipment, and stats.
Workout Detail Pages — Dynamic routing (/workout/[id]) shows a full breakdown of each lift: specs table, step-by-step instructions, and images.
Live Plan & Saved Tracking — Add workouts to today's plan or save them for later, with navbar badge counters that update instantly.
My Plan Dashboard — A dedicated page with live metrics (exercises, minutes, calories), tabbed views (Today's Plan / Saved), and the ability to mark workouts done or remove them.
Persistent State — Plan and saved data are stored in localStorage, so nothing is lost on page reload.
Toast Notifications — Real-time feedback for every action (add, save, remove, mark as done).
Fully Responsive Design — Works cleanly across mobile, tablet, and desktop screen sizes.
Custom 404 Page — Friendly error page for any unknown route.







This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
