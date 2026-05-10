# 🌿 PlantFusion — Plant E-commerce UI

A responsive plant e-commerce website built with **React** and **Tailwind CSS**, matching the Figma design for the Frontend Internship Assignment.

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Landing page with hero, trending, product grid, reviews, footer |
| Product | `/product/:id` | Single product detail with related items |

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed top nav with mobile menu
│   ├── HeroSection.jsx     # "Earth's Exhale" hero banner
│   ├── PlantCard.jsx       # Reusable product card
│   ├── SectionTitle.jsx    # Consistent section headings
│   ├── TestimonialCard.jsx # Customer review card
│   ├── Button.jsx          # Reusable button (solid / outline / ghost)
│   └── Footer.jsx          # Links, newsletter, socials
├── pages/
│   ├── HomePage.jsx        # Assembles all homepage sections
│   └── ProductPage.jsx     # Product detail + related products
├── data/
│   └── plants.js           # All plant data + review data
├── App.jsx                 # Router setup + cart state
├── index.js                # React DOM entry
└── index.css               # Tailwind + Google Fonts import
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Build for production
npm run build
```

---

## Tech Stack

- **React 18** — component-based UI
- **React Router v6** — client-side routing
- **Tailwind CSS** — utility-first styling
- **Lucide React** — consistent icon set

---

## Design Notes

- Dark theme: `#0e1210` background, `#4caf50` green accent
- Typography: Playfair Display (headings) + DM Sans (body)
- Fully responsive: 320px mobile → 1440px desktop
- Hover effects on all cards, button animations, mobile nav toggle

---

## Deployment

Works out of the box on **Vercel** :

```bash
# Vercel CLI
vercel --prod

# Or connect GitHub repo at vercel.com
```
