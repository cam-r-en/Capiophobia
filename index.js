window.addEventListener("DOMContentLoaded", function () {
  let navbar = document.getElementById("navbar");
  let navbarOffset = navbar.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= navbarOffset) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
});

document.querySelectorAll(".video-thumbnail").forEach(thumbnail => {
  thumbnail.addEventListener("click", function () {
    let videoId = this.getAttribute("data-video");
    this.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  });
});