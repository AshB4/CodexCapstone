# Codex Academy Website – Website Redesign Proposal - Ashley Broussard
## Product Brief

Codex Academy is a simple, professional, multi-page web application designed to showcase available coding programs and allow prospective students to submit inquiries. The site focuses on clarity, usability, and real-world data integration, demonstrating how a frontend application can dynamically display content and manage leads using Supabase.

---

## Live Site and Repository

* **Live Site:** 
* **GitHub Repository:** https://github.com/AshB4/CodexCapstone

---

## Architecture Overview

### Frontend

* Built with HTML, SCSS (7-1 architecture), and custom responsive styles.
* Three pages:

  * `index.html` – Home page with overview and navigation
  * `programs.html` – Displays programs dynamically from Supabase
  * `contact.html` – Contact form for lead submission

### Backend / Data Layer

* Supabase is used as the backend service.
* Two database tables:

  * `program_table` – Stores program title, description, duration, and image URL
  * `email_form` – Stores contact form submissions (full name, email, message)
* Supabase Storage bucket is used to host program images.

### JavaScript

* `programCards.js` fetches program data from Supabase and renders Bootstrap cards dynamically.
* `contactForm.js` submits contact form data to Supabase and displays a success message.
* Supabase client is configured using the public anon key.

### Data Flow

1. Page loads in the browser.
2. JavaScript fetches data from Supabase using the client SDK.
3. Program data is transformed using `map()` and injected into the DOM.
4. Form submissions are sent to Supabase and stored in the database.

---

## Setup Notes

1. Clone the repository.
2. Add your Supabase project URL and public anon key to the JavaScript files.
3. Ensure the Supabase Storage bucket for program images is public.
4. Open the HTML files locally or deploy the project using Netlify.

---

## API Keys and AI Usage

* Supabase public anon keys are used on the frontend; no secret keys are committed.
* No sensitive credentials are stored in the repository.
* AI tools were used for assistance with structure, debugging, and content generation.

---

## Project Requirements Checklist

* Responsive layout using SCSS utilities and media queries
* Three-page navigation with shared navbar
* Supabase data fetching and insertion
* Image management via Supabase Storage
* Safe DOM updates and data transformation
* Professional documentation

## Daily Tracker
- **Day 1 - January 13, 2026:** Initialized project with HTML pages (index.html, programs.html, contact.html). Set up basic folder structure and installed Sass via npm. No major issues—focused on planning the multipage layout.
  
- **Day 2 - January 14, 2026:** Implemented SCSS 7-1 architecture (abstracts, base, components, etc.) and compiled to CSS. Added basic variables and button styles. Encountered Sass deprecation warnings; resolved by noting for future updates.
  
- **Day 3 - January 15, 2026:** Integrated Supabase API in backend JS files (supabase.js, programCards.js). Tested data fetching for programs—used map() for data transformation. Added safe DOM updates with textContent.
  
- **Day 4 - January 16, 2026:** Worked on responsive design with custom media queries in SCSS. Added purple button variant for advanced styling. Compiled without source maps to clean output.
  
- **Day 5 - January 17, 2026:** Added JS class for API management (e.g., SupabaseAPI class). Updated README with architecture overview. Reflected on balancing minimal effort with rubric requirements.
Overall Reflection: This project reinforced full-stack basics, especially API integration and responsive SCSS. Biggest challenge was ensuring all rubric items without overcomplicating.