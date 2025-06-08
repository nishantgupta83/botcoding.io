const progressTracker = {
  init() {
    this.state = JSON.parse(localStorage.getItem('codingProgress') || '{}');
  },

  saveProgress(module, step) {
    this.state[module] = Math.max(step, this.state[module] || 0);
    localStorage.setItem('codingProgress', JSON.stringify(this.state));
    this.updateBadges();
  },

  updateBadges() {
    document.querySelectorAll('[data-module]').forEach(badge => {
      if(this.state[badge.dataset.module] >= badge.dataset.requiredStep) {
        badge.classList.add('unlocked');
      }
    });
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  progressTracker.init();
  progressTracker.updateBadges();
});
