# Black Belt Brews Shopify Theme

A custom Shopify theme for Black Belt Brews (blackbeltbrews.com), combining premium coffee products with martial arts inspiration.

## Theme Structure

This theme follows the standard Shopify 2.0 theme structure:

```
├── assets/          # CSS, JavaScript, and image files
├── config/          # Theme settings
├── layout/          # Theme layout templates
├── locales/         # Translation files
├── sections/        # Reusable sections
├── snippets/        # Reusable snippets
└── templates/       # Page templates
```

## Key Features

### 1. Buy with Shop Button
- Integrated Shop Pay button on all product pages
- Located below the "Add to Cart" button in the buy-buttons snippet
- Uses Shopify's Shop SDK for seamless integration
- Store URL: blackbeltbrews.com

**Implementation Files:**
- `snippets/buy-buttons.liquid` - Contains the shop-pay-button component
- `layout/theme.liquid` - Includes the Shop SDK script
- `assets/section-main-product.css` - Styling for the Shop button

### 2. Follow on Shop
- Footer includes "Follow on Shop" button
- Uses Shopify's built-in login_button with action: 'follow'
- Allows customers to follow the store in the Shop app

**Implementation Files:**
- `sections/footer.liquid` - Contains the Follow on Shop button (lines 239-243)

### 3. Payment Methods Display
- Footer displays all enabled payment methods
- Automatically pulls from `shop.enabled_payment_types`
- Shows payment icons for Visa, Mastercard, PayPal, etc.

**Implementation Files:**
- `sections/footer.liquid` - Contains payment methods display (lines 286-297)

## Directory Details

### Assets (88 files)
Contains all CSS, JavaScript, and SVG icon files:
- **CSS Files**: base.css, section-*.css, component-*.css
- **JavaScript Files**: global.js, cart.js, product-form.js, etc.
- **Icons**: SVG files for UI elements

### Config (2 files)
- `settings_schema.json` - Theme settings structure
- `settings_data.json` - Current theme settings

### Layout (3 files)
- `theme.liquid` - Main theme layout
- `password.liquid` - Password page layout
- `gift_card.liquid` - Gift card layout

### Locales (38 files)
Translation files for multiple languages including:
- English (default)
- Spanish, French, German
- And many more...

### Sections (44 files)
Reusable sections including:
- `header.liquid` - Site header
- `footer.liquid` - Site footer with Follow on Shop and payment methods
- `main-product.liquid` - Product page layout
- `featured-product.liquid` - Featured product section
- `slideshow.liquid` - Homepage slideshow
- `multicolumn.liquid` - Multi-column content
- And many more...

### Snippets (43 files)
Reusable code snippets including:
- `buy-buttons.liquid` - Product purchase buttons with Shop Pay
- `card-product.liquid` - Product card display
- `product-media-gallery.liquid` - Product image gallery
- `social-icons.liquid` - Social media icons
- And many more...

### Templates (21 files)
Page templates using JSON format:
- `index.json` - Homepage
- `product.json` - Product pages
- `collection.json` - Collection pages
- `cart.json` - Cart page
- `page.json` - Generic pages
- `404.json` - Error page
- And many more...

## Homepage Configuration

The homepage (`templates/index.json`) includes:
- Hero slideshow sections
- Multi-column product features
- Brand story and mission statement
- Rich text sections with calls-to-action
- Links to martial arts partner sites

## Product Pages

Product pages include:
- Image gallery with zoom
- Variant picker (size, grind type, etc.)
- Quantity selector
- Add to Cart button
- **Buy with Shop button** (new feature)
- Dynamic checkout buttons
- Product description and details
- Related products section

## Footer Features

The footer includes:
- Newsletter signup
- **Follow on Shop button** - Links to blackbeltbrews.com on Shop app
- Social media links
- Navigation menus
- **Payment methods display** - Shows all accepted payment types
- Language and country selectors
- Copyright and policies

## Theme Customization

This theme can be customized through the Shopify admin:
1. Go to Online Store > Themes
2. Click "Customize" on this theme
3. Modify sections, colors, fonts, and settings
4. Changes are saved to `config/settings_data.json`

## Development

To work with this theme locally:
1. Install Shopify CLI: `npm install -g @shopify/cli @shopify/theme`
2. Navigate to the theme directory
3. Run `shopify theme dev` to start local development
4. Run `shopify theme push` to deploy changes

## Support

For questions or support regarding this theme, contact the development team.

## Credits

Developed for Black Belt Brews by the Copilot SWE Agent team.
