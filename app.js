// Project data
const projects = [
    {
        id: 1,
        title: "Hello World Art",
        description: "Create colorful ASCII art patterns using Python print statements. Learn the basics of output and string manipulation.",
        difficulty: "Beginner",
        estimatedTime: "30 minutes",
        skills: ["print statements", "strings", "basic syntax"],
        icon: "🎨"
    },
    {
        id: 2,
        title: "Magic 8 Ball",
        description: "Build a digital fortune teller that gives random answers to yes/no questions. Perfect introduction to random choices.",
        difficulty: "Beginner", 
        estimatedTime: "45 minutes",
        skills: ["random module", "lists", "user input"],
        icon: "🎱"
    },
    {
        id: 3,
        title: "Pet Age Calculator",
        description: "Convert human years to dog or cat years using mathematical operations and conditional logic.",
        difficulty: "Beginner",
        estimatedTime: "35 minutes", 
        skills: ["math operations", "if statements", "variables"],
        icon: "🐕"
    },
    {
        id: 4,
        title: "Password Generator",
        description: "Create secure random passwords using loops, string manipulation, and the random module.",
        difficulty: "Intermediate",
        estimatedTime: "60 minutes",
        skills: ["loops", "random module", "string methods", "lists"],
        icon: "🔐"
    },
    {
        id: 5,
        title: "Rock Paper Scissors Game",
        description: "Build an interactive game where users play against the computer with score tracking and game logic.",
        difficulty: "Intermediate",
        estimatedTime: "75 minutes",
        skills: ["functions", "game logic", "user input", "conditional statements"],
        icon: "✂️"
    },
    {
        id: 6,
        title: "Simple Calculator",
        description: "Create a calculator that performs basic math operations using functions and error handling.",
        difficulty: "Intermediate", 
        estimatedTime: "50 minutes",
        skills: ["functions", "math operations", "error handling", "user interface"],
        icon: "🧮"
    },
    {
        id: 7,
        title: "Word Guessing Game",
        description: "Develop a hangman-style word guessing game with hints, lives, and victory conditions.",
        difficulty: "Intermediate",
        estimatedTime: "90 minutes",
        skills: ["string manipulation", "loops", "lists", "game state"],
        icon: "🔤"
    },
    {
        id: 8,
        title: "Personal Budget Tracker",
        description: "Build an app to track income and expenses with data persistence and financial calculations.",
        difficulty: "Advanced",
        estimatedTime: "120 minutes",
        skills: ["file handling", "data structures", "calculations", "user interface"],
        icon: "💰"
    },
    {
        id: 9,
        title: "Weather Data Analyzer", 
        description: "Process and analyze weather patterns using lists, dictionaries, and data visualization concepts.",
        difficulty: "Advanced",
        estimatedTime: "100 minutes",
        skills: ["data structures", "file processing", "analysis", "dictionaries"],
        icon: "🌤️"
    },
    {
        id: 10,
        title: "Mini Social Network",
        description: "Create a simple social platform with user profiles, posts, and basic social features using classes.",
        difficulty: "Advanced", 
        estimatedTime: "150 minutes",
        skills: ["classes", "object-oriented programming", "data management", "user interface"],
        icon: "👥"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    setupNavigation();
    loadProjects();
    setupProjectFilters();
    setupCodePlayground();
    setupChat();
});

// Navigation functionality
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionName = this.getAttribute('data-section');
            showSection(sectionName);
            
            // Update active nav button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show target section
    const targetSection = document.getElementById(sectionName);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Update nav buttons
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-section') === sectionName) {
            btn.classList.add('active');
        }
    });
}

// Projects functionality
function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-difficulty', project.difficulty);
    card.addEventListener('click', () => openProjectModal(project));
    
    card.innerHTML = `
        <div class="project-header">
            <span class="project-icon">${project.icon}</span>
            <h3 class="project-title">${project.title}</h3>
        </div>
        <p class="project-description">${project.description}</p>
        <div class="project-meta">
            <span class="difficulty-badge ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
            <span class="project-time">⏱️ ${project.estimatedTime}</span>
        </div>
    `;
    
    return card;
}

function setupProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const level = this.getAttribute('data-level');
            filterProjects(level);
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function filterProjects(level) {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        if (level === 'all' || card.getAttribute('data-difficulty') === level) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Project modal functionality
function openProjectModal(project) {
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    
    modalBody.innerHTML = `
        <div class="modal-project-header">
            <span class="modal-project-icon">${project.icon}</span>
            <h2 class="modal-project-title">${project.title}</h2>
        </div>
        <p class="modal-project-description">${project.description}</p>
        <div class="modal-project-meta">
            <div class="modal-meta-item">
                <span class="modal-meta-label">Difficulty Level</span>
                <span class="modal-meta-value difficulty-badge ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
            </div>
            <div class="modal-meta-item">
                <span class="modal-meta-label">Estimated Time</span>
                <span class="modal-meta-value">${project.estimatedTime}</span>
            </div>
            <div class="modal-meta-item">
                <span class="modal-meta-label">Skills You'll Learn</span>
                <div class="skills-list">
                    ${project.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        </div>
        <div class="modal-actions">
            <button class="btn btn--primary" onclick="startProject(${project.id})">Start Project</button>
            <button class="btn btn--secondary" onclick="closeModal()">Maybe Later</button>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
}

function startProject(projectId) {
    const project = projects.find(p => p.id === projectId);
    alert(`Great choice! Starting "${project.title}". In a real app, this would open the project workspace with step-by-step instructions.`);
    closeModal();
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Code playground functionality
function setupCodePlayground() {
    const runButton = document.querySelector('.run-code-btn');
    
    runButton.addEventListener('click', function() {
        const codeTextarea = document.querySelector('.code-textarea');
        const outputArea = document.querySelector('.output-area');
        const code = codeTextarea.value;
        
        // Simulate code execution (in a real app, this would send to a Python interpreter)
        if (code.trim() === '') {
            outputArea.innerHTML = '<p style="color: var(--color-warning);">Please write some code first!</p>';
            return;
        }
        
        // Simple simulation for demo purposes
        outputArea.innerHTML = '<p style="color: var(--color-success);">🚀 Code executed successfully!</p>';
        
        // Simulate some common Python outputs
        if (code.includes('print(')) {
            let output = '';
            const printMatches = code.match(/print\((.*?)\)/g);
            if (printMatches) {
                printMatches.forEach(match => {
                    const content = match.match(/print\((.*)\)/)[1];
                    // Simple string evaluation for demo
                    let result = content.replace(/['"]/g, '');
                    if (content.includes('Hello')) {
                        result = 'Hello, CodeBot Academy!';
                    } else if (content.includes('name')) {
                        result = 'Hi Young Coder, you are 10 years old!';
                    }
                    output += `<p>${result}</p>`;
                });
            }
            outputArea.innerHTML = '<p style="color: var(--color-success);">🚀 Output:</p>' + output;
        }
        
        // Add some encouraging messages
        const encouragements = [
            "Great job coding! 🎉",
            "You're becoming a Python expert! 🐍",
            "Keep up the awesome work! ⭐",
            "Your code is looking fantastic! 💻"
        ];
        
        setTimeout(() => {
            const randomEncouragement = encouragements[Math.floor(Math.random() * encouragements.length)];
            outputArea.innerHTML += `<p style="color: var(--color-primary); margin-top: var(--space-16);">${randomEncouragement}</p>`;
        }, 1000);
    });
}

// Chat functionality
function setupChat() {
    const chatInput = document.getElementById('chat-input');
    
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessageToChat(message, 'user');
    chatInput.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessageToChat(response, 'bot');
    }, 1000);
}

function sendSuggestion(message) {
    const chatInput = document.getElementById('chat-input');
    chatInput.value = message;
    sendMessage();
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const icon = sender === 'bot' ? '🤖' : '👤';
    
    messageDiv.innerHTML = `
        <span class="message-icon">${icon}</span>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(userMessage) {
    const responses = {
        'variables': "Great question! Variables in Python are like labeled boxes that store information. You create them like this: `name = 'CodeBot'` or `age = 10`. The variable name goes on the left, and the value goes on the right!",
        'for loop': "A for loop repeats code a certain number of times! It's like telling Python 'do this 5 times' or 'do this for each item in a list'. Here's an example: `for i in range(5): print('Hello!')` - this prints 'Hello!' five times!",
        'debug': "Debugging is like being a detective! 🕵️ When your code doesn't work, check for: missing colons (:), wrong indentation (spaces), typos in variable names, or missing quotes. Read the error message carefully - it often tells you exactly what's wrong!",
        'project': "Here are some fun project ideas: 1) Make a simple calculator, 2) Create a guessing game, 3) Build a story generator, or 4) Make a virtual pet! Start with something that interests you - coding is more fun when you're excited about what you're building!"
    };
    
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
        if (lowerMessage.includes(key)) {
            return response;
        }
    }
    
    // Default responses
    const defaultResponses = [
        "That's an interesting question! Python is a fantastic language for beginners. What specific part would you like to learn more about?",
        "Great to see you're curious about coding! Remember, the best way to learn is by practicing. Have you tried any of our projects yet?",
        "I'm here to help you on your coding journey! Don't worry if things seem confusing at first - every programmer started exactly where you are now.",
        "Keep asking questions - that's how you become a better programmer! Is there a specific Python concept you'd like me to explain?",
        "Awesome! Programming is like learning a superpower. Each line of code you write makes you stronger! What would you like to code today?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Utility functions
function showNotification(message, type = 'info') {
    // Simple notification system
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        background: var(--color-${type});
        box-shadow: var(--shadow-lg);
        transform: translateX(400px);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Hide notification
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add some interactive feedback
document.addEventListener('click', function(event) {
    // Add click feedback to buttons
    if (event.target.classList.contains('btn') || 
        event.target.classList.contains('project-card') ||
        event.target.classList.contains('nav-btn')) {
        
        event.target.style.transform = 'scale(0.98)';
        setTimeout(() => {
            event.target.style.transform = '';
        }, 150);
    }
});

// Initialize welcome message
setTimeout(() => {
    if (document.querySelector('.section.active').id === 'home') {
        showNotification('Welcome to CodeBot Academy! 🚀', 'success');
    }
}, 1000);