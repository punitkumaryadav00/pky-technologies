# PKY Technologies — Official Digital Engineering Platform

> High-performance digital presence, AI automations, and commercial growth architecture built for ambitious enterprises.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-ff69b4?style=flat)](https://www.framer.com/motion/)

---

## 🚀 Quick Start for Collaborators / Team

Follow these simple steps to run this project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/punitkumaryadav00/pky-technologies.git
cd pky-technologies
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with hot module reloading.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 🏗️ Project Architecture & Sitemap

```
src/
├── app/
│   ├── layout.tsx                     # Global layout, fonts & Schema.org JSON-LD
│   ├── globals.css                    # Design system tokens & Tailwind CSS
│   ├── page.tsx                       # Homepage (Hero, Services, Why Us, Process, FAQ, CTA)
│   ├── about/page.tsx                 # About Us, Agency comparison & Manifesto
│   ├── contact/page.tsx               # Interactive RFP proposal planner & WhatsApp direct
│   ├── estimate/page.tsx              # Interactive Scope & Ballpark Estimator Wizard
│   ├── industries/page.tsx            # Vertical solutions (Legal, Health, D2C, SaaS, etc.)
│   ├── insights/page.tsx              # Technical playbooks & Newsletter brief
│   ├── portfolio/page.tsx             # Interactive Case Studies & verified ROI metrics
│   ├── services/
│   │   ├── page.tsx                   # Services hub
│   │   ├── web-development/page.tsx   # Custom Web Apps, Next.js, Headless Storefronts
│   │   ├── seo/page.tsx               # Technical SEO, GEO/AEO & Paid Client Acquisition
│   │   ├── branding/page.tsx          # Brand Strategy, UI/UX & Design Systems
│   │   └── ai-automation/page.tsx     # Custom AI Chatbots, WhatsApp & Workflow Automation
│   ├── robots.ts                      # Robots.txt with AI bot crawlers allowed
│   └── sitemap.ts                     # Dynamic Next.js XML sitemap generator
└── components/
    ├── layout/                        # Navbar with mobile drawer & Enterprise Footer
    ├── home/                          # Modular homepage sections
    ├── contact/                       # ContactForm client component with multi-step selection
    ├── estimate/                      # ProjectEstimator interactive wizard
    ├── insights/                      # NewsletterForm client component
    ├── portfolio/                     # PortfolioGrid client component with category filters
    └── ui/                            # Shared reusable UI elements
```

---

## 🎨 Tech Stack & Engineering Standards

- **Core Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Server Components)
- **UI Library**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) with custom design system variables
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Structured Data**: Schema.org JSON-LD (`Organization` & `ProfessionalService`), dynamic OpenGraph tags, XML Sitemap & Robots.txt.

---

## 👥 Collaboration Workflow

1. Always pull latest changes before starting work:
   ```bash
   git pull origin main
   ```
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit and push:
   ```bash
   git add .
   git commit -m "feat: description of work done"
   git push origin feature/your-feature-name
   ```

---

## 📄 License & Ownership
Copyright © 2026 **PKY Technologies**. All rights reserved.
