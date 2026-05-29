# Sudharsan  — Cloud And DevOps Engineer Portfolio

A dark-themed personal portfolio for **Sudharsan B** — Computer Science graduate from NSUT, currently a Content R&D Trainee at PhysicsWallah. Focused on UI/UX, front-end development, and GenAI integration.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Designed for one-click deployment on **Vercel**.

## Stack

- React 18 / TypeScript
- Vite (build tool)
- Tailwind CSS (utility-first styling)
- Framer Motion (animations + scroll effects)
- Lucide React (icons)
- Kanit font (Google Fonts, weights 300–900)

## Sections

1. **Hero** — name, tagline, magnetic-hover portrait
2. **About** — bio + skills grouped by Languages / Frameworks / Tools / AI
3. **Services** — UI/UX Design, Web Design, Front-end Development, GenAI Integration
4. **Projects** — sticky-stacking cards for AI Tutor, PiLearn, ResumeIQ, Notch
5. **Contact** — Email, WhatsApp, LinkedIn, GitHub

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → /dist
npm run preview  # serve /dist locally
```

## Project structure

```
src/
├── App.tsx                    # composes all sections
├── main.tsx                   # React entry
├── index.css                  # global styles + .hero-heading gradient
└── components/
    ├── HeroSection.tsx        # navbar, massive heading, magnetic portrait
    ├── AboutSection.tsx       # bio, animated text, skills grid
    ├── ServicesSection.tsx    # white section, 4 numbered services
    ├── ProjectsSection.tsx    # sticky-stacking project cards
    ├── ContactSection.tsx     # 4 contact methods with icons
    │
    ├── ContactButton.tsx      # gradient pill CTA
    ├── LiveProjectButton.tsx  # ghost outline pill
    ├── FadeIn.tsx             # whileInView animation wrapper
    ├── Magnet.tsx             # mouse-following magnetic hover
    └─
## Credits

Designed & built by **Sudharsan B** · [LinkedIn](https://www.linkedin.com/in/harsh-goyal-7900b2256/) · [GitHub](https://github.com/harshgoyal27)
