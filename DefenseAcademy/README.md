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
│   └── styles.css          # Complete design system and styles
├── js/
│   └── script.js           # Navigation interactivity
├── images/                 # Logo and assets
└── README.md               # This file
```

## Quick Start

1. **Local preview**: Open `index.html` in your browser
2. **Deploy**: Upload all files to your hosting

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

### Form Protection

- Honeypot field (`_gotcha`) prevents basic spam
- Configure Formspree domain restrictions and spam protection in dashboard
- Use Cloudflare WAF for advanced rate limiting

### Headers (via Cloudflare)

Set these security headers after attaching custom domain:

- `Content-Security-Policy`
- `Strict-Transport-Security` (HSTS)
- `Permissions-Policy`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge)—tested on latest versions.

## License

© 2026 Defense Academy. All rights reserved.
