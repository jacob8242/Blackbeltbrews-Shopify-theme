# Black Belt Brews - Final Shopify Theme

## 📦 DOWNLOAD & INSTALL

**File:** `blackbeltbrews-final-theme.zip` (692 KB)

### Installation Steps:
1. Download `blackbeltbrews-final-theme.zip` from this PR
2. Go to Shopify Admin → Online Store → Themes
3. Click "Add theme" → "Upload ZIP file"
4. Select the downloaded ZIP file
5. Click "Upload"
6. Once uploaded, click "Customize" to configure the theme

---

## 🎨 Theme Overview

This theme is a **complete custom Shopify theme** built from scratch to match your React website design exactly.

### Design System:
- **Colors:** Gray-800 (#1f2937), Amber-300 (#fcd34d), Red-600 (#dc2626)
- **Font:** Bebas Neue (loaded from Google Fonts)
- **Icons:** RemixIcon library (loaded from CDN)
- **Layout:** Responsive grid system (mobile-first)

---

## 📄 Page Structure

### 1. Homepage (`templates/index.json`)
Uses 4 custom sections in this order:
1. **custom-hero** - Large background hero with "Kickstart Your Day"
2. **custom-featured-products** - 4 featured products in a grid
3. **custom-brand-features** - 6 brand values with icons
4. **custom-newsletter** - Email signup form

### 2. Product Pages (`templates/product.json`)
Uses:
- **custom-product** - Complete product detail page with:
  - Image gallery with 3 clickable thumbnails
  - Product info (title, price, rating, description)
  - Options/variants selector
  - Purchase type toggle (One-time vs Subscribe & Save 10%)
  - Quantity selector (+/- buttons)
  - Add to Cart button
  - Shop Pay button (full width below cart button)
  - Product meta (Origin, Type, Category)
- **related-products** - Shows related products

### 3. Collection Pages (`templates/collection.json`)
Uses:
- **custom-collection** - Collection page with:
  - Collection banner with promotional text
  - Product count display ("Showing 1-24 of 50 products")
  - Sort dropdown (Popularity, Price, Name)
  - Product grid (4 columns, responsive)
  - Pagination (24 products per page)

### 4. Header (`templates/header-group.json`)
Uses:
- **custom-header** - Includes:
  - Announcement bar: "Free shipping on orders over $50"
  - Social icons (Facebook, Instagram)
  - Sticky navigation
  - Navigation links: Home, Shop, Merch, Subscriptions, Our Story, Connect
  - Search, Account, Cart icons
  - Mobile menu

### 5. Footer (`templates/footer-group.json`)
Uses:
- **custom-footer** - Includes:
  - 4-column layout: Brand, Shop, Links, Contact
  - Social icons (Facebook, Instagram, Twitter)
  - Full contact information
  - Follow on Shop button
  - Payment methods display
  - Copyright notice

---

## ⚙️ Configuration Guide

### After Installing Theme:

#### 1. Configure Header:
1. Go to Theme Customizer → Header
2. **Announcement Bar:**
   - Text: "Free shipping on orders over $50" (already set)
   - Background: #1f2937 (gray-800)
   - Show announcement: ✓ Enabled
3. **Social Links:**
   - Facebook URL: Your Facebook page
   - Instagram URL: Your Instagram profile
4. **Logo:**
   - Upload your logo image
   - Set logo width (recommended: 80-100px)
5. **Main Menu:**
   - Ensure menu has: Home, Shop, Merch, Subscriptions, Our Story, Connect
   - Create these links if they don't exist

#### 2. Configure Homepage:
1. **Hero Section:**
   - Headline: "Kickstart Your Day"
   - Subheadline: "With 100% organic roasted coffee, derived from safe plant-based sources."
   - Button text: "Shop Now"
   - Button link: /collections/all
   - Background image: Upload your hero image
   
2. **Featured Products:**
   - Select a collection (or create "Featured" collection)
   - Add 4 products you want to feature
   
3. **Brand Features:**
   - Text is pre-configured: "Crafted with Dedication. Brewed with Purpose."
   - 6 features already set up with icons
   
4. **Newsletter:**
   - Headline: "Your Journey Starts Here"
   - Description text is already set
   - Form submits to Shopify customer list

#### 3. Configure Footer:
1. **Brand Section:**
   - Name: "Black Belt Brews" (auto from shop name)
   - Tagline: "Brew like a master. Focus like a fighter."
2. **Shop Menu:**
   - Links: Ground Coffee, K-Cups, Tea, Merch
3. **Links Menu:**
   - Links: Our Story, Connect, Our Mission, Subscriptions
4. **Contact:**
   - Address: 13791 Oneida Dr, Delray Beach, FL 33410
   - Email: blackbeltbrews12@gmail.com
   - Phone: (561) 945-2520
5. **Social Media:**
   - Facebook, Instagram, Twitter URLs
6. **Follow on Shop:**
   - Automatically enabled
7. **Payment Methods:**
   - Shows all enabled payment types from Shopify settings

#### 4. Product Pages:
- Automatically work with all products
- Ensure products have:
  - Multiple images (up to 3 for thumbnails)
  - Variants/options configured
  - Descriptions filled in

#### 5. Collection Pages:
- Work with all collections automatically
- Create collections for:
  - All Products
  - Coffee
  - K-Cups
  - Tea
  - Merch

---

## 🎯 Key Features

### Shop Pay Integration:
- **Buy with Shop** button appears on all product pages
- Positioned below "Add to Cart" button
- Full width matching the quantity + cart row
- Store URL: blackbeltbrews.com

### Follow on Shop:
- Button appears in footer
- Links to your shop in the Shop app
- Configured for blackbeltbrews.com

### Payment Methods Display:
- Shows all enabled payment types
- Located in footer
- Uses Shopify's `shop.enabled_payment_types`

### Subscribe & Save:
- Toggle on product pages
- Shows 10% discount when selected
- Clearly displays subscription vs one-time pricing

### Responsive Design:
- **Mobile:** Single column layouts
- **Tablet (md):** 2-column layouts
- **Desktop (lg):** 4 or 6-column layouts
- Sticky header on all devices
- Mobile menu drawer

---

## 🔧 Customization

### Colors:
All colors can be customized in section settings:
- Primary: #1f2937 (gray-800)
- Accent: #fcd34d (amber-300)
- Alert: #dc2626 (red-600)

### Fonts:
- Bebas Neue is loaded from Google Fonts
- Applied via `.font-bebas` class
- Used for all headings and nav links

### Icons:
- RemixIcon library loaded from CDN
- All icons use `ri-*` classes
- Examples: `ri-fire-fill`, `ri-earth-fill`, `ri-shopping-bag-line`

---

## 📁 File Structure

```
blackbeltbrews-final-theme/
├── assets/                 # CSS, JS, and icon files
│   ├── custom-header.css
│   ├── custom-footer.css
│   ├── custom-hero.css
│   ├── custom-featured-products.css
│   ├── custom-brand-features.css
│   ├── custom-newsletter.css
│   ├── custom-product.css
│   ├── custom-product.js
│   ├── custom-collection.css
│   └── base.css           # Updated with .font-bebas class
├── config/
│   ├── settings_schema.json
│   └── settings_data.json
├── layout/
│   ├── theme.liquid       # Updated with Bebas Neue & RemixIcon
│   ├── password.liquid
│   └── gift_card.liquid
├── locales/               # 38 translation files
├── sections/              # 44 sections total
│   ├── custom-header.liquid
│   ├── custom-footer.liquid
│   ├── custom-hero.liquid
│   ├── custom-featured-products.liquid
│   ├── custom-brand-features.liquid
│   ├── custom-newsletter.liquid
│   ├── custom-product.liquid
│   ├── custom-collection.liquid
│   └── [36 more Shopify default sections]
├── snippets/              # 43 snippets total
│   ├── custom-product-card.liquid
│   └── [42 more Shopify default snippets]
└── templates/             # 21 templates
    ├── index.json         # Homepage
    ├── product.json       # Product pages
    ├── collection.json    # Collection pages
    ├── header-group.json  # Header
    ├── footer-group.json  # Footer
    └── [16 more templates]
```

---

## ✅ Quality Checklist

Before going live, verify:

- [ ] Logo uploaded and displays correctly
- [ ] Hero background image uploaded
- [ ] Featured products collection selected (4 products)
- [ ] All navigation menu links created and working
- [ ] Social media URLs added (Facebook, Instagram, Twitter)
- [ ] Contact information updated in footer
- [ ] Products have images and descriptions
- [ ] Collections created (All, Coffee, K-Cups, Tea, Merch)
- [ ] Shop Pay enabled in Shopify settings
- [ ] Payment methods enabled
- [ ] Newsletter connected to customer list
- [ ] Mobile menu tested
- [ ] Cart functionality tested
- [ ] Checkout process tested

---

## 🚀 Going Live

1. **Test the theme:**
   - Use the "Preview" button to test before publishing
   - Check all pages: Home, Shop, Product, Collection, About, Contact
   - Test on mobile, tablet, and desktop
   - Verify all links work
   - Test cart and checkout

2. **Publish the theme:**
   - Click "Publish" in the theme customizer
   - Theme will replace your current live theme

3. **Monitor:**
   - Check analytics after launch
   - Monitor for any issues
   - Gather customer feedback

---

## 📞 Support

If you encounter any issues:
1. Check the Shopify theme documentation
2. Verify all configuration steps were followed
3. Review section settings in the customizer
4. Test in preview mode before publishing

---

**Theme Version:** 1.0  
**Last Updated:** November 2024  
**Store URL:** blackbeltbrews.com

**This theme matches your React design exactly and is ready for production use!** ✅
