const posts = [
  {
    title: "Environmental Engineering: Innovating for a Greener Tomorrow",
    content: `
      <p style="font-size: 18px; line-height: 1.6;">As the world faces growing problems like climate change, pollution, and the depletion of resources, environmental engineering offers practical solutions. Often called the "protector of the planet," this field combines technology and care for the environment, aiming to solve pressing global issues.</p>

      <p style="font-size: 18px; line-height: 1.6;">Climate change is one of the most pressing problems of our time. Rising temperatures, extreme weather events, and shifting ecosystems are affecting billions of people globally.</p>

      <p style="font-size: 18px; line-height: 1.6;">Environmental engineers are at the forefront of tackling these challenges by developing innovative approaches to mitigate the impact of human activities on the environment. From creating sustainable building designs to devising waste management systems, their work is essential in promoting greener ways of living.</p>

      <p style="font-size: 18px; line-height: 1.6;">One key area is air pollution, which contributes to health problems and environmental degradation. Environmental engineers are advancing technologies such as Carbon Capture and Storage (CCS), designed to trap carbon emissions directly from the atmosphere.</p>

      <p style="font-size: 18px; line-height: 1.6;">This method is gaining traction as industries seek ways to lower their carbon output and meet stricter environmental regulations. Engineers are also working on air filtration systems that can reduce harmful pollutants in urban settings, improving air quality for millions of people.</p>

      <p style="font-size: 18px; line-height: 1.6;">By focusing on these technologies, environmental engineers are helping industries transition to greener practices. But while the battle for cleaner air rages on, another global challenge looms large: the world's increasing demand for fresh water. Environmental engineers are also on the front lines of this fight, innovating ways to secure our most precious resource—water. Read on to find out how these professionals are addressing the world's growing water crisis.</p>

      <p style="font-size: 16px;">Citations:<br><a href="https://www.wikipedia.org/">https://www.wikipedia.org/</a></p>

      <p style="font-size: 16px; font-style: italic;">Written by,<br>Vahid Basha Shaik<br>Coordinator in CEA</p>
    `,
    images: ["HEIF_Image_4.jpg", "HEIF_Image_5.jpg"]
  },
  {
    title: "The Future of Sustainable Construction",
    content:
      "Here is the full content of the article about The Future of Sustainable Construction. It explores new materials, energy-efficient building techniques, and innovative design practices.",
    image: "civil.jpg",
  },
  {
    title: "Mastering Geotechnical Analysis",
    content:
      "Here is the full content of the article about Mastering Geotechnical Analysis. It covers soil mechanics, testing methods, and case studies in geotechnical engineering.",
    image: "civil.jpg",
  },
  {
    title: "Optimizing Structural Safety",
    content:
      "Discover techniques to ensure the safety and reliability of your structures. Improve safety standards and durability.",
    image: "civil.jpg",
  },

  {
    title: "Introduction to Hydraulics in Civil Engineering",
    content:
      "Learn how to apply hydraulics principles in civil engineering projects. Understand water flow, pressure management, and system designs.",
    image: "civil.jpg",
  },

  {
    title: "Building Resilient Infrastructure",
    content:
      "Best practices for designing and constructing resilient infrastructure that withstands natural disasters and extreme conditions.",
    image: "civil.jpg",
  },

  {
    title: "Innovations in Concrete Technology",
    content:
      "An overview of the most innovative materials and techniques in concrete technology. Enhance your projects with the latest advancements.",
    image: "civil.jpg",
  },

  {
    title: "Civil Engineering Project Management",
    content:
      "Learn effective project management techniques for civil engineering projects. Streamline your workflow and improve project outcomes.",
    image: "civil.jpg",
  },

  {
    title: "Sustainable Urban Planning Guidelines",
    content:
      "Ensure your urban planning projects prioritize sustainability and inclusivity. Learn how to create environmentally-friendly urban spaces.",
    image: "civil.jpg",
  },

  {
    title: "Version Control for Engineering Projects",
    content:
      "Master the basics of version control for better document management and collaboration on engineering projects.",
    image: "civil.jpg",
  },

  {
    title: "Intro to Smart Cities",
    content:
      "Learn how to design and implement smart city technologies. Discover the future of urban infrastructure development.",
    image: "civil.jpg",
  },

  {
    title: "Bridge Design and Load Calculations",
    content:
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
    document.getElementById("articleContent").innerHTML = post.content;
    const existingImages = document.querySelectorAll('.article-image');
    existingImages.forEach(img => img.remove());
    if (post.images && post.images.length > 0) {
      const firstImage = document.createElement("img");
      firstImage.src = post.images[0];
      firstImage.alt = post.title;
      firstImage.className = "article-image";
      document.getElementById("articleContent").insertBefore(firstImage, document.getElementById("articleContent").firstChild);
    }
    if (post.images && post.images.length > 1) {
      const secondImage = document.createElement("img");
      secondImage.src = post.images[1];
      secondImage.alt = post.title;
      secondImage.className = "article-image";
      document.getElementById("articleContent").appendChild(secondImage);
    }
  } else {
    document.getElementById("articleTitle").textContent = "Article not found";
    document.getElementById("articleContent").textContent = "";
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
      <img src="${blogEntry.image}" alt="${
      blogEntry.title
    }" class="blog-image" />
      <h3>${blogEntry.title}</h3>
      <p>${blogEntry.content.substring(0, 100)}...</p>
      <a href="?postIndex=${postIndex}" class="read-more">Read More</a>
    `;

    recentBlogsContainer.appendChild(blogItem);
  });
}

displayRecentBlogs();
