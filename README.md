# Paris-Africana International School — Website (Frontend)

This is the frontend for the school website: plain HTML, CSS, and JavaScript —
no build tools, no frameworks. It opens directly in a browser and is ready to
push to GitHub and host on GitHub Pages.

## Project structure

```
paris-africana-website/
├── index.html          Home page
├── about.html           About page
├── academics.html       Academics page
├── gallery.html         Photo gallery (placeholder tiles for now)
├── news.html            News & announcements (sample posts for now)
├── contact.html         Contact form + map
├── css/
│   └── style.css        All styles (design tokens at the top)
├── js/
│   └── script.js        Mobile nav, active-link highlighting, contact form
└── images/
    └── logo.png          Your school crest, background removed
```

## 1. Run it locally in VS Code

1. Open the `paris-africana-website` folder in VS Code (`File > Open Folder`).
2. Install the **Live Server** extension (by Ritwick Dey) from the Extensions panel.
3. Right-click `index.html` → **Open with Live Server**.
4. The site opens at something like `http://127.0.0.1:5500` and reloads automatically when you save changes.

   (Don't just double-click `index.html` to open it as a `file://` path — it will
   look fine, but later, once we add pages that fetch data, that won't work over `file://`.)

## 2. Things to personalize before going live

- **Phone / email**: replace `+234 000 000 0000` and `info@parisafricanaschool.ng`
  everywhere (search-and-replace across all `.html` files).
- **Address / map**: confirm the exact plot address and update the `iframe` src
  in `contact.html` with the correct coordinates (currently centered on Mararaba).
- **Social links**: the Facebook/Instagram icons in the footer are `href="#"`
  placeholders — point them to your real pages.
- **News posts**: `news.html` and the homepage news section have sample
  announcements — replace with real ones.
- **Gallery photos**: `gallery.html` currently shows colored placeholder tiles.
  To use a real photo, put the image file in `images/gallery/` and replace a
  `.gallery-item` block with:
  ```html
  <div class="gallery-item" style="padding:0;">
    <img src="images/gallery/your-photo.jpg" style="width:100%;height:100%;object-fit:cover;" alt="Describe the photo">
  </div>
  ```

## 3. Push this to GitHub

From inside the `paris-africana-website` folder, in the VS Code terminal
(`Terminal > New Terminal`):

```bash
git init
git add .
git commit -m "Initial frontend for Paris-Africana International School site"
```

Then on GitHub.com:
1. Create a new **empty** repository (no README, no .gitignore — you already have files).
2. Copy the commands GitHub shows you under "…or push an existing repository from the command line", something like:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## 4. Host it free with GitHub Pages

1. On your repo's GitHub page, go to **Settings → Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute, then your site is live at:
   `https://<your-username>.github.io/<repo-name>/`

Every time you `git push` new changes, the live site updates automatically.

## 5. What's next (backend phase)

Two features are wired up on the frontend but not yet functional, because
GitHub Pages can only serve static files — it can't run server code:

- **Contact form** (`contact.html`) — currently just validates and shows a
  demo success message (see the comment block in `js/script.js`).
- **Admin panel** — not built yet; this will let you add news posts without
  touching code.

For those, the plan is:
- **Backend**: Node.js + Express
- **Templating**: EJS (reuses this same HTML/CSS)
- **Database**: SQLite
- **Emails**: Nodemailer
- **Hosting**: Render (free tier, deploys from this same GitHub repo) — since
  GitHub Pages can't run Node.js.

Come back and we'll build that next, on top of this frontend.
