/**
 * Custom Product Page JavaScript
 * Handles image gallery, quantity selector, options, and purchase type selection
 */

document.addEventListener('DOMContentLoaded', function() {
  
  // Image Gallery - Thumbnail Click
  const thumbnailButtons = document.querySelectorAll('.thumbnail-btn');
  const featuredImage = document.getElementById('product-featured-image');
  
  thumbnailButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const imageUrl = this.getAttribute('data-image-url');
      
      // Update featured image
      if (featuredImage && imageUrl) {
        featuredImage.src = imageUrl;
      }
      
      // Update active state
      thumbnailButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Quantity Selector
  const qtyInput = document.querySelector('.qty-input');
  const qtyButtons = document.querySelectorAll('.qty-btn');
  
  qtyButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const action = this.getAttribute('data-action');
      let currentValue = parseInt(qtyInput.value) || 1;
      
      if (action === 'increase') {
        qtyInput.value = currentValue + 1;
      } else if (action === 'decrease' && currentValue > 1) {
        qtyInput.value = currentValue - 1;
      }
    });
  });
  
  // Prevent negative or zero quantities
  if (qtyInput) {
    qtyInput.addEventListener('change', function() {
      const value = parseInt(this.value);
      if (isNaN(value) || value < 1) {
        this.value = 1;
      }
    });
  }
  
  // Product Options Selection
  const optionButtons = document.querySelectorAll('.option-btn');
  const productForm = document.getElementById('product-form');
  const variantIdInput = productForm ? productForm.querySelector('input[name="id"]') : null;
  
  optionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const optionPosition = this.getAttribute('data-option-position');
      const value = this.getAttribute('data-value');
      
      // Update active state for this option group
      const siblingButtons = this.parentElement.querySelectorAll('.option-btn');
      siblingButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Update variant selection
      updateVariant();
    });
  });
  
  // Purchase Type Selection
  const purchaseOptionButtons = document.querySelectorAll('.purchase-option-btn');
  
  purchaseOptionButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const purchaseType = this.getAttribute('data-purchase-type');
      
      // Update active state
      purchaseOptionButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      // Could add subscription logic here if using a subscription app
      console.log('Purchase type selected:', purchaseType);
    });
  });
  
  // Add to Cart Button - Success Message
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  
  if (addToCartBtn && productForm) {
    productForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(productForm);
      
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Show success message
        const originalText = addToCartBtn.textContent;
        addToCartBtn.textContent = 'Added!';
        addToCartBtn.style.backgroundColor = '#059669';
        
        // Update cart count if cart icon exists
        updateCartCount();
        
        // Reset button after 2 seconds
        setTimeout(() => {
          addToCartBtn.textContent = originalText;
          addToCartBtn.style.backgroundColor = '';
        }, 2000);
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        addToCartBtn.textContent = 'Error - Try Again';
        setTimeout(() => {
          addToCartBtn.textContent = 'ADD TO CART';
        }, 2000);
      });
    });
  }
  
  // Update cart count in header
  function updateCartCount() {
    fetch('/cart.js')
      .then(response => response.json())
      .then(cart => {
        const cartCount = document.getElementById('cart-icon-bubble');
        if (cartCount) {
          cartCount.textContent = cart.item_count;
        }
      })
      .catch(error => console.error('Error updating cart count:', error));
  }
  
  // Update variant based on selected options (simplified version)
  function updateVariant() {
    // This is a simplified version. For full variant switching,
    // you would need to match the selected options to the correct variant ID
    // and update the hidden input, price display, availability, etc.
    
    const selectedOptions = [];
    const optionGroups = document.querySelectorAll('.product-option');
    
    optionGroups.forEach(group => {
      const activeBtn = group.querySelector('.option-btn.active');
      if (activeBtn) {
        selectedOptions.push(activeBtn.getAttribute('data-value'));
      }
    });
    
    console.log('Selected options:', selectedOptions);
    
    // In a real implementation, you would:
    // 1. Find the matching variant
    // 2. Update the variant ID in the hidden input
    // 3. Update the price display
    // 4. Update product availability
    // 5. Update the Shop Pay button variant ID
  }
});
