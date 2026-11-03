The Integrity Movement & Integrity Rising — Web Platform
Welcome to the official static web platform repository for The Integrity Movement and Integrity Rising. This website serves as the digital hub for civic transparency resources, public governance advocacy, and daily transformational reflections.

🛠 Tech Stack
Framework: Astro (Static Site Generator)

Content Management: Decap CMS (Git-based Headless CMS)

Hosting: GitHub Pages

Automation: GitHub Actions (CI/CD Deployment)

📂 Repository Structure
integrity-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions auto-deployment pipeline
├── public/
│   ├── admin/                  # Decap CMS dashboard assets
│   │   ├── config.yml          # CMS field definitions and settings
│   │   └── index.html          # Admin portal interface
│   ├── uploads/                # Media & image assets folder
│   └── CNAME                   # Custom domain configuration file
├── src/
│   ├── content/                # Markdown content collections
│   │   ├── articles/           # Advocacy & news articles
│   │   └── reflections/        # Integrity Rising daily reflections
│   ├── layouts/                # Global HTML layouts & CSS themes
│   └── pages/                  # Route templates (Index, Admin, etc.)
├── astro.config.mjs            # Astro project settings
├── package.json                # Project dependencies and build scripts
└── tsconfig.json               # TypeScript configuration


---

## 🚀 Local Development Setup

To run this website locally on your computer:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR-USERNAME/integrity-website.git](https://github.com/YOUR-USERNAME/integrity-website.git)
   cd integrity-website
Install dependencies:

Bash
npm install
Start local development server:

Bash
npm run dev
Open your browser and navigate to http://localhost:4321.

Build for production preview:

Bash
npm run build
npm run preview
📝 Content Authoring (Decap CMS)
Non-technical editors can publish or edit daily reflections and news articles without writing code:

Navigate to https://integritymovement.org/admin (or http://localhost:4321/admin in dev mode).

Sign in with authorized GitHub credentials.

Add or edit entries under Integrity Rising Reflections or Movement News & Articles.

Click Publish. Decap CMS will automatically create a Git commit, triggering a site rebuild on GitHub Pages.

🚀 Deployment Process
Deployment is fully automated using GitHub Actions:

Every commit pushed to the main branch triggers .github/workflows/deploy.yml.

The workflow compiles static HTML/CSS using Astro and publishes the build directly to GitHub Pages edge distribution servers.

📄 License
© The Integrity Movement. All rights reserved.

# Test local dev server
npm run dev
