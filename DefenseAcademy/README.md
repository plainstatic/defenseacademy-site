# Defense Academy

Professional training and advisory for operational resilience in critical infrastructure.

## Features

- **Responsive Design** - Mobile-first approach, works across all devices
- **Design System** - CSS variables, comprehensive spacing and typography scale
- **Pure Static** - Plain HTML, CSS, and vanilla JavaScript—no build tools
- **Accessible** - ARIA labels, semantic HTML, focus states
- **Performant** - Lightweight and optimized for fast load times

## Project Structure

```
DefenseAcademy/
├── index.html              # Homepage
├── pages/
│   └── courses.html        # Course offerings
├── css/
│   ├── styles.css          # Shared design system and layout styles
│   ├── contact-form.css    # Contact form and footer meta styles for form pages
│   └── disclosure.css      # Disclosure-page-only styles
├── js/
│   └── nav.js              # Navigation interactivity
├── images/                 # Logo and assets
└── README.md               # This file
```

## Quick Start

1. **Local preview**: Open `index.html` in your browser
2. **Deploy**: Upload all files to Cloudflare pages

## Editing Notes

- The deployable HTML files in the repository root, `pages/`, and `security/` are the current source of truth.
- Matching files under `src/templates/` are kept in sync manually for now. If you change one of those page pairs, update both until a real generation step exists.

## Deployment

### GitHub Pages + Cloudflare

1. Push repository to GitHub
2. Enable GitHub Pages in repository settings (source: main branch)
3. Add custom domain and point DNS to Cloudflare
4. Configure Cloudflare security:
   - Enable WAF rules for form rate limiting
   - Add security headers (CSP, HSTS, Permissions-Policy, X-Content-Type-Options, Referrer-Policy)

### Alternative Hosts

- **Netlify**: Connect repo or drag-and-drop `DefenseAcademy/` folder
- **Vercel**: Connect repo for automatic deployments
- **Any Web Host**: Upload files via FTP/SSH
- **AWS S3 + CloudFront**: Static site hosting with CDN

## Design System

### Colors

```css
--primary: #1e3a5f              /* Dark blue */
--secondary: #f97316            /* Orange */
--bg: #000a15                   /* Dark background */
--surface: #05131f              /* Surface level */
--surface-2: #0a1e2e            /* Elevated surface */
--text: #ffffff                 /* Primary text */
--text-secondary: #b0b9c3       /* Secondary text */
```

### Typography Scale

- **Heading 1**: 3rem
- **Heading 2**: 2.5rem  
- **Heading 3**: 1.5rem
- **Body**: 1rem
- **Small**: 0.875rem

### Spacing

13-level scale: `--space-1` (0.25rem) through `--space-64` (16rem)

### Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1023px (2 columns)
- **Desktop**: ≥ 1024px (3+ columns)

## Content

### Pages

- **Homepage** (`index.html`) - Hero, approach, features, services, partners, contact form
- **Courses** (`pages/courses.html`) - Course offerings with teaser cards and CTA

### Sections

- **Hero** - Headline, subheadline, call-to-action buttons
- **Approach** - Core philosophy with blockquote
- **Features** - 3 cards highlighting methodology, training, and integration
- **Services** - 5-item list of offerings with descriptions
- **Partners** - 3-card grid of sectors served
- **Contact Form** - Formspree integration with spam protection (honeypot)
- **Footer** - Links, copyright, organizational info

## Customization

### Editing Content

Edit HTML directly in `index.html` and `pages/courses.html`.

### Changing Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
  --primary: #1e3a5f;
  --secondary: #f97316;
  /* Update other colors as needed */
}
```

### Responsive Adjustments

Media queries are in `css/styles.css`:

```css
@media (max-width: 767px) {
  /* Mobile styles */
}
```

## Security & Best Practices

### Application-Level Hardening

- Forms use bounded field lengths and stricter client-side validation.
- Form inputs are trimmed and stripped of control characters before submission.
- A visually hidden honeypot field (`_gotcha`) is present for basic bot resistance.
- No first-party cookies are set by this site, so `Secure`, `HttpOnly`, and `SameSite` cookie settings are not applicable at the application layer.
- CSRF tokens are not applicable because this site does not submit to its own origin; the contact form posts directly to Formspree.

### Deployment Headers

The repository includes an [_headers](./_headers) file with:

- `Content-Security-Policy`
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy`
- `Cross-Origin-Opener-Policy`
- `Cross-Origin-Resource-Policy`
- `Origin-Agent-Cluster`
- cache-control rules for HTML, CSS, JS, images, and `.well-known`

Platform dependency:
- `_headers` works on platforms that honor static header files, such as Netlify and Cloudflare Pages.
- If you deploy on GitHub Pages with Cloudflare in front, mirror the same response headers in Cloudflare Response Header Rules because GitHub Pages will not apply `_headers` itself.

### CSP Tradeoffs

The CSP is intentionally strict:

- `script-src 'self'` allows only local JavaScript files.
- `style-src 'self'` allows only local stylesheets.
- `img-src 'self' data:` allows local images and small data URLs if ever needed.
- `form-action https://formspree.io` allows the contact form to submit only to Formspree.
- `frame-ancestors 'none'` blocks clickjacking by preventing framing.

Tradeoff:
- This policy will block inline scripts, inline event handlers, third-party analytics, embedded videos, external fonts, and new external APIs unless they are explicitly added.
- That is deliberate for a small static marketing site, but if you later add analytics or embeds, update the CSP carefully rather than broadening it with unsafe directives like `'unsafe-inline'`.

### Hosting-Level Changes Required

If deploying behind Cloudflare:

1. Enable **Always Use HTTPS**.
2. Add **HSTS** in Cloudflare with a staged rollout:
   - Start with a low max-age in Cloudflare.
   - Only enable preload after confirming the whole domain is HTTPS-only.
3. Add a Response Header Rule if your host does not apply `_headers`.
4. Add rate limiting / WAF rules for repeated POSTs or suspicious request bursts.
5. Hide origin technology where possible:
   - disable or suppress `Server` and `X-Powered-By` headers when your host exposes them.

### Formspree Configuration Required

Configure these in Formspree for production:

1. Restrict submissions to your production domain(s).
2. Enable spam filtering and CAPTCHA/challenge features if available on your plan.
3. Confirm notification and reply-to settings use expected addresses only.
4. Review abuse logs regularly after launch.

### Security Limits Of This Stack

- Server-side sanitization happens on Formspree, not in this repository.
- Rate limiting and IP reputation checks must happen at Formspree and/or the CDN/WAF layer.
- Secure cookie controls only apply if a deployment platform or third-party service sets cookies.

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)—tested on latest versions.

## License

© 2026 Defense Academy. All rights reserved.
