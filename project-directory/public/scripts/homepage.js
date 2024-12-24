
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.transform === "translateX(0px)") {
    sidebar.style.transform = "translateX(-100%)";
  } else {
    sidebar.style.transform = "translateX(0px)";
  }
}

function toggleFilterbar() {
  const filterbar = document.getElementById("filterbar");
  if (filterbar.style.transform === "translateX(0px)") {
    filterbar.style.transform = "translateX(-100%)";
  } else {
    filterbar.style.transform = "translateX(0px)";
  }
}

// Like post
let likeCount = 0; // Initial like count

function increaseLike() {
  likeCount++; // Increment like count
  document.getElementById("likeCount").innerText = `${likeCount} Likes`;
}


// Add comments
function addComment() {
  const commentBox = document.getElementById("comment-box");
  const commentText = commentBox.value.trim();
  if (commentText) {
    const commentList = document.getElementById("comments-list");
    const newComment = document.createElement("li");
    newComment.innerText = commentText;
    commentList.appendChild(newComment);
    commentBox.value = "";
  }
}

// About section slider
let currentIndex = 0;

function moveSlide(direction) {
  const slidesContainer = document.querySelector('.slides-container');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Update current index
  currentIndex += direction;

  // Wrap around if out of bounds
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Move slides
  const offset = currentIndex * -100; // Calculate offset in percentage
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// Auto-slide every 5 seconds
setInterval(() => moveSlide(1), 5000);

// Dynamically add "Buy Now" buttons to all posts
function addBuyNowButtons() {
  const postContainers = document.querySelectorAll(".post-container");
  postContainers.forEach((postContainer, index) => {
    // Check if button already exists to avoid duplicates
    if (!postContainer.querySelector(".buy-now-button")) {
      const buyNowButton = document.createElement("button");
      buyNowButton.className = "buy-now-button";
      buyNowButton.innerText = "Buy Now";
      buyNowButton.addEventListener("click", () => handleBuyNow(index));
      postContainer.appendChild(buyNowButton);
    }
  });
}

// Handle Buy Now button click
function handleBuyNow(postIndex) {
  const confirmation = confirm(`Do you want to buy this artwork (Post #${postIndex + 1})?`);
  if (confirmation) {
    alert("Thank you for your purchase! Redirecting to the payment page...");
    // Replace this URL with your payment or checkout page
    window.location.href = `/checkout?post=${postIndex}`;
  }
}

// Call the function to add buttons after page load
window.onload = () => {
  addBuyNowButtons();

  // Load persistent likes if necessary
  const savedLikes = localStorage.getItem("likeCount");
  if (savedLikes) {
    document.getElementById("like-count").innerText = `${savedLikes} Likes`;
  }
};


// Buy Now Button functionality
function buyNow(postId) {
  // Get the post details
  const post = document.getElementById(postId);
  const artistId = post.querySelector('.artist-id').innerText;
  const price = post.querySelector('.price').innerText;
  
  // Show a confirmation modal with the post details
  const confirmationMessage = `Are you sure you want to buy this artwork by Artist ${artistId} for ${price}?`;
  const confirmed = confirm(confirmationMessage);
  
  if (confirmed) {
      // Redirect to checkout page (you can replace with your actual checkout URL)
      window.location.href = `checkout.html?postId=${postId}`;
  }
}


  // Function to handle the Add to Cart button click
  document.addEventListener('DOMContentLoaded', () => {
    const cart = []; // Temporary local array to simulate the cart

    // Select all Add to Cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get product data from data attributes
        const productId = button.getAttribute('data-id');
        const productTitle = button.getAttribute('data-title');
        const productPrice = button.getAttribute('data-price');
        const productImage = button.getAttribute('data-image');

        // Prepare the data to send to the backend
        const product = {
          id: productId,
          title: productTitle,
          price: productPrice,
          image: productImage
        };

        // Add item to local cart (simulation)
        cart.push(product);

        // Optionally send data to backend
        fetch('/add-to-cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        })
          .then(response => response.json())
          .then(data => {
            console.log('Successfully added to cart:', data);
            alert('Item added to cart!');
          })
          .catch(error => {
            console.error('Error adding to cart:', error);
          });
      });
    });
  });





////////////////////////////////////////////















// BUYNOW JS


// Simulating the dynamic load of product data
window.onload = function () {
  // Sample product data from homepage (this would be dynamically passed in a real implementation)
  const productData = {
    image: 'images/art1.jpg', // Image source (can be dynamic)
    title: 'Sketches', // Product title
    price: 'Rs 84500.00', // Product price
    details: 'Durable and breathable upper supports your foot during movements. Additional cushioning provides a bouncy push. The heel lock system adds stability.',
    stock: 12 // Product stock count
  };

  // Assign the product data to the page elements
  document.getElementById('product-image').src = productData.image;
  document.getElementById('product-title').innerText = productData.title;
  document.getElementById('product-price').innerText = productData.price;
  document.getElementById('product-details').innerText = productData.details;
  document.getElementById('stock-count').innerText = productData.stock;
};

// Function to simulate the "Buy Now" action
function Purchase() {
  alert("Thank you for purchasing!");
}



function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.transform === "translateX(0px)") {
    sidebar.style.transform = "translateX(-100%)";
  } else {
    sidebar.style.transform = "translateX(0px)";
  }
}

function toggleFilterbar() {
  const filterbar = document.getElementById("filterbar");
  if (filterbar.style.transform === "translateX(0px)") {
    filterbar.style.transform = "translateX(-100%)";
  } else {
    filterbar.style.transform = "translateX(0px)";
  }
}




document.addEventListener('DOMContentLoaded', () => {
  // Toggle Comment Pop-Up
  const commentLogos = document.querySelectorAll('.comment-logo');

  commentLogos.forEach(logo => {
    logo.addEventListener('click', (event) => {
      const popup = event.target.nextElementSibling; // Find the popup related to this logo
      popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
    });
  });

  // Handle Comment Submission
  const submitCommentButtons = document.querySelectorAll('.submit-comment');

  submitCommentButtons.forEach(button => {
    button.addEventListener('click', () => {
      const popup = button.parentElement;
      const textarea = popup.querySelector('textarea');
      const comment = textarea.value.trim();

      if (comment) {
        console.log('Comment Submitted:', comment); // Replace this with backend integration
        alert('Comment Posted!');
        textarea.value = ''; // Clear the textarea
        popup.style.display = 'none'; // Hide the popup
      } else {
        alert('Please write a comment before submitting.');
      }
    });
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('artwork-form');
  const gallery = document.getElementById('art-gallery');
  const postedArtworks = document.getElementById('posted-artworks');

  // Load artworks from localStorage
  const artworks = JSON.parse(localStorage.getItem('artworks')) || [];

  function saveArtworks() {
      localStorage.setItem('artworks', JSON.stringify(artworks));
  }

  function renderGallery() {
      gallery.innerHTML = '';
      artworks.forEach((art, index) => {
          const artCard = document.createElement('div');
          artCard.className = 'artwork-card';
          artCard.innerHTML = `
              <img src="${art.image}" alt="${art.title}">
              <h3>${art.title}</h3>
              <p>${art.description}</p>
              <p class="price">$${art.price}</p>
              <button onclick="deleteArt(${index})">Delete</button>
          `;
          gallery.appendChild(artCard);
      });
  }

  function renderPostedArtworks() {
      postedArtworks.innerHTML = '';
      artworks.forEach((art) => {
          const artCard = document.createElement('div');
          artCard.className = 'artwork-card';
          artCard.innerHTML = `
              <img src="${art.image}" alt="${art.title}">
              <h3>${art.title}</h3>
              <p>${art.description}</p>
              <p class="price">$${art.price}</p>
          `;
          postedArtworks.appendChild(artCard);
      });
  }

  window.deleteArt = (index) => {
      artworks.splice(index, 1);
      saveArtworks();
      renderGallery();
      renderPostedArtworks();
  };

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const title = document.getElementById('art-title').value;
      const description = document.getElementById('art-description').value;
      const price = document.getElementById('art-price').value;
      const imageInput = document.getElementById('art-image');

      if (imageInput.files.length > 0) {
          const reader = new FileReader();
          reader.onload = (event) => {
              const newArt = {
                  title,
                  description,
                  price,
                  image: event.target.result,
              };
              artworks.push(newArt);
              saveArtworks();
              renderGallery();
              renderPostedArtworks();
              form.reset();
          };
          reader.readAsDataURL(imageInput.files[0]);
      }
  });

  renderGallery();
  renderPostedArtworks();
});
