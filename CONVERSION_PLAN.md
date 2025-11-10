# HTML/CSS to Shopify Theme Conversion Plan

## Source Files Analyzed
- `index.html` - Single-page application shell with hash routing
- `app.js` - Router and all page templates (Home, Shop, Product, Subscriptions, About, Contact, 404)
- `products.js` - Static product data (will be replaced with Shopify product objects)
- `styles.css` - All vanilla CSS styling (will be moved to assets/)

## Conversion Strategy

### 1. Theme Structure Setup
- Create proper Shopify 2.0 theme structure
- Set up layout/theme.liquid with header/footer
- Move styles.css to assets/

### 2. Page Conversions
Each SPA "page" will become a Shopify template:

**Home Page** → `templates/index.json` + `sections/`:
- Hero section
- Featured products section  
- Brand features section
- Newsletter section

**Shop Page** → `templates/collection.json` + `sections/collection-main.liquid`
- Collection banner
- Product filters
- Product grid
- Pagination

**Product Page** → `templates/product.json` + `sections/product-main.liquid`
- Product images
- Product info
- Add to cart
- Related products

**Static Pages** → `templates/page.*.json`:
- Subscriptions → `templates/page.subscriptions.json`
- About → `templates/page.about.json`  
- Contact → `templates/page.contact.json`

**404 Page** → `templates/404.json`

### 3. Component Extraction
**Header** (from index.html) → `sections/header.liquid`
- Announcement bar
- Navigation
- Search, Account, Cart icons

**Footer** (from index.html) → `sections/footer.liquid`
- Brand info
- Navigation links
- Payment methods
- Social links

**Product Card** (from app.js) → `snippets/product-card.liquid`
- Reusable component for shop/collection pages

### 4. JavaScript Migration
- Move app.js functionality to Shopify-specific JS
- Replace hash routing with Shopify's native routing
- Keep interactive features (mobile menu, etc.)

### 5. Shopify Integration
- Replace static product data with `{{ product }}` objects
- Integrate cart functionality
- Add search functionality
- Configure settings_schema.json for theme customization

## Next Steps
Starting conversion now...
