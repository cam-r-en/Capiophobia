const videos = [
    { photo: "", title: "Video 1", content: "This is the content of Video 1." },
    { photo: "", title: "Video 2", content: "This is the content of Video 2." },
    { photo: "", title: "Video 3", content: "This is the content of Video 3." },
    { photo: "", title: "Video 4", content: "This is the content of Video 4." }
  ];
  
  function displayVideos() {
    const videoContainer = document.querySelector(".video-container");
  
    videos.forEach(video => {
      const videoElement = document.createElement("div");
      videoElement.classList.add("video");
  
      videoElement.innerHTML = `
        <img>${video.photo}</img>
        <h2>${video.title}</h2>
        <p>${video.content}</p>
        <a href="/another-page" class="watch-here">Watch here</a>  <!-- Link to another page -->
      `;
  
      videoContainer.appendChild(videoElement);
    });
  
    document.querySelectorAll(".video").forEach(video => {
      video.style.border = "2px solid red";
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayVideos);