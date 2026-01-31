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
      <div class="blog-post" onclick="location.href='article.html?id=${globalIndex}'" style="cursor: pointer;">
        ${post.image ? `<img src="${post.image}" alt="${post.title}">` : `<div style="height:200px; background:#ddd;"></div>`}
        <div class="blog-content">
          <h2>${post.title}</h2>
          <p>${post.body.substring(0, 100)}...</p> 
          <div class="read-article-link">READ ARTICLE &rarr;</div>
        </div>
      </div>
    `;
  }).join("");
}

function loadSingleArticle() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const post = posts[id];

  if (!post) {
    document.getElementById("article-display").innerHTML = "<h1>Article not found</h1>";
    return;
  }

  // Set the tab title and the text heading
  document.title = `PureFit | ${post.title}`;
  document.getElementById("art-title").innerText = post.title;
  
  // IMAGE LOGIC REMOVED: We no longer look for post.image here
  
  // Set the body content
  document.getElementById("art-body").innerText = post.body;
}