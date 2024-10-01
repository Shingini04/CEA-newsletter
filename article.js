const posts = [
  {
    title: "Informal Nite",
    content1:
      "On the evening of August 2nd, 2024, the CEA of IIT Madras hosted a lively and unforgettable Informal Night for the freshers. Designed to foster interaction and fun, this event brought together the freshie batch for an evening filled with games, tasks, performances, and, most importantly, the chance to connect with each other and the CEA team.",
    content2:
      "On the evening of August 2nd, 2024, the CEA of IIT Madras hosted a lively and unforgettable Informal Night for the freshers. Designed to foster interaction and fun, this event brought together the freshie batch for an evening filled with games, tasks, performances, and, most importantly, the chance to connect with each other and the CEA team.",
    image1: "Informalnite1.png",
    image2: "Informalnite2.png",
  },
  {
    title: "The Future of Sustainable Construction",
    content1:
      "Here is the full content of the article about The Future of Sustainable Construction. It explores new materials, energy-efficient building techniques, and innovative design practices.",
    image: "civil.jpg",
  },
  {
    title: "Mastering Geotechnical Analysis",
    content1:
      "Here is the full content of the article about Mastering Geotechnical Analysis. It covers soil mechanics, testing methods, and case studies in geotechnical engineering.",
    image: "civil.jpg",
  },
  {
    title: "Optimizing Structural Safety",
    content1:
      "Discover techniques to ensure the safety and reliability of your structures. Improve safety standards and durability.",
    image: "civil.jpg",
  },

  {
    title: "Introduction to Hydraulics in Civil Engineering",
    content1:
      "Learn how to apply hydraulics principles in civil engineering projects. Understand water flow, pressure management, and system designs.",
    image: "civil.jpg",
  },

  {
    title: "Building Resilient Infrastructure",
    content1:
      "Best practices for designing and constructing resilient infrastructure that withstands natural disasters and extreme conditions.",
    image: "civil.jpg",
  },

  {
    title: "Innovations in Concrete Technology",
    content1:
      "An overview of the most innovative materials and techniques in concrete technology. Enhance your projects with the latest advancements.",
    image: "civil.jpg",
  },

  {
    title: "Civil Engineering Project Management",
    content1:
      "Learn effective project management techniques for civil engineering projects. Streamline your workflow and improve project outcomes.",
    image: "civil.jpg",
  },

  {
    title: "Sustainable Urban Planning Guidelines",
    content1:
      "Ensure your urban planning projects prioritize sustainability and inclusivity. Learn how to create environmentally-friendly urban spaces.",
    image: "civil.jpg",
  },

  {
    title: "Version Control for Engineering Projects",
    content1:
      "Master the basics of version control for better document management and collaboration on engineering projects.",
    image: "civil.jpg",
  },

  {
    title: "Intro to Smart Cities",
    content1:
      "Learn how to design and implement smart city technologies. Discover the future of urban infrastructure development.",
    image: "civil.jpg",
  },

  {
    title: "Bridge Design and Load Calculations",
    content1:
      "A guide to bridge design and understanding load calculations. Learn how to create efficient and safe bridge structures.",
    image: "civil.jpg",
  },
];

function getPostIndexFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("postIndex");
}

function displayArticle() {
  const postIndex = getPostIndexFromUrl();
  if (postIndex !== null && posts[postIndex]) {
    const post = posts[postIndex];
    document.getElementById("articleTitle").textContent = post.title;
    document.getElementById("articleContent-1").textContent = post.content1;
    document.getElementById("articleContent-2").textContent = post.content2;
    document.getElementById("articleImage1").src = post.image1;
    document.getElementById("articleImage2").src = post.image2;
    document.getElementById("articleImage").alt = post.title;
  } else {
    document.getElementById("articleTitle").textContent = "Article not found";
    document.getElementById("articleContent").textContent = "";
    document.getElementById("articleImage").style.display = "none";
  }
}

displayArticle();

//recent blogs

function displayRecentBlogs() {
  const currentBlogIndex = getPostIndexFromUrl();
  const recentBlogsContainer = document.querySelector(".recent-blogs");

  const recentBlogs = posts
    .filter((blogEntry, index) => index != currentBlogIndex)
    .slice(0, 3);

  recentBlogs.forEach((blogEntry, index) => {
    const blogItem = document.createElement("div");
    blogItem.classList.add("blog-item");

    const postIndex = posts.findIndex((post) => post.title === blogEntry.title);

    blogItem.innerHTML = `
      <img src="${blogEntry.image1}" alt="${
      blogEntry.title
    }" class="blog-image" />
      <h3>${blogEntry.title}</h3>
      <p>${blogEntry.content1.substring(0, 100)}...</p>
      <a href="?postIndex=${postIndex}" class="read-more">Read More</a>
    `;

    recentBlogsContainer.appendChild(blogItem);
  });
}

displayRecentBlogs();
