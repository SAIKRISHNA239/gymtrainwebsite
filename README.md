# Gym Trainer — One‑page Website (React + Vite + Tailwind)
 
 Bold, modern, responsive one‑page site for a personal trainer. Built with React (JavaScript), Vite, and Tailwind CSS.
 
 ## Quick Start
 
 ```bash
 npm install
 npm run dev
 # open http://localhost:5173
 ```
 
 ## Scripts
 - dev: start Vite dev server
 - build: production build to dist/
 - preview: preview the built site
 - test: run unit tests (Jest + React Testing Library)
 
 ```bash
 npm run build
 npm run preview
 npm test
 ```
 
 ## Project Structure
 - src/components: Header, Hero, About, Services, ServiceCard, Stats, Transformations, Modal, Pricing, PricingCard, Testimonials, HowItWorks, FAQ, Accordion, ContactForm, Footer, DarkModeToggle, BrochureButton
 - src/data: constants.js (services, plans, testimonials, transformations, FAQs)
 - src/utils: validation.js (contact form validation)
 - src/hooks: useLockBodyScroll.js
 - src/__tests__: Header.test.jsx, ContactForm.test.jsx
 - public: static assets (favicons)
 - netlify.toml: build settings
 - deploy.md: 5‑step Netlify deploy guide
 
 ## Design System
 - Colors: primary #0b0b0b, text #ffffff, accent #ff3b30, success #22c55e
 - Typography: Inter for headings/body; system sans fallback
 - Tailwind utilities: see src/index.css for utilities like .btn, .card, .section
 
 ## Images
 Using Unsplash placeholders. Suggested search terms:
 - "fitness trainer portrait"
 - "gym workout"
 - "before after transformation"
 Replace with your licensed photos for production. Ensure client consent for transformations.
 
 ## Features
 - Sticky header, mobile menu (accessible), smooth scrolling
 - Hero with CTA, social proof
 - About with highlights
 - Services grid (responsive 1/2/4 columns)
 - Transformations with Before/After toggle + accessible modal
 - Pricing with highlighted plan + PDF brochure export
 - Testimonials carousel controls
 - How It Works (3 steps)
 - FAQ accordion (accessible)
 - Contact form with client‑side validation + Netlify Forms capture
 - Dark mode toggle (respects OS preference)
 - Performance: lazy images, Tailwind, minimal deps
 
 ## Accessibility
 - Semantic sections: header, main, section, footer
 - Keyboard support: menus, modals, accordions
 - ARIA attributes for dialog/accordion
 - High contrast text and focus rings
 
 ## SEO & Metadata
 - index.html includes title, description, og:*, twitter:card, theme-color, viewport, lang
 
 ## Tailwind CSS
 - Tailwind v4 with `@import "tailwindcss";`
 - PostCSS configured in postcss.config.js
 
 If your editor flags `@apply` warnings, they are from the CSS linter and do not affect the build.
 
 ## Netlify Deployment
 1. Push this project to a Git repo (GitHub/GitLab/Bitbucket).
 2. On Netlify, create a new site from Git.
 3. Build command: `npm run build`, Publish directory: `dist`.
 4. Forms: Netlify will auto-detect the `contact` form after first deploy.
 5. Optional email function: see deploy.md for SendGrid setup.
 
 ## Customization
 - Trainer name: Header, About copy, and BrochureButton props
 - Prices/features: src/data/constants.js (PLANS)
 - Images: replace URLs in components or move into data/constants.js
 - Contact links: update WhatsApp and phone in ContactForm
 
 ## Testing
 - Jest + RTL configured. Example tests in src/__tests__/
 
 ## License
 For personal/portfolio use. Replace images and copy with your own content for production.
