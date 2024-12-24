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
    let likeCount = 0;
    function likePost() {
      likeCount++;
      document.getElementById("like-count").innerText = `${likeCount} Likes`;
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




    //about

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
