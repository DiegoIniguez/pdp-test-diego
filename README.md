# PDP Test – Diego Iñiguez

This project is my submission for the Frontend Developer Technical Test. It replicates a **Product Detail Page (PDP)** inspired by the **Loverboy product example** using **Dawn Shopify theme** to save time and focus on custom implementation.
You can visit the PDP directly in:
🔗 **Live Preview**: [pdp-test-diego.myshopify.com/products/cosmopolitan](https://pdp-test-diego.myshopify.com/products/cosmopolitan)  
🔒 **Password**: `testDiego`
---

## 🛠️ Tech Stack

- **Shopify** (Liquid, Sections, Snippets, Theme Architecture)
- **HTML5 / CSS3 / SCSS**
- **Modern JavaScript (ES6+)**
- **Responsive Design**
- **Swiper.js** (used for sliders and image/video carousels just as Drinkloverboy)
- Fully compatible with **Online Store 2.0**

---

## ✅ Features Implemented

### 🔹 Mandatory Requirements
- [x] Product Images with responsive layout
- [x] Product Information (title, price, reviews, quantity selector)
- [x] Custom Sections with images sliders (configurable via Theme Editor)

### 🔸 Optional Enhancements
- [x] Variant Selector (e.g., Pack size)
- [x] Subscription Toggle (One-time vs Subscribe & Save)
- [x] Bundled Products (via bundle section)
- [x] Product Reviews Section
- [x] Interactive Quantity Selector with Vanilla JS

---

## 📐 UX/UI Highlights

- All media elements (images/videos) adapt seamlessly to screen size.
- Clear separation of mobile and desktop experiences with `.mobile-only` and `.desktop-only` blocks.
- Custom sections are configurable from the Shopify Theme Editor.

---

## ⚡ Performance Optimization

**Optimization Recommendation:**  
To improve load performance on mobile, I optimized image delivery using Shopify's built-in `image_url` filter with explicit width parameters.  
Example:

```liquid
{{ product.featured_image | image_url: width: 385 | image_tag }}
```

## 📝 Note from the Developer

I completed this project while celebrating my birthday 🥳 — so while I focused on meeting all mandatory and several optional requirements, there’s more I would have loved to polish (like deeper animation layers and accessibility refinements).

Thanks for understanding — I’ll be happy to discuss what I’d improve with more time!

