const posts = [
  {
    title: "Environmental Engineering: Innovating for a Greener Tomorrow",
    excerpt:
      "As the world faces growing problems like climate change, pollution, and the depletion of resources, environmental engineering offers practical solutions.",
    image: "HEIF_Image_4.jpg",
  },

  {
    title: "Water Resource Management: Tackling the Growing Freshwater Crisis",
    excerpt:
      "While air pollution remains a central focus, another global challenge is the increasing scarcity of freshwater. The demand for clean water continues to grow as populations rise and urbanization expands. Environmental engineers are leading the charge in developing technologies that ensure clean, safe, and abundant water supplies for communities around the world.",
    image: "civil.jpg",
  },

  {
    title: "The Fight Against Microplastics: Keeping Oceans and Food Safe",
    excerpt:
      "As the world becomes more aware of the dangers of plastic pollution, one of the emerging concerns is microplastics—tiny particles of plastic that make their way into oceans, rivers, and even the food we eat. These particles pose significant threats to marine ecosystems and human health. Environmental engineers are playing a vital role in combating this growing problem through innovative filtration and prevention technologies.",
    image: "civil.jpg",
  },

  {
    title: "Renewable Energy: Powering the Future Sustainably",
    excerpt:
      "Environmental engineering doesn’t just stop at solving pollution or water-related issues—it also plays a crucial role in transforming how we produce and consume energy. Renewable energy is the cornerstone of a sustainable future, and environmental engineers are at the forefront of designing and implementing clean energy solutions that reduce reliance on fossil fuels.",
    image: "civil.jpg",
  },
];

const recentPostsContainer = document.getElementById("recentPosts");
const loadMoreButton = document.getElementById("loadMore");
let visiblePosts = 6;

function createPostCard(post, index) {
  const card = document.createElement("div");
  card.className = "post-card";
  card.innerHTML = `
      <img src="${post.image}" alt="${post.title}" class="post-image">
      <div class="post-overlay">
          <h3 class="post-title">${post.title}</h3>
          <p class="post-excerpt">${post.excerpt}</p>
          <a href="article.html?postIndex=${index}" class="read-more">Read More</a>
      </div>
  `;
  return card;
}

function displayPosts() {
  recentPostsContainer.innerHTML = "";
  for (let i = 0; i < visiblePosts && i < posts.length; i++) {
    recentPostsContainer.appendChild(createPostCard(posts[i], i));
  }
}

loadMoreButton.addEventListener("click", (e) => {
  e.preventDefault();
  visiblePosts += 6;
  if (visiblePosts >= posts.length) {
    loadMoreButton.style.display = "none";
  }
  displayPosts();
});

displayPosts();
