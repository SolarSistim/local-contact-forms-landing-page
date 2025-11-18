# Local Contact Forms - Landing Page & Wiki

A modern, lightweight landing page and documentation site for Local Contact Forms, built with Angular 20 and Angular Material.

## Features

- Clean, minimal design with white background and soft purple accents
- Fully responsive (mobile, tablet, desktop)
- No shadows for a flat, modern look
- Fast loading with minimal images
- SEO-optimized with meta tags and Open Graph support
- Smooth scrolling navigation
- Separate wiki/documentation section

## Project Structure

- **Landing Page** (`/`) - Main marketing page with:
  - Hero section with call-to-action
  - Features showcase
  - Pricing information
  - Contact/CTA section
  - Footer with navigation links

- **Wiki** (`/wiki`) - Documentation with:
  - Sidebar navigation
  - Four main articles (Getting Started, Social Media Sharing, Theme Customization, Managing Submissions)
  - Clean, readable article layout

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start dev server
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you modify source files.

### Build

```bash
# Production build
npm run build -- --configuration production
```

Build artifacts will be stored in `dist/local-contact-forms/browser/`.

## Deployment to Netlify

This project is configured for easy deployment to Netlify.

### Option 1: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build -- --configuration production

# Deploy
netlify deploy --prod --dir=dist/local-contact-forms/browser
```

### Option 2: Netlify Dashboard

1. Connect your Git repository to Netlify
2. Build settings are automatically configured via `netlify.toml`:
   - Build command: `npm run build -- --configuration production`
   - Publish directory: `dist/local-contact-forms/browser`
3. Deploy!

### Option 3: Drag and Drop

1. Build the project: `npm run build -- --configuration production`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag the `dist/local-contact-forms/browser` folder

## Configuration Files

- `netlify.toml` - Netlify build and redirect configuration
- `public/_redirects` - SPA redirect rules (copied to build output)
- `src/custom-theme.scss` - Angular Material theme customization
- `src/styles.css` - Global styles

## Color Scheme

- Primary color: Violet (`#5e35b1`)
- Background: White
- Text: Dark gray (`#333`)
- Borders: Light gray (`#e0e0e0`)
- No shadows for a minimal, flat design

## SEO

The site includes comprehensive SEO meta tags:
- Page title and description
- Open Graph tags for social sharing
- Twitter Card support
- Robots meta tags

To update SEO settings, edit `src/index.html`.

## Tech Stack

- Angular 20 (standalone components)
- Angular Material
- TypeScript
- CSS (no preprocessor for component styles)
- System fonts (no external font loading except Material Icons)

## Customization

### Updating Content

- Landing page content: `src/app/landing/`
- Wiki articles: `src/app/wiki/wiki.ts` (articles array)
- SEO metadata: `src/index.html`

### Styling

- Global styles: `src/styles.css`
- Component styles: `src/app/[component]/[component].css`
- Material theme: `src/custom-theme.scss`

### Adding Wiki Articles

Edit `src/app/wiki/wiki.ts` and add new entries to the `articles` array:

```typescript
{
  id: 'article-slug',
  title: 'Article Title',
  content: `<h2>Article Title</h2><p>Content...</p>`
}
```

## License

Copyright © 2025 Local Contact Forms. All rights reserved.

## Support

For questions or issues, contact us through the form at: https://app.localcontactforms.com/?id=local-contact-forms
