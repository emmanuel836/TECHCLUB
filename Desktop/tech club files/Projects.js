// Initialize particles background
function initParticles() {
  const particles = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Random properties
    const size = Math.random() * 5 + 1;
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}%`;
    particle.style.top = `${posY}%`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    particles.appendChild(particle);
  }
}

// Filter projects
function filterProjects(category) {
  const projects = document.querySelectorAll('.project-card');
  
  projects.forEach(project => {
    if (category === 'all' || project.dataset.category === category) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}

// Open project modal
function openModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  
  // Show loading state
  modalContent.innerHTML = '<div class="loading"></div>';
  modal.style.display = 'flex';
  
  // Simulate loading project data
  setTimeout(() => {
    // In a real app, you would fetch project data here
    const projectData = getProjectData(projectId);
    modalContent.innerHTML = `
      <h2>${projectData.title}</h2>
      <p>${projectData.description}</p>
      <div class="project-details">
        ${projectData.details}
      </div>
    `;
  }, 1000);
}

// Close project modal
function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.style.display = 'none';
}

// Helper function to get project data
function getProjectData(projectId) {
  // This would be replaced with actual data fetching in a real app
  const projects = {
    project1: {
      title: "E-Commerce Platform",
      description: "A modern, responsive e-commerce platform built with React and Node.js.",
      details: "<p>More details about this project would go here...</p>"
    },
    project2: {
      title: "Fitness Tracker App",
      description: "Cross-platform mobile app for fitness tracking with AI-powered features.",
      details: "<p>More details about this project would go here...</p>"
    },
    project3: {
      title: "AI Chatbot Assistant",
      description: "Intelligent chatbot powered by natural language processing.",
      details: "<p>More details about this project would go here...</p>"
    },
    project4: {
      title: "DeFi Trading Platform",
      description: "Decentralized finance platform for cryptocurrency trading.",
      details: "<p>More details about this project would go here...</p>"
    },
    project5: {
      title: "Cloud Dashboard",
      description: "Comprehensive cloud management dashboard with real-time monitoring.",
      details: "<p>More details about this project would go here...</p>"
    },
    project6: {
      title: "Computer Vision System",
      description: "Advanced computer vision system for object detection.",
      details: "<p>More details about this project would go here...</p>"
    }
  };
  
  return projects[projectId] || {
    title: "Project Not Found",
    description: "The requested project details could not be loaded.",
    details: ""
  };
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Initialize particles
  initParticles();
  
  // Set up filter buttons
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      filterProjects(this.dataset.filter);
    });
  });
  
  // Animate project cards with their delay
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    const delay = card.dataset.delay;
    card.style.animationDelay = `${delay}s`;
  });
  
  // Load header and footer (assuming you have a function for this)
  // loadHeader();
  // loadFooter();
  
  // Show loading screen (example)
  // document.getElementById('loadingScreen').style.display = 'flex';
  // setTimeout(() => {
  //   document.getElementById('loadingScreen').style.display = 'none';
  // }, 2000);
});
