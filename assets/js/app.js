function renderPosts(page) {
  const container = document.getElementById("posts");
  if (!container) return;

  const filteredPosts = posts.filter(post => post.page === page);

  if (filteredPosts.length === 0) {
    container.innerHTML = "<p>No posts available.</p>";
    return;
  }

  container.innerHTML = filteredPosts.map((post) => {
    const globalIndex = posts.indexOf(post);

    return `
      <a href="/articles/?id=${globalIndex}" class="blog-post">
        <img src="${post.image}" alt="${post.title}" loading="lazy">
        <div class="blog-content">
          <h2>${post.title}</h2>
          <p>${post.body.substring(0, 100)}...</p> 
          <span class="read-article-link">READ ARTICLE &rarr;</span>
        </div>
      </a>
    `;
  }).join("");
}


function loadSingleArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const post = posts[id];

  if (!post) {
    const display = document.getElementById("article-display");
    if (display) display.innerHTML = "<h1>Article not found</h1>";
    return;
  }

  // PureFit Branding
  document.title = `PureFit | ${post.title}`;
  
  const titleElem = document.getElementById("art-title");
  const bodyElem = document.getElementById("art-body");
  
  if (titleElem) titleElem.innerText = post.title;
  if (bodyElem) bodyElem.innerText = post.body;
}