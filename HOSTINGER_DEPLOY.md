# Luxe Nails Studio — Deployment & Customisation Guide

This site is three static files: `index.html`, `styles.css`, `script.js`. No build step, no server. Drop them on Hostinger and you're live.

---

## 1. Before you deploy — swap the placeholders

Open `index.html` in any editor and find these spots:

| What to change | Where it lives |
|---|---|
| Business name "Luxe Nails Studio" | `<title>`, nav `nav__name`, hero, footer |
| Your name (About section) | `<h2>Hi, I'm <em>[Your Name]</em></h2>` |
| Years of experience | `<strong>[X]</strong>` in About section |
| Instagram handle | `href="https://instagram.com/YOUR_HANDLE"` + `@YOUR_HANDLE` |
| Email | `mailto:hello@luxenails.com` + visible text |
| Phone | `tel:+10000000000` + visible text |
| Address | In the **Location** section |
| Opening hours | In the **Location** section |
| Service prices | In the **Services** section |
| Avatar photo | `about__avatar` image `src` |
| Gallery photos | Eight `<button class="gallery__item">` entries |

### Google Maps embed
Search `===== GOOGLE MAPS EMBED =====` in `index.html`.
1. Go to https://www.google.com/maps, search the real address.
2. Click **Share → Embed a map → Copy HTML**.
3. Replace the whole `<iframe …></iframe>` with the one you just copied.

### Booksy embed
Search `===== BOOKSY EMBED =====` in `index.html`.
1. Log in at https://biz.booksy.com.
2. **Marketing → Tools → Website widget** → copy the embed code.
3. Replace the entire contents of `<div class="book__placeholder" id="booksy-embed">…</div>` with the Booksy code. (Calendly or Square Appointments work the same way.)

### Photos
For real photos, create an `images/` folder next to `index.html`, drop in `.jpg`/`.webp` files, then change the `src` in each gallery `<img>` to e.g. `images/my-manicure-1.jpg`. Keep images around **1400 px wide** and compressed (try https://squoosh.app).

---

## 2. Upload to Hostinger

### Option A — File Manager (easiest)
1. Log in at https://hpanel.hostinger.com.
2. Open **Files → File Manager**.
3. Navigate into `public_html/`. Delete the default `default.php` / `index.html` if present.
4. Drag-and-drop `index.html`, `styles.css`, `script.js`, and the `images/` folder into `public_html/`.
5. Visit the domain in a browser — that's it.

### Option B — FTP (bulk uploads)
1. In hPanel go to **Files → FTP Accounts**, note the host, username, password.
2. Open FileZilla (or any FTP client) and connect.
3. Upload the contents of this folder into `/public_html/`.

### HTTPS
Hostinger provisions a free SSL automatically. If the padlock doesn't appear within ~30 minutes, go to **Security → SSL** and click **Install**.

---

## 3. Good-to-know tips

- **Favicon:** drop a 512×512 png named `favicon.png` next to `index.html` and add `<link rel="icon" href="favicon.png">` inside `<head>`.
- **SEO:** update the `<meta name="description">` tag and the `<title>`; that alone goes a long way for Google.
- **Analytics (optional):** paste your Google Analytics / Plausible snippet inside `<head>`.
- **Caching:** Hostinger caches aggressively. After an upload, if you don't see changes, go to **Advanced → Cache Manager → Purge All**.

---

## 4. Local preview before uploading

Just double-click `index.html` in Finder/Explorer — it opens in the browser with everything working. (The lightbox, mobile menu, and scroll effects all run locally.)

If you'd rather run a tiny local server:

```bash
# from inside the site folder
python3 -m http.server 8080
# then open http://localhost:8080
```
