const progressManager = {
  init() {
    this.progress = JSON.parse(localStorage.getItem('codingProgress')) || {};
  },
  
  completeLesson(lessonId) {
    this.progress[lessonId] = true;
    localStorage.setItem('codingProgress', JSON.stringify(this.progress));
    this.updateProgressUI();
  },

  updateProgressUI() {
    document.querySelectorAll('.lesson-card').forEach(card => {
      const lessonId = card.dataset.lesson;
      if(this.progress[lessonId]) {
        card.classList.add('completed');
      }
    });
  }
};
// scripts/progress-tracker.js
window.lessonProgress = {
  completed: JSON.parse(localStorage.getItem('completedLessons')) || {},
  
  update(lessonId, status) {
    this.completed[lessonId] = status;
    localStorage.setItem('completedLessons', JSON.stringify(this.completed));
  },
  
  getBadges() {
    return Object.keys(this.completed).filter(k => this.completed[k]);
  }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  progressManager.init();
  progressManager.updateProgressUI();
});
