# Akash Tharu — Professional Portfolio

A fully custom, dark-mode portfolio website built with pure HTML, CSS, and JavaScript. Designed with an iPhone-inspired glassmorphism aesthetic, dynamic RGB animations, and a fully responsive layout.

---

## 🚀 Features

- **iPhone Glassmorphism Design** — Translucent cards with volumetric blur, specular highlights, and inner shadows
- **RGB Animations** — Custom keyframe animations for glowing borders, icons, and text on hover
- **Responsive Layout** — Adapts cleanly to all screen sizes (desktop, tablet, mobile)
- **Professional Tech Stack Display** — Categorized skill sections with icons and interactive tags
- **Floating Label Forms** — Modern form labels that animate upward on focus
- **Smooth Typing Effect** — Hero section with animated profession text cycling
- **Contact Link Grid** — Glassmorphic cards linking to Email, LinkedIn, GitHub, Facebook
- **Portfolio Cards** — Live project showcases with descriptions and Play Store links
- **SEO Optimized** — Structured data (JSON-LD), semantic HTML, meta descriptions, and canonical URLs

---

## 🛠️ Technologies Used

| Category | Technologies |
|---|---|
| **Structure** | HTML5 (Semantic) |
| **Styling** | CSS3 (Flexbox, Grid, Keyframes, Custom Properties) |
| **Logic** | JavaScript (Vanilla, No Frameworks) |
| **Icons** | FontAwesome 6 CDN |
| **Bot Protection** | Cloudflare Turnstile |

---

## 📁 File Structure

```
Keylor Portfolio/
├── index.html       # Main HTML — all sections (Hero, About, Skills, Portfolio, Contact)
├── style.css        # All styles, animations, glassmorphism, and responsive media queries
├── script.js        # Interactive elements, typing effect, smooth scroll, nav toggle
├── keylor.png       # Profile photo (also used as favicon)
└── README.md        # This file
```

---

## 📝 How To Update Content

### ✏️ Personal Info
- **Name / Title / Description** → `index.html` → Hero Section (`#home`)
- **Profile Photo** → Replace `keylor.png` (keep same filename)
- **Typing Roles** → `script.js` → find the `typedStrings` array and edit the list

### 🧠 Skills (About Section)
- **Tech Stack Categories** → `index.html` → `#about` → `.skill-categories`
- Add/remove `<div class="skill-category">` blocks to add more skill groups
- Add/remove `<span>` tags inside `.tech-tags` to add individual skills

### 🔧 Skills (Cards Section)
- **Service Cards** → `index.html` → `#services` → `.services-grid`
- Each `<div class="service-card">` is one skill card with icon, title, description, and tags

### 📁 Projects (Portfolio Section)
- **Project Cards** → `index.html` → `#portfolio` → `.portfolio-grid`
- Each `<div class="portfolio-box">` is one project card
- Update `href` in `<a class="live-link">` to point to the correct Play Store / live URL

### 📄 How to Add Your CV (PDF)
1. **Prepare File**: Rename your CV PDF file to something simple like `cv.pdf`.
2. **Upload**: Place the `cv.pdf` file in the same folder as `index.html`.
3. **Link in Code**: Open `index.html`, search for `DOWNLOAD CV`, and change the `href="#"` to `href="cv.pdf"`.
4. **Result**: When users click the button, it will automatically download your PDF.

### 📬 Contact Info
- **Social Links** → `index.html` → `#contact` → `.contact-links-grid`
- Update `href` attributes on each `.contact-link-card` anchor

### 🎨 Colors & Animations
- **RGB Effects** → `style.css` → search `@keyframes rgb` to find and edit animation keyframes
- **Glassmorphism** → search `backdrop-filter` and `rgba(255,255,255` in `style.css`
- **Accent Color** → `#64ffda` (teal) used throughout — use Find & Replace in your editor to change it globally

---

## 🗂️ Sections Overview

| Section | ID | Description |
|---|---|---|
| Hero | `#home` | Intro, name, typing effect, CTA buttons |
| About | `#about` | Bio, stats (Years/Projects/Commitment), full tech stack |
| Skills | `#services` | 6 skill cards (Web, Cybersecurity, App Dev, UI/UX, Cloud, Marketing) |
| Portfolio | `#portfolio` | 5 live app cards (BhashaPul, Love Lines, ConvoKick, LitCaps, Ezra) |
| Contact | `#contact` | Header card + 4 contact link cards (Email, LinkedIn, GitHub, Facebook) |

---

## 🚢 Deployment Notes

- **Cloudflare Turnstile**: Replace `YOUR_TURNSTILE_SITE_KEY` in `index.html` with your real key before going live
- **Website URL**: Replace `https://your-website-url.com` in the `<head>` meta tags and JSON-LD script
- **Copyright Year**: Footer has `© 2024` — update as needed

---

*Designed & Developed by Akash Tharu*
