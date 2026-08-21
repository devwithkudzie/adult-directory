# Velvet — Next.js Adult Directory UI Starter

A fictional 18+ directory starter built with Next.js App Router.

## Included
- First-visit 18+ age gate using localStorage
- Homepage
- Browse page
- Zimbabwe/city index
- Dynamic city pages
- Dynamic profile pages
- Safety page
- About page
- Responsive design
- Stock-image placeholders

## Run
```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Design
Palette:
- near-black plum background
- muted rose accent
- warm champagne secondary accent
- soft off-white typography

Stock images are remote Unsplash placeholders and can be replaced in `data/listings.ts` and `app/globals.css`.

This is a UI starter. Add your own backend, authentication, database, moderation, policies and production compliance.

## Important: clean install

If you previously ran another version of this starter, remove stale build/dependency files before starting:

```bash
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

This revision pins Next.js and React versions instead of using caret ranges.



git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/devwithkudzie/adult-directory.git
git push -u origin main