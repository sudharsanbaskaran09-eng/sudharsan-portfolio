
## Sections

1. **Hero** — name, tagline, magnetic-hover portrait
2. **About** — bio + skills grouped by Languages / Frameworks / Tools / AI
3. **Services** — UI/UX Design, Web Design, Front-end Development, GenAI Integration

npm install
np
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
