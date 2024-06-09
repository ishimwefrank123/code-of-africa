document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
      this.querySelector(".gallery-item-overlay").style.opacity = "1";
    });

    item.addEventListener("mouseleave", function() {
      this.querySelector(".gallery-item-overlay").style.opacity = "0";
    });
  });
});
