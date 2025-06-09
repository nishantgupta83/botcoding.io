document.querySelectorAll('.run-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const codeBlock = e.target.previousElementSibling;
    const outputDiv = e.target.nextElementSibling;
    
    try {
      const code = new Function(codeBlock.textContent);
      const result = code();
      outputDiv.textContent = result || 'Code executed successfully!';
    } catch (error) {
      outputDiv.textContent = `Error: ${error.message}`;
    }
  });
});
