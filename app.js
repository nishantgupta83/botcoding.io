// CodeBot Academy - Interactive Learning Platform for Kids
// Main JavaScript functionality

// Global state management
let userProgress = {
    modules: {
        'python-basics': { progress: 80, completed: [] },
        'decisions': { progress: 60, completed: [] },
        'loops': { progress: 40, completed: [] },
        'data-storage': { progress: 20, completed: [] },
        'functions': { progress: 0, completed: [] }
    },
    projects: {
        'hello-world-art': false,
        'magic-8-ball': false,
        'pet-age-calculator': false,
        'password-generator': false,
        'rock-paper-scissors': false
    },
    achievements: {
        'first-print': true,
        'loop-master': false,
        'function-creator': false
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    loadProgress();
    setupNavigation();
    setupChatInput();
    updateProgressDisplay();
});

// Initialize the application
function initializeApp() {
    console.log('🤖 CodeBot Academy initialized!');
    
    // Add welcome message
    showWelcomeMessage();
    
    // Setup smooth scrolling for all anchor links
    setupSmoothScrolling();
    
    // Setup intersection observer for section highlighting
    setupSectionObserver();
    
    // Add click tracking for educational analytics
    setupClickTracking();
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get target section
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Update URL without triggering navigation
        history.pushState(null, null, `#${sectionId}`);
    }
}

// Setup smooth scrolling for all anchor links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Setup intersection observer for automatic nav highlighting
function setupSectionObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding nav link
                const activeLink = document.querySelector(`.nav__link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    });
    
    sections.forEach(section => observer.observe(section));
}

// Toggle code examples visibility
function toggleCode(codeId) {
    const codeBlock = document.getElementById(codeId);
    const button = event.target;
    
    if (codeBlock) {
        if (codeBlock.classList.contains('hidden')) {
            codeBlock.classList.remove('hidden');
            button.textContent = '🙈 Hide Code';
            button.classList.add('btn--primary');
            button.classList.remove('btn--secondary');
            
            // Track topic completion
            trackTopicCompletion(codeId);
            
            // Add syntax highlighting
            highlightSyntax(codeBlock);
            
            // Show celebration animation
            showCelebration(button);
        } else {
            codeBlock.classList.add('hidden');
            button.textContent = '👀 Try This Code';
            button.classList.remove('btn--primary');
            button.classList.add('btn--secondary');
        }
    }
}

// Add syntax highlighting to code blocks
function highlightSyntax(codeBlock) {
    const code = codeBlock.querySelector('code');
    if (code) {
        let text = code.textContent;
        
        // Simple syntax highlighting for Python
        text = text
            .replace(/\b(def|if|elif|else|for|while|import|from|return|print|input|len|range|and|or|not|True|False|None)\b/g, '<span class="keyword">$1</span>')
            .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
            .replace(/#.*$/gm, '<span class="comment">$&</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
        
        code.innerHTML = text;
    }
}

// Track topic completion for progress
function trackTopicCompletion(topicId) {
    // Find which module this topic belongs to
    const topic = document.getElementById(topicId.replace('-code', ''));
    if (!topic) return;
    
    const module = topic.closest('.module');
    if (!module) return;
    
    const moduleId = module.id;
    
    // Mark topic as completed
    if (!userProgress.modules[moduleId].completed.includes(topicId)) {
        userProgress.modules[moduleId].completed.push(topicId);
        
        // Update progress percentage
        updateModuleProgress(moduleId);
        
        // Save progress
        saveProgress();
        
        // Check for achievements
        checkAchievements();
    }
}

// Update module progress based on completed topics
function updateModuleProgress(moduleId) {
    const module = document.getElementById(moduleId);
    const topics = module.querySelectorAll('.topic');
    const completedTopics = userProgress.modules[moduleId].completed.length;
    const totalTopics = topics.length;
    
    const progressPercentage = Math.round((completedTopics / totalTopics) * 100);
    userProgress.modules[moduleId].progress = progressPercentage;
    
    // Update progress bar in UI
    const progressBar = module.querySelector('.progress-bar__fill');
    const progressText = module.querySelector('.progress-text');
    
    if (progressBar) {
        progressBar.style.width = `${progressPercentage}%`;
    }
    
    if (progressText) {
        progressText.textContent = `${progressPercentage}% Complete`;
    }
    
    // Update overall progress section
    updateProgressDisplay();
}

// Complete a project
function completeProject(projectId) {
    userProgress.projects[projectId] = true;
    
    // Update UI
    const projectCard = document.getElementById(projectId);
    if (projectCard) {
        projectCard.classList.add('completed');
        
        const button = projectCard.querySelector('.btn--primary');
        if (button) {
            button.textContent = '✅ Completed!';
            button.classList.add('btn--success');
            button.classList.remove('btn--primary');
            button.disabled = true;
        }
    }
    
    // Save progress
    saveProgress();
    
    // Check for achievements
    checkAchievements();
    
    // Show celebration
    showProjectCelebration(projectId);
}

// Check and unlock achievements
function checkAchievements() {
    // First Print achievement
    if (userProgress.modules['python-basics'].completed.includes('print-code') && 
        !userProgress.achievements['first-print']) {
        unlockAchievement('first-print');
    }
    
    // Loop Master achievement
    if (userProgress.modules['loops'].progress >= 75 && 
        !userProgress.achievements['loop-master']) {
        unlockAchievement('loop-master');
    }
    
    // Function Creator achievement
    if (userProgress.modules['functions'].progress >= 50 && 
        !userProgress.achievements['function-creator']) {
        unlockAchievement('function-creator');
    }
}

// Unlock an achievement
function unlockAchievement(achievementId) {
    userProgress.achievements[achievementId] = true;
    
    // Update UI
    const achievement = document.getElementById(`achievement-${achievementId}`);
    if (achievement) {
        achievement.classList.remove('locked');
        
        // Show achievement notification
        showAchievementNotification(achievementId);
    }
    
    saveProgress();
}

// Show achievement notification
function showAchievementNotification(achievementId) {
    const achievements = {
        'first-print': { title: 'First Print!', icon: '🏆' },
        'loop-master': { title: 'Loop Master!', icon: '🔄' },
        'function-creator': { title: 'Function Creator!', icon: '⚙️' }
    };
    
    const achievement = achievements[achievementId];
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <div class="achievement-notification__content">
            <div class="achievement-notification__icon">${achievement.icon}</div>
            <div class="achievement-notification__text">
                <h4>Achievement Unlocked!</h4>
                <p>${achievement.title}</p>
            </div>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #2E86C1, #BB8FCE);
        color: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.5s ease-out;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.5s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 500);
    }, 4000);
}

// Update progress display in progress section
function updateProgressDisplay() {
    const progressItems = document.querySelectorAll('.progress-item');
    const moduleIds = ['python-basics', 'decisions', 'loops', 'data-storage', 'functions'];
    
    progressItems.forEach((item, index) => {
        if (index < moduleIds.length) {
            const moduleId = moduleIds[index];
            const progress = userProgress.modules[moduleId].progress;
            
            const progressBar = item.querySelector('.progress-bar__fill');
            const progressPercent = item.querySelector('.progress-percent');
            
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            
            if (progressPercent) {
                progressPercent.textContent = `${progress}%`;
            }
        }
    });
}

// AI Chat functionality
function setupChatInput() {
    const chatInput = document.getElementById('chat-input');
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    
    if (!chatInput || !chatMessages) return;
    
    const message = chatInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatMessage(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addChatMessage(response, 'bot');
    }, 1000);
}

function askQuickQuestion(question) {
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.value = question;
        sendMessage();
    }
}

function addChatMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = sender === 'bot' ? '🤖' : '👨‍💻';
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse(question) {
    const responses = {
        'variable': 'A variable is like a box where you store information! You create one by writing: name = "Alice". The box is called "name" and it contains "Alice"! 📦',
        'list': 'A list is like a shopping list! You create one by writing: fruits = ["apple", "banana", "orange"]. Lists help you store multiple items together! 📝',
        'function': 'A function is like a recipe! It takes ingredients (parameters) and makes something new. You create one with: def my_function(): 🍳',
        'loop': 'Loops help you repeat actions! A for loop is like saying "do this 5 times": for i in range(5): print("Hello!") 🔄',
        'if': 'If statements help your program make decisions! Like: if weather == "sunny": print("Wear sunglasses!") ☀️'
    };
    
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('variable')) {
        return responses.variable;
    } else if (lowerQuestion.includes('list')) {
        return responses.list;
    } else if (lowerQuestion.includes('function')) {
        return responses.function;
    } else if (lowerQuestion.includes('loop') || lowerQuestion.includes('repeat')) {
        return responses.loop;
    } else if (lowerQuestion.includes('if') || lowerQuestion.includes('decision')) {
        return responses.if;
    } else {
        return `Great question! 🤔 Programming is all about breaking big problems into smaller steps. Try exploring our learning modules to discover more about Python! Remember: every expert was once a beginner! 🌟`;
    }
}

// Show celebration animations
function showCelebration(element) {
    // Create celebration particles
    const colors = ['#2E86C1', '#F8C471', '#58D68D', '#F1948A', '#BB8FCE'];
    
    for (let i = 0; i < 10; i++) {
        createParticle(element, colors[Math.floor(Math.random() * colors.length)]);
    }
}

function createParticle(element, color) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: 6px;
        height: 6px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
    `;
    
    const rect = element.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;
    
    particle.style.left = startX + 'px';
    particle.style.top = startY + 'px';
    
    document.body.appendChild(particle);
    
    // Animate particle
    const angle = Math.random() * Math.PI * 2;
    const distance = 50 + Math.random() * 50;
    const endX = startX + Math.cos(angle) * distance;
    const endY = startY + Math.sin(angle) * distance;
    
    particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${endX - startX}px, ${endY - startY}px) scale(0)`, opacity: 0 }
    ], {
        duration: 800,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => {
        document.body.removeChild(particle);
    };
}

function showProjectCelebration(projectId) {
    const projectCard = document.getElementById(projectId);
    if (projectCard) {
        // Create celebration overlay
        const celebration = document.createElement('div');
        celebration.innerHTML = '🎉 Project Complete! 🎉';
        celebration.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #58D68D, #2E86C1);
            color: white;
            padding: 20px;
            border-radius: 12px;
            font-weight: bold;
            font-size: 18px;
            z-index: 100;
            animation: celebrationPop 2s ease-out;
        `;
        
        projectCard.style.position = 'relative';
        projectCard.appendChild(celebration);
        
        setTimeout(() => {
            projectCard.removeChild(celebration);
        }, 2000);
        
        // Add particles
        showCelebration(projectCard);
    }
}

// Welcome message
function showWelcomeMessage() {
    // Check if user is returning
    const isReturning = localStorage.getItem('codebot_returning_user');
    
    if (!isReturning) {
        setTimeout(() => {
            addChatMessage("Welcome to CodeBot Academy! 🎉 I'm your AI programming assistant. Click on any 'Try This Code' button to start learning Python! Ask me questions anytime - I'm here to help! 🤖", 'bot');
            localStorage.setItem('codebot_returning_user', 'true');
        }, 1000);
    } else {
        setTimeout(() => {
            addChatMessage("Welcome back to CodeBot Academy! 🌟 Ready to continue your Python adventure? I'm here if you need any help! 🐍", 'bot');
        }, 1000);
    }
}

// Click tracking for educational analytics
function setupClickTracking() {
    document.addEventListener('click', function(e) {
        const target = e.target;
        
        // Track code example views
        if (target.classList.contains('try-code-btn')) {
            console.log('📊 Code example viewed:', target.closest('.topic')?.id);
        }
        
        // Track project interactions
        if (target.textContent.includes('Mark Complete')) {
            console.log('📊 Project completed:', target.closest('.project-card')?.id);
        }
        
        // Track module navigation
        if (target.classList.contains('nav__link')) {
            console.log('📊 Section navigated:', target.getAttribute('href'));
        }
    });
}

// Local Storage functions
function saveProgress() {
    try {
        localStorage.setItem('codebot_progress', JSON.stringify(userProgress));
        console.log('💾 Progress saved successfully');
    } catch (error) {
        console.error('❌ Error saving progress:', error);
    }
}

function loadProgress() {
    try {
        const savedProgress = localStorage.getItem('codebot_progress');
        if (savedProgress) {
            const loaded = JSON.parse(savedProgress);
            userProgress = { ...userProgress, ...loaded };
            console.log('📂 Progress loaded successfully');
            
            // Apply loaded progress to UI
            applyProgressToUI();
        }
    } catch (error) {
        console.error('❌ Error loading progress:', error);
    }
}

function applyProgressToUI() {
    // Update module progress bars
    Object.keys(userProgress.modules).forEach(moduleId => {
        const module = document.getElementById(moduleId);
        if (module) {
            const progress = userProgress.modules[moduleId].progress;
            const progressBar = module.querySelector('.progress-bar__fill');
            const progressText = module.querySelector('.progress-text');
            
            if (progressBar) progressBar.style.width = `${progress}%`;
            if (progressText) progressText.textContent = `${progress}% Complete`;
        }
    });
    
    // Update completed projects
    Object.keys(userProgress.projects).forEach(projectId => {
        if (userProgress.projects[projectId]) {
            const projectCard = document.getElementById(projectId);
            if (projectCard) {
                projectCard.classList.add('completed');
                const button = projectCard.querySelector('.btn--primary');
                if (button) {
                    button.textContent = '✅ Completed!';
                    button.classList.add('btn--success');
                    button.classList.remove('btn--primary');
                    button.disabled = true;
                }
            }
        }
    });
    
    // Update achievements
    Object.keys(userProgress.achievements).forEach(achievementId => {
        if (userProgress.achievements[achievementId]) {
            const achievement = document.getElementById(`achievement-${achievementId}`);
            if (achievement) {
                achievement.classList.remove('locked');
            }
        }
    });
    
    // Update overall progress display
    updateProgressDisplay();
}

// Add CSS animations dynamically
function addAnimationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes celebrationPop {
            0% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
            100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
        }
        
        .achievement-notification {
            font-family: 'Comic Neue', 'Comic Sans MS', cursive;
        }
        
        .achievement-notification__content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .achievement-notification__icon {
            font-size: 24px;
        }
        
        .achievement-notification__text h4 {
            margin: 0 0 4px 0;
            font-size: 16px;
        }
        
        .achievement-notification__text p {
            margin: 0;
            font-size: 14px;
            opacity: 0.9;
        }
    `;
    document.head.appendChild(style);
}

// Initialize animations when DOM loads
document.addEventListener('DOMContentLoaded', addAnimationStyles);

// Export functions for global access
window.scrollToSection = scrollToSection;
window.toggleCode = toggleCode;
window.completeProject = completeProject;
window.sendMessage = sendMessage;
window.askQuickQuestion = askQuickQuestion;

// Add some fun console messages for curious kids!
console.log(`
🤖 CodeBot Academy Console 🤖
================================
Hey there, young programmer! 👋
You found the browser console - that's awesome!
This is where developers see what's happening behind the scenes.

Try these fun commands:
- console.log("Hello, World!")
- Math.random()
- new Date()

Keep exploring and stay curious! 🌟
`);

// Add easter egg for console explorers
window.secretCode = function() {
    console.log(`
    🎉 SECRET CODE ACTIVATED! 🎉
    ========================
    You're a natural explorer!
    Here's a bonus Python tip:
    
    # You can use emojis in Python comments!
    print("🐍 Python is awesome! 🚀")
    
    Keep being curious! 🌟
    `);
    
    // Unlock special achievement
    if (!userProgress.achievements['console-explorer']) {
        userProgress.achievements['console-explorer'] = true;
        showAchievementNotification('console-explorer');
        saveProgress();
    }
};

console.log("💡 Psst... try typing 'secretCode()' and press Enter for a surprise! 🎁");