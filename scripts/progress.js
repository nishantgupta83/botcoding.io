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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  progressManager.init();
  progressManager.updateProgressUI();
});
