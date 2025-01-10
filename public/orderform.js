

//move the menu to right and left when click back and next
var step=100;
var stepFilter=60;
var scrolling = true;

$(".back").bind("click", function(e){
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "-=" + step + "px"
  });
});

$(".next").bind("click", function(e){
  e.preventDefault();
  $(".highlight-wrapper").animate({
    scrollLeft: "+=" + step + "px"
  })
})


// when click back and next on menu filters
$(".back-menus").bind("click", function(e){
  e.preventDefault();
  $(".filter-wrapper").animate({
    scrollLeft: "-=" + stepFilter + "px"
  })
});

$(".next-menus").bind("click", function(e){
  e.preventDefault();
  $(".filter-wrapper").animate({
    scrollLeft: "+=" + stepFilter + "px"
  })
})


//for filtering buttons
// Get all filter buttons and detail cards
const filterButtons = document.querySelectorAll('.filter-card'); // Assuming filter buttons have 'detail-desc' class
const detailCards = document.querySelectorAll('.detail-card');   // Food items have 'detail-card' class

// Add event listener for each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');  // Get the selected category

    // Loop through all detail cards and toggle visibility based on category
    detailCards.forEach(card => {
      const itemCategory = card.getAttribute('data-category');

      // Show all items if "all" is selected, otherwise filter by category
      if (category === 'all' || itemCategory === category) {
        card.classList.remove('hidden');  // Show the card
      } else {
        card.classList.add('hidden');  // Hide the card
      }
    });
  });
});



function toggleCartPopup() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.classList.toggle('active');
}

// Close Cart Popup
function closeCart() {
  const cartPopup = document.getElementById('cart-popup');
  cartPopup.classList.remove('active');
}

// Add Item to Cart
function addToCart(itemName, itemPrice) {
  const cartItems = document.getElementById('cart-items').getElementsByTagName('tbody')[0];
  const existingItem = Array.from(cartItems.getElementsByTagName('tr')).find(item => item.cells[0].textContent === itemName);
  
  if (existingItem) {
    const itemCount = parseInt(existingItem.querySelector('.item-count').textContent) + 1;
    existingItem.querySelector('.item-count').textContent = itemCount;
    
    const itemTotal = parseFloat(existingItem.querySelector('.item-total').textContent) + parseFloat(itemPrice);
    existingItem.querySelector('.item-total').textContent = itemTotal.toFixed(2);
  } else {
    const newRow = cartItems.insertRow();
    newRow.innerHTML = `
      <td>${itemName}</td>
      <td class='item-count'>1</td>
      <td class='item-price'>${itemPrice}</td>
      <td class='item-total'>${itemPrice}</td>
    `;
  }

  updateCartCountAndTotal();
}

// Update Cart Count and Total
function updateCartCountAndTotal() {
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const cartItems = document.querySelectorAll('#cart-items tbody tr');
  
  let totalCount = 0;
  let total = 0;
  
  cartItems.forEach(item => {
    const itemCount = parseInt(item.querySelector('.item-count').textContent);
    const itemTotal = parseFloat(item.querySelector('.item-total').textContent);
    
    totalCount += itemCount;
    total += itemTotal;
  });
  
  cartCount.textContent = totalCount;
  cartTotal.textContent = total.toFixed(2);
}

// Handle Payment Method Change
document.getElementById('payment-method').addEventListener('change', function () {
  const selectedMethod = this.value;
  
  // Show/Hide Payment Details
  if (selectedMethod === 'credit') {
    document.getElementById('credit-card-details').style.display = 'block';
    document.getElementById('paypal-details').style.display = 'none';
  } else if (selectedMethod === 'paypal') {
    document.getElementById('credit-card-details').style.display = 'none';
    document.getElementById('paypal-details').style.display = 'block';
  }
});

// Show/Hide Address Input Based on Delivery or Pickup
function toggleAddressInput() {
  const deliveryOption = document.getElementById('delivery-option').value;
  const addressInput = document.getElementById('address-input');
  
  // Show address input if Delivery is selected, hide it otherwise
  if (deliveryOption === 'delivery') {
    addressInput.style.display = 'block';
  } else {
    addressInput.style.display = 'none';
  }
}

// Proceed to Checkout (reveal payment input area after the table)
function proceedToCheckout() {
  // Show the checkout section (payment form) after the table
  const checkoutSection = document.querySelector('.checkout-section');
  
  // Only show the section if it's hidden
  if (checkoutSection.style.display === 'none' || !checkoutSection.style.display) {
    checkoutSection.style.display = 'block'; // Reveal the payment form
    document.querySelector('.checkout-btn').style.display = 'none'; // Hide the Proceed button
  }
}

// Confirm Payment (functionality to finalize payment)
function confirmPayment() {
  alert('Payment confirmed!');
  closeCart(); // Close the cart popup after confirmation
}
