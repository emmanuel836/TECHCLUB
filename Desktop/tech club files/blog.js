document.addEventListener('DOMContentLoaded', () => {

    const posts = [
        {
            title: "The Basics of Modern Web Development",
            thumbnail: "images/web.jpeg",
            excerpt: "Dive into the essential skills and frameworks needed to build a responsive and dynamic website in 2025. Learn about HTML5, CSS3, and JavaScript frameworks like React.js.",
            author: "adsabri47",
            date: "August 13, 2025",
            category: "Web Development"
        },
        {
            title: "AI in Everyday Life: How It's Changing Our World",
            thumbnail: "images/ai.jpeg",
            excerpt: "From virtual assistants to personalized recommendations, AI is no longer a futuristic concept. Explore the practical applications and ethical considerations of artificial intelligence today.",
            author: "Harsh Ramesh",
            date: "August 10, 2025",
            category: "AI"
        },
        {
            title: "Mastering the Command Line Interface",
            thumbnail: "images/cli.png",
            excerpt: "Learn the essential commands and shortcuts for navigating your file system and automating tasks directly from the terminal. A crucial skill for every developer.",
            author: "Emmanuel",
            date: "August 5, 2025",
            category: "Coding"
        },
        {
            title: "The Role of API Design in Modern Software",
            thumbnail: "images/api.jpeg",
            excerpt: "A look at why a well-designed API is critical for building scalable and maintainable applications. We'll cover RESTful principles and API documentation.",
            author: "Lynette Gift",
            date: "July 28, 2025",
            category: "Web Development"
        }
    ];

    const authors = [
        { name: "adsabri47", role: "Web Dev Lead", image: "images/adsabri47.jpg" },
        { name: "Lynette Gift", role: "Coder", image: "images/lyn.jpg" },
    ];

    const categories = {};
    posts.forEach(post => {
        categories[post.category] = (categories[post.category] || 0) + 1;
    });

    const blogPostsContainer = document.getElementById('blog-posts-container');
    const categoryList = document.getElementById('category-list');
    const authorProfilesContainer = document.getElementById('author-profiles-container');

    // rendering posts
    function renderPosts(filteredPosts) {
        blogPostsContainer.innerHTML = '';
        if (filteredPosts.length === 0) {
            blogPostsContainer.innerHTML = '<p class="text-center text-muted">No posts found.</p>';
            return;
        }
        filteredPosts.forEach(post => {
            const postHTML = `
                <article class="blog-post mb-4 p-4 rounded-3 shadow-sm">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${post.thumbnail}" class="img-fluid rounded-start blog-thumbnail" alt="Thumbnail for ${post.title}">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title blog-post-title">${post.title}</h5>
                                <p class="card-text">${post.excerpt}</p>
                                <a href="#" class="read-more-link">Read more &rarr;</a>
                                <p class="card-text mt-2">
                                    <small class="text-muted">By <span class="author-name">${post.author}</span> on ${post.date}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            `;
            blogPostsContainer.innerHTML += postHTML;
        });
    }

    // Render posts initially
    renderPosts(posts);

    // Render categories
    for (const category in categories) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#" class="category-link" data-category="${category}">${category} <span class="badge rounded-pill bg-secondary">${categories[category]}</span></a>`;
        categoryList.appendChild(li);
    }

    // Render author profiles
    authors.forEach(author => {
        const authorHTML = `
            <div class="author-profile text-center mb-3">
                <img src="${author.image}" class="rounded-circle mb-2" alt="Author ${author.name}">
                <h6 class="mb-0">${author.name}</h6>
                <p class="text-muted-2">${author.role}</p>
                <a href="#" class="text-decoration-none" data-author="${author.name}">View all posts</a>
            </div>
            <hr>
        `;
        authorProfilesContainer.innerHTML += authorHTML;
    });

    // Event Listeners for filtering
    categoryList.addEventListener('click', (e) => {
        e.preventDefault();
        const category = e.target.dataset.category || e.target.closest('a')?.dataset.category;
        if (category) {
            const filtered = posts.filter(post => post.category === category);
            renderPosts(filtered);
        }
    });

    authorProfilesContainer.addEventListener('click', (e) => {
        e.preventDefault();
        const author = e.target.dataset.author || e.target.closest('a')?.dataset.author;
        if (author) {
            const filtered = posts.filter(post => post.author === author);
            renderPosts(filtered);
        }
    });

    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const filtered = posts.filter(post => 
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.author.toLowerCase().includes(searchTerm)
        );
        renderPosts(filtered);
    });
    
    // --- Form Submission ---
    function handleFormSubmit(event) {
        event.preventDefault();
        const emailInput = event.target.querySelector('input[type="email"]');
        if (emailInput.value) {
            alert(`Thanks for subscribing with ${emailInput.value}! You'll receive our latest updates.`);
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    }
    const subscribeFormBlog = document.getElementById('subscribeFormBlog');
    if (subscribeFormBlog) {
        subscribeFormBlog.addEventListener('submit', handleFormSubmit);
    }
    
    // --- Current Year in Footer ---
    const currentYearBlogSpan = document.getElementById('currentYearBlog');
    if (currentYearBlogSpan) {
        currentYearBlogSpan.textContent = new Date().getFullYear();
    }
});