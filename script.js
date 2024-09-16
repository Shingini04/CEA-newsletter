const posts = [
    { title: "10 Tips for Better Structural Design", 
      excerpt: "Learn how to enhance your structural design skills with these essential tips. Discover the latest trends and best practices in civil engineering.", 
      image: "civil.jpg" 
    },
    
    { title: "The Future of Sustainable Construction", 
      excerpt: "Explore the upcoming features and trends in sustainable construction practices. Stay ahead of the curve with our in-depth analysis.", 
      image: "civil.jpg" 
    },
    
    { title: "Mastering Geotechnical Analysis", 
      excerpt: "A comprehensive guide to understanding soil mechanics and geotechnical analysis. Learn how to analyze and manage different soil conditions effectively.", 
      image: "civil.jpg" 
    },
    
    { title: "Optimizing Structural Safety", 
      excerpt: "Discover techniques to ensure the safety and reliability of your structures. Improve safety standards and durability.", 
      image: "civil.jpg" 
    },
    
    { title: "Introduction to Hydraulics in Civil Engineering", 
      excerpt: "Learn how to apply hydraulics principles in civil engineering projects. Understand water flow, pressure management, and system designs.", 
      image: "civil.jpg" 
    },
    
    { title: "Building Resilient Infrastructure", 
      excerpt: "Best practices for designing and constructing resilient infrastructure that withstands natural disasters and extreme conditions.", 
      image: "civil.jpg" 
    },
    
    { title: "Innovations in Concrete Technology", 
      excerpt: "An overview of the most innovative materials and techniques in concrete technology. Enhance your projects with the latest advancements.", 
      image: "civil.jpg" 
    },
    
    { title: "Civil Engineering Project Management", 
      excerpt: "Learn effective project management techniques for civil engineering projects. Streamline your workflow and improve project outcomes.", 
      image: "civil.jpg" 
    },
    
    { title: "Sustainable Urban Planning Guidelines", 
      excerpt: "Ensure your urban planning projects prioritize sustainability and inclusivity. Learn how to create environmentally-friendly urban spaces.", 
      image: "civil.jpg" 
    },
    
    { title: "Version Control for Engineering Projects", 
      excerpt: "Master the basics of version control for better document management and collaboration on engineering projects.", 
      image: "civil.jpg" 
    },
    
    { title: "Intro to Smart Cities", 
      excerpt: "Learn how to design and implement smart city technologies. Discover the future of urban infrastructure development.", 
      image: "civil.jpg" 
    },
    
    { title: "Bridge Design and Load Calculations", 
      excerpt: "A guide to bridge design and understanding load calculations. Learn how to create efficient and safe bridge structures.", 
      image: "civil.jpg" 
    }
  ];
  

const recentPostsContainer = document.getElementById('recentPosts');
const loadMoreButton = document.getElementById('loadMore');
let visiblePosts = 6;

function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-image">
        <div class="post-overlay">
            <h3 class="post-title">${post.title}</h3>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="#" class="read-more">Read More</a>
        </div>
    `;
    return card;
}

function displayPosts() {
    recentPostsContainer.innerHTML = '';
    for (let i = 0; i < visiblePosts && i < posts.length; i++) {
        recentPostsContainer.appendChild(createPostCard(posts[i]));
    }
}

loadMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    visiblePosts += 6;
    if (visiblePosts >= posts.length) {
        loadMoreButton.style.display = 'none';
    }
    displayPosts();
});

displayPosts();
