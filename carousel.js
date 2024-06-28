document.addEventListener("DOMContentLoaded", function () {
  // Select the carousel container and items
  const carouselContainer = document.querySelector(".carousel-container");
  const carouselItems = document.querySelectorAll(".carousel-item");

  // Select the previous and next buttons
  const prevButton = document.querySelector(".carousel-button.prev");
  const nextButton = document.querySelector(".carousel-button.next");

  // Initialize the current index to 0
  let currentIndex = 0;

  // Function to update the carousel position based on the current index
  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
  }

  // Event listener for the previous button
  prevButton.addEventListener("click", function () {
    // Decrease the index or loop back to the last item if at the beginning
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
  });

  // Event listener for the next button
  nextButton.addEventListener("click", function () {
    // Increase the index or loop back to the first item if at the end
    currentIndex =
      currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });
});
