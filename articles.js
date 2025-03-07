const articles = [
    { photo: "", title: "Andre Hill Killer found guilty", content: "This is the content of Article 1." },
    { photo: "", title: "Article 2", content: "This is the content of Article 2." },
    { photo: "", title: "Article 3", content: "This is the content of Article 3." },
    { photo: "", title: "Article 4", content: "This is the content of Article 4." }
];
  
function displayArticles() {
    const articleContainer = document.querySelector(".post-container");
  
    articles.forEach(article => {
      const articleElement = document.createElement("div");
      articleElement.classList.add("article");
  
      articleElement.innerHTML = `
        <img>${article.photo}</img>
        <h2>${article.title}</h2>
        <p>${article.content}</p>
        <a href="/articles/" class="read-more">Read more</a>  <!-- Link to another page -->
      `;
  
      articleContainer.appendChild(articleElement);
    });
  
    document.querySelectorAll(".article").forEach(article => {
      article.style.border = "2px solid red";
    });
}
  
document.addEventListener("DOMContentLoaded", displayArticles);
  