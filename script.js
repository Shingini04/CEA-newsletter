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

const newsLetterPosts = [
  {
    title: "Environmental Engineering: Innovating for a Greener Tomorrow",
    excerpt:
      "As the world faces growing problems like climate change, pollution, and the depletion of resources, environmental engineering offers practical solutions.",
    image: "HEIF_Image_4.jpg",
  },

  {
    title: "The Future of Sustainable Construction",
    excerpt:
      "Explore the upcoming features and trends in sustainable construction practices. Stay ahead of the curve with our in-depth analysis.",
    image: "civil.jpg",
  },

  {
    title: "Mastering Geotechnical Analysis",
    excerpt:
      "A comprehensive guide to understanding soil mechanics and geotechnical analysis. Learn how to analyze and manage different soil conditions effectively.",
    image: "civil.jpg",
  },

  {
    title: "Optimizing Structural Safety",
    excerpt:
      "Discover techniques to ensure the safety and reliability of your structures. Improve safety standards and durability.",
    image: "civil.jpg",
  },

  {
    title: "Introduction to Hydraulics in Civil Engineering",
    excerpt:
      "Learn how to apply hydraulics principles in civil engineering projects. Understand water flow, pressure management, and system designs.",
    image: "civil.jpg",
  },

  {
    title: "Building Resilient Infrastructure",
    excerpt:
      "Best practices for designing and constructing resilient infrastructure that withstands natural disasters and extreme conditions.",
    image: "civil.jpg",
  },

  {
    title: "Innovations in Concrete Technology",
    excerpt:
      "An overview of the most innovative materials and techniques in concrete technology. Enhance your projects with the latest advancements.",
    image: "civil.jpg",
  },

  {
    title: "Civil Engineering Project Management",
    excerpt:
      "Learn effective project management techniques for civil engineering projects. Streamline your workflow and improve project outcomes.",
    image: "civil.jpg",
  },

  {
    title: "Sustainable Urban Planning Guidelines",
    excerpt:
      "Ensure your urban planning projects prioritize sustainability and inclusivity. Learn how to create environmentally-friendly urban spaces.",
    image: "civil.jpg",
  },

  {
    title: "Version Control for Engineering Projects",
    excerpt:
      "Master the basics of version control for better document management and collaboration on engineering projects.",
    image: "civil.jpg",
  },

  {
    title: "Intro to Smart Cities",
    excerpt:
      "Learn how to design and implement smart city technologies. Discover the future of urban infrastructure development.",
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
