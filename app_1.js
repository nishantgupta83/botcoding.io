// Application Data
const appData = {
  modules: [
    {
      title: "Python Basics",
      progress: 80,
      topics: ["Print Statements", "Comments", "Variables", "Data Types"]
    },
    {
      title: "Making Decisions", 
      progress: 60,
      topics: ["Boolean Logic", "If Statements", "Comparison Operators", "Logical Operators"]
    },
    {
      title: "Repeating Actions",
      progress: 40, 
      topics: ["For Loops", "While Loops", "Break/Continue", "Nested Loops"]
    },
    {
      title: "Storing Data",
      progress: 20,
      topics: ["Lists", "Dictionaries", "Strings", "Tuples"]
    },
    {
      title: "Creating Functions",
      progress: 0,
      topics: ["Function Definition", "Parameters", "Return Values", "Scope"]
    }
  ],
  projects: [
    {
      title: "Hello World Art",
      difficulty: "Beginner",
      time: "30 minutes",
      icon: "🎨",
      unlocked: true,
      steps: [
        {
          title: "Step 1: Basic Print Statement",
          description: "Let's start by printing a simple message",
          code: "print('Hello, World!')",
          explanation: "The print() function displays text on the screen"
        },
        {
          title: "Step 2: Add Colors with Text",
          description: "Now let's make it more colorful with ASCII art",
          code: "print('🌟 Hello, World! 🌟')\nprint('Welcome to Python!')",
          explanation: "We can add emojis and multiple lines to make it look better"
        },
        {
          title: "Step 3: Create Your Own Art",
          description: "Design your own ASCII art message",
          code: "print('*' * 20)\nprint('*   HELLO PYTHON   *')\nprint('*' * 20)",
          explanation: "Use symbols and repetition to create patterns"
        }
      ]
    },
    {
      title: "Magic 8 Ball",
      difficulty: "Beginner", 
      time: "45 minutes",
      icon: "🎱",
      unlocked: true,
      steps: [
        {
          title: "Step 1: Import Random",
          description: "We need the random module to pick answers",
          code: "import random",
          explanation: "The random module helps us pick random things"
        },
        {
          title: "Step 2: Create Answer List",
          description: "Make a list of possible Magic 8 Ball answers",
          code: "answers = ['Yes', 'No', 'Maybe', 'Ask again later']",
          explanation: "Lists store multiple items we can choose from"
        },
        {
          title: "Step 3: Pick Random Answer",
          description: "Use random.choice to pick an answer",
          code: "question = input('Ask a question: ')\nprint(random.choice(answers))",
          explanation: "random.choice picks one item randomly from our list"
        }
      ]
    },
    {
      title: "Pet Age Calculator",
      difficulty: "Beginner",
      time: "35 minutes", 
      icon: "🐕",
      unlocked: true,
      steps: [
        {
          title: "Step 1: Get User Input",
          description: "Ask for the pet's age and type",
          code: "pet_age = int(input('How old is your pet? '))\npet_type = input('What type of pet? (dog/cat) ')",
          explanation: "We convert the age to a number using int()"
        },
        {
          title: "Step 2: Calculate Human Years",
          description: "Use different formulas for dogs and cats",
          code: "if pet_type == 'dog':\n    human_age = pet_age * 7\nelse:\n    human_age = pet_age * 5",
          explanation: "Dogs age 7 years for every human year, cats age 5"
        },
        {
          title: "Step 3: Show the Result",
          description: "Display the calculated age",
          code: "print(f'Your {pet_type} is {human_age} in human years!')",
          explanation: "f-strings let us put variables inside text"
        }
      ]
    },
    {
      title: "Password Generator",
      difficulty: "Intermediate",
      time: "60 minutes",
      icon: "🔐",
      unlocked: false,
      steps: [
        {
          title: "Step 1: Import Modules",
          description: "Import random and string modules",
          code: "import random\nimport string",
          explanation: "string module gives us letters and numbers to use"
        },
        {
          title: "Step 2: Create Character Sets",
          description: "Define what characters to include",
          code: "letters = string.ascii_letters\nnumbers = string.digits\nsymbols = '!@#$%'",
          explanation: "We combine different types of characters"
        },
        {
          title: "Step 3: Generate Password",
          description: "Create a random password",
          code: "all_chars = letters + numbers + symbols\npassword = ''.join(random.choice(all_chars) for i in range(8))\nprint(f'Your password: {password}')",
          explanation: "We pick 8 random characters and join them together"
        }
      ]
    },
    {
      title: "Rock Paper Scissors",
      difficulty: "Intermediate",
      time: "75 minutes",
      icon: "✂️",
      unlocked: false,
      steps: [
        {
          title: "Step 1: Setup Game Options",
          description: "Create the game choices",
          code: "import random\nchoices = ['rock', 'paper', 'scissors']\nprint('Welcome to Rock Paper Scissors!')",
          explanation: "We store the three game options in a list"
        },
        {
          title: "Step 2: Get Player Choice",
          description: "Ask player what they choose",
          code: "player = input('Choose rock, paper, or scissors: ').lower()\ncomputer = random.choice(choices)\nprint(f'Computer chose: {computer}')",
          explanation: ".lower() makes input lowercase so 'Rock' becomes 'rock'"
        },
        {
          title: "Step 3: Determine Winner",
          description: "Compare choices and declare winner",
          code: "if player == computer:\n    print('Tie!')\nelif (player == 'rock' and computer == 'scissors') or (player == 'paper' and computer == 'rock') or (player == 'scissors' and computer == 'paper'):\n    print('You win!')\nelse:\n    print('Computer wins!')",
          explanation: "We check all winning combinations for the player"
        }
      ]
    }
  ],
  achievements: [
    {name: "First Steps", description: "Complete your first lesson", icon: "👣"},
    {name: "Code Warrior", description: "Complete 5 projects", icon: "⚔️"},
    {name: "Python Master", description: "Complete all modules", icon: "🏆"}
  ]
};

// Session-based progress tracking (since localStorage is not available)
class ProgressTracker {
  constructor() {
    this.progress = {
      modules: {},
      projects: {},
      achievements: [],
      completedLessons: 0,
      completedProjects: 0
    };
    this.initializeProgress();
  }

  initializeProgress() {
    // Initialize module progress from data
    appData.modules.forEach((module, index) => {
      this.progress.modules[index] = {
        completed: module.progress === 100,
        progress: module.progress
      };
    });

    // Initialize project progress
    appData.projects.forEach((project, index) => {
      this.progress.projects[index] = {
        currentStep: 0,
        completed: false,
        stepsCompleted: []
      };
    });

    this.updateProjectUnlocks();
    this.updateStats();
  }

  completeStep(projectIndex, stepIndex) {
    if (!this.progress.projects[projectIndex].stepsCompleted.includes(stepIndex)) {
      this.progress.projects[projectIndex].stepsCompleted.push(stepIndex);
    }
    
    const project = appData.projects[projectIndex];
    if (this.progress.projects[projectIndex].stepsCompleted.length === project.steps.length) {
      this.progress.projects[projectIndex].completed = true;
      this.checkAchievements();
      this.updateProjectUnlocks();
    }
    
    this.updateStats();
  }

  updateModuleProgress(moduleIndex, progress) {
    this.progress.modules[moduleIndex].progress = progress;
    if (progress === 100) {
      this.progress.modules[moduleIndex].completed = true;
    }
    this.updateProjectUnlocks();
    this.updateStats();
  }

  updateProjectUnlocks() {
    const completedProjects = Object.values(this.progress.projects).filter(p => p.completed).length;
    
    // Unlock intermediate projects after completing 2 beginner projects
    appData.projects.forEach((project, index) => {
      if (project.difficulty === "Intermediate") {
        project.unlocked = completedProjects >= 2;
      }
    });
  }

  checkAchievements() {
    const completedProjects = Object.values(this.progress.projects).filter(p => p.completed).length;
    
    if (completedProjects >= 1 && !this.progress.achievements.includes(0)) {
      this.progress.achievements.push(0);
      this.showAchievementNotification(appData.achievements[0]);
    }
    
    if (completedProjects >= 5 && !this.progress.achievements.includes(1)) {
      this.progress.achievements.push(1);
      this.showAchievementNotification(appData.achievements[1]);
    }
    
    const completedModules = Object.values(this.progress.modules).filter(m => m.completed).length;
    if (completedModules === appData.modules.length && !this.progress.achievements.includes(2)) {
      this.progress.achievements.push(2);
      this.showAchievementNotification(appData.achievements[2]);
    }
  }

  showAchievementNotification(achievement) {
    // Simple achievement notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed; top: 20px; right: 20px; background: var(--color-success);
      color: white; padding: 16px; border-radius: 8px; z-index: 1001;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15); animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
      <strong>🏆 Achievement Unlocked!</strong><br>
      ${achievement.icon} ${achievement.name}
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 3000);
  }

  updateStats() {
    const completedLessons = Object.values(this.progress.modules).filter(m => m.completed).length;
    const completedProjects = Object.values(this.progress.projects).filter(p => p.completed).length;
    const totalProgress = Math.round(
      (Object.values(this.progress.modules).reduce((sum, m) => sum + m.progress, 0) / 
       (appData.modules.length * 100)) * 100
    );

    document.getElementById('completed-lessons').textContent = completedLessons;
    document.getElementById('completed-projects').textContent = completedProjects;
    document.getElementById('total-progress').textContent = `${totalProgress}%`;

    this.progress.completedLessons = completedLessons;
    this.progress.completedProjects = completedProjects;
  }
}

// Global progress tracker
const progressTracker = new ProgressTracker();

// Tab Navigation
function initTabNavigation() {
  const tabButtons = document.querySelectorAll('.nav__link');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      // Update active states
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      button.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
      
      // Load content for specific tabs
      if (targetTab === 'learn') renderModules();
      if (targetTab === 'projects') renderProjects();
      if (targetTab === 'progress') renderProgress();
    });
  });
}

// Render Modules
function renderModules() {
  const container = document.getElementById('modules-grid');
  container.innerHTML = '';

  appData.modules.forEach((module, index) => {
    const progress = progressTracker.progress.modules[index]?.progress || module.progress;
    const moduleCard = document.createElement('div');
    moduleCard.className = 'module-card';
    moduleCard.innerHTML = `
      <div class="module-header">
        <h3 class="module-title">${module.title}</h3>
        <span class="status ${progress === 100 ? 'status--success' : 'status--info'}">${progress}%</span>
      </div>
      <div class="module-progress">
        <div class="module-progress-fill" style="width: ${progress}%"></div>
      </div>
      <ul class="module-topics">
        ${module.topics.map(topic => `<li>📖 ${topic}</li>`).join('')}
      </ul>
    `;
    
    moduleCard.addEventListener('click', () => {
      simulateModuleProgress(index);
    });
    
    container.appendChild(moduleCard);
  });
}

// Simulate module progress when clicked
function simulateModuleProgress(moduleIndex) {
  const currentProgress = progressTracker.progress.modules[moduleIndex].progress;
  const newProgress = Math.min(currentProgress + 20, 100);
  progressTracker.updateModuleProgress(moduleIndex, newProgress);
  renderModules();
  renderProjects(); // Re-render projects to update unlocks
}

// Render Projects
function renderProjects() {
  const container = document.getElementById('projects-grid');
  container.innerHTML = '';

  appData.projects.forEach((project, index) => {
    const projectProgress = progressTracker.progress.projects[index];
    const completedSteps = projectProgress.stepsCompleted.length;
    const totalSteps = project.steps.length;
    const isUnlocked = project.unlocked;
    
    const projectCard = document.createElement('div');
    projectCard.className = `project-card ${!isUnlocked ? 'locked' : ''}`;
    projectCard.innerHTML = `
      <span class="project-icon">${isUnlocked ? project.icon : '🔒'}</span>
      <h3 class="project-title">${project.title}</h3>
      <div class="project-meta">
        <span class="project-difficulty ${project.difficulty.toLowerCase()}">${project.difficulty}</span>
        <span>⏱️ ${project.time}</span>
      </div>
      ${isUnlocked ? `
        <div class="project-progress">
          <div class="project-progress-fill" style="width: ${(completedSteps / totalSteps) * 100}%"></div>
        </div>
        <div style="text-align: center; margin-top: 12px; font-size: 14px; color: var(--color-text-secondary);">
          ${completedSteps}/${totalSteps} steps completed
        </div>
      ` : `
        <div style="text-align: center; margin-top: 12px; font-size: 14px; color: var(--color-text-secondary);">
          Complete 2 beginner projects to unlock
        </div>
      `}
    `;
    
    if (isUnlocked) {
      projectCard.addEventListener('click', () => {
        openProjectModal(index);
      });
    }
    
    container.appendChild(projectCard);
  });
}

// Project Modal Management
let currentProject = null;
let currentStep = 0;

function openProjectModal(projectIndex) {
  currentProject = projectIndex;
  currentStep = progressTracker.progress.projects[projectIndex].currentStep || 0;
  
  const project = appData.projects[projectIndex];
  const modal = document.getElementById('project-modal');
  
  document.getElementById('modal-project-title').textContent = project.title;
  document.getElementById('modal-difficulty').textContent = project.difficulty;
  document.getElementById('modal-difficulty').className = `project-difficulty ${project.difficulty.toLowerCase()}`;
  document.getElementById('modal-time').textContent = `⏱️ ${project.time}`;
  
  renderStepIndicator();
  renderCurrentStep();
  updateStepNavigation();
  
  modal.classList.add('active');
}

function closeProjectModal() {
  document.getElementById('project-modal').classList.remove('active');
  currentProject = null;
  currentStep = 0;
}

function renderStepIndicator() {
  const project = appData.projects[currentProject];
  const indicator = document.getElementById('step-indicator');
  const completedSteps = progressTracker.progress.projects[currentProject].stepsCompleted;
  
  indicator.innerHTML = '';
  project.steps.forEach((step, index) => {
    const dot = document.createElement('div');
    dot.className = 'step-dot';
    
    if (completedSteps.includes(index)) {
      dot.classList.add('completed');
    } else if (index === currentStep) {
      dot.classList.add('active');
    }
    
    indicator.appendChild(dot);
  });
}

function renderCurrentStep() {
  const project = appData.projects[currentProject];
  const step = project.steps[currentStep];
  const container = document.getElementById('step-content');
  
  container.innerHTML = `
    <h4 class="step-title">${step.title}</h4>
    <p class="step-description">${step.description}</p>
    <div class="code-block">
      <div class="code-header">
        <span>Python Code</span>
        <button class="btn btn--sm" onclick="runStepCode()">▶ Run Code</button>
      </div>
      <div class="code-content">${highlightPythonSyntax(step.code)}</div>
    </div>
    <div class="code-output">
      <div class="output-header">Output</div>
      <pre class="output-content" id="step-output">Click 'Run Code' to see the output!</pre>
    </div>
    <div class="step-explanation">
      <h4>💡 What's happening?</h4>
      <p>${step.explanation}</p>
    </div>
  `;
}

function highlightPythonSyntax(code) {
  return code
    .split('\n')
    .map((line, index) => {
      let highlightedLine = line
        .replace(/\b(import|from|def|class|if|elif|else|for|while|try|except|finally|with|as|return|break|continue|pass|and|or|not|in|is|True|False|None)\b/g, '<span class="keyword">$1</span>')
        .replace(/(['"])(.*?)\1/g, '<span class="string">$1$2$1</span>')
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
        .replace(/(#.*$)/g, '<span class="comment">$1</span>')
        .replace(/\b(print|input|len|range|str|int|float|list|dict)\b/g, '<span class="function">$1</span>');
      
      return `<span class="code-line" data-line="${index + 1}">${highlightedLine}</span>`;
    })
    .join('\n');
}

// IMPROVED: Fixed code execution to be more reliable
function runStepCode() {
  const outputElement = document.getElementById('step-output');
  const project = appData.projects[currentProject];
  const step = project.steps[currentStep];
  
  // Show loading state
  outputElement.textContent = 'Running code...';
  outputElement.style.color = '#ffaa00';
  
  // Simulate code execution delay for better UX
  setTimeout(() => {
    const output = simulateCodeExecution(step.code);
    outputElement.textContent = output;
    outputElement.style.color = '#00ff00';
    
    // Mark step as completed
    progressTracker.completeStep(currentProject, currentStep);
    renderStepIndicator();
    
    // Show success feedback
    setTimeout(() => {
      outputElement.style.color = '#00ff00';
    }, 100);
  }, 500);
}

function simulateCodeExecution(code) {
  // Simple simulation of Python code execution with consistent results
  if (code.includes("print('Hello, World!')")) {
    return "Hello, World!";
  } else if (code.includes("print('🌟 Hello, World! 🌟')")) {
    return "🌟 Hello, World! 🌟\nWelcome to Python!";
  } else if (code.includes("print('*' * 20)")) {
    return "********************\n*   HELLO PYTHON   *\n********************";
  } else if (code.includes("import random") && !code.includes("choice")) {
    return "✅ Random module imported successfully!";
  } else if (code.includes("answers = ")) {
    return "✅ Magic 8 Ball answers list created!\n['Yes', 'No', 'Maybe', 'Ask again later']";
  } else if (code.includes("random.choice(answers)")) {
    const answers = ['Yes', 'No', 'Maybe', 'Ask again later'];
    const chosen = answers[Math.floor(Math.random() * answers.length)];
    return `Ask a question: Will I become a great programmer?\n🎱 ${chosen}`;
  } else if (code.includes("pet_age = int") && code.includes("pet_type = input")) {
    return "How old is your pet? 5\nWhat type of pet? (dog/cat) dog\n✅ Input received!";
  } else if (code.includes("human_age = pet_age")) {
    return "✅ Age calculation complete!\nDog: 5 years = 35 human years\nCat: 5 years = 25 human years";
  } else if (code.includes("f'Your {pet_type}")) {
    return "Your dog is 35 in human years! 🐕";
  } else if (code.includes("import string")) {
    return "✅ String and random modules imported!\nReady to generate passwords!";
  } else if (code.includes("letters = string.ascii_letters")) {
    return "✅ Character sets created!\nLetters: abcABC...\nNumbers: 0123456789\nSymbols: !@#$%";
  } else if (code.includes("password =")) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%';
    let password = '';
    for (let i = 0; i < 8; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `Your password: ${password}\n🔐 Strong password generated!`;
  } else if (code.includes("choices = ['rock'")) {
    return "Welcome to Rock Paper Scissors!\n✅ Game setup complete!";
  } else if (code.includes("player = input")) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return `Choose rock, paper, or scissors: rock\nComputer chose: ${computerChoice}`;
  } else if (code.includes("if player == computer")) {
    const outcomes = ['You win! 🎉', 'Computer wins! 🤖', 'It\'s a tie! 🤝'];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
  }
  
  return "✅ Code executed successfully!";
}

function nextStep() {
  const project = appData.projects[currentProject];
  if (currentStep < project.steps.length - 1) {
    currentStep++;
    renderStepIndicator();
    renderCurrentStep();
    updateStepNavigation();
    
    // Update progress
    progressTracker.progress.projects[currentProject].currentStep = currentStep;
  } else {
    // Project completed
    progressTracker.progress.projects[currentProject].completed = true;
    progressTracker.checkAchievements();
    closeProjectModal();
    renderProjects();
  }
}

function previousStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStepIndicator();
    renderCurrentStep();
    updateStepNavigation();
    
    progressTracker.progress.projects[currentProject].currentStep = currentStep;
  }
}

function updateStepNavigation() {
  const project = appData.projects[currentProject];
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  
  prevBtn.disabled = currentStep === 0;
  
  if (currentStep === project.steps.length - 1) {
    nextBtn.textContent = 'Complete Project 🎉';
  } else {
    nextBtn.textContent = 'Next Step';
  }
}

// Progress Tab
function renderProgress() {
  renderModuleProgress();
  renderProjectProgress();
}

function renderModuleProgress() {
  const container = document.getElementById('module-progress-list');
  container.innerHTML = '';

  appData.modules.forEach((module, index) => {
    const progress = progressTracker.progress.modules[index]?.progress || module.progress;
    const item = document.createElement('div');
    item.className = 'progress-item';
    item.innerHTML = `
      <h4>${module.title}</h4>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${progress}%"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

function renderProjectProgress() {
  const container = document.getElementById('project-progress-list');
  container.innerHTML = '';

  appData.projects.forEach((project, index) => {
    const projectProgress = progressTracker.progress.projects[index];
    const completedSteps = projectProgress.stepsCompleted.length;
    const totalSteps = project.steps.length;
    const percentage = Math.round((completedSteps / totalSteps) * 100);
    
    const item = document.createElement('div');
    item.className = 'progress-item';
    item.innerHTML = `
      <h4>${project.unlocked ? project.icon : '🔒'} ${project.title}</h4>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${percentage}%"></div>
      </div>
    `;
    container.appendChild(item);
  });
}

// Achievements
function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  container.innerHTML = '';

  appData.achievements.forEach((achievement, index) => {
    const earned = progressTracker.progress.achievements.includes(index);
    const card = document.createElement('div');
    card.className = `achievement-card ${earned ? 'earned' : ''}`;
    card.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-name">${achievement.name}</div>
      <div class="achievement-desc">${achievement.description}</div>
    `;
    container.appendChild(card);
  });
}

// Challenge Modal
function showChallenge() {
  document.getElementById('challenge-modal').classList.add('active');
}

function closeChallengeModal() {
  document.getElementById('challenge-modal').classList.remove('active');
}

function runChallengeCode() {
  const code = document.getElementById('challenge-code').value;
  const outputElement = document.getElementById('challenge-output');
  
  outputElement.textContent = 'Running your code...';
  outputElement.style.color = '#ffaa00';
  
  setTimeout(() => {
    const output = simulateChallengeCode(code);
    outputElement.textContent = output;
    outputElement.style.color = '#00ff00';
  }, 300);
}

function simulateChallengeCode(code) {
  if (code.trim() === '') {
    return 'Please write some code first!';
  }
  
  if (code.includes('for') && code.includes('print') && code.includes('name')) {
    return `P\nPy\nPyt\nPyth\nPytho\nPython\n\n🎉 Amazing pattern! You're getting the hang of loops!`;
  } else if (code.includes('for') && code.includes('print')) {
    return `*\n**\n***\n****\n*****\n\n👏 Great job using loops to create patterns!`;
  } else if (code.includes('print') && code.includes('name')) {
    return 'Python Programmer\n\n✨ Nice! Try using a loop to make it more interesting.';
  } else if (code.includes('print')) {
    return 'Hello World!\n\n👍 Good start! Try adding your name and using a loop.';
  } else {
    return '✅ Code executed! Try adding some print statements to see output.';
  }
}

// Initialize Application
function initApp() {
  initTabNavigation();
  renderAchievements();
  renderModules();
  renderProjects();
  
  // Close modals when clicking outside
  document.getElementById('project-modal').addEventListener('click', (e) => {
    if (e.target.id === 'project-modal') {
      closeProjectModal();
    }
  });
  
  document.getElementById('challenge-modal').addEventListener('click', (e) => {
    if (e.target.id === 'challenge-modal') {
      closeChallengeModal();
    }
  });
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProjectModal();
      closeChallengeModal();
    }
  });
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}