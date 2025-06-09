// scripts/ai-feedback.js
class AIFeedback {
  constructor() {
    this.rules = {
      syntax: {
        pattern: /(SyntaxError|IndentationError)/,
        message: "Check line {line} for missing colons or indentation issues"
      },
      loop: {
        pattern: /(for|while)/,
        suggestion: "Remember to update your loop variable each iteration"
      }
    };
  }

  analyze(code, error) {
    let feedback = [];
    
    // Syntax analysis
    for(let [category, rule] of Object.entries(this.rules)) {
      if(rule.pattern.test(error)) {
        const line = code.split('\n').findIndex(l => rule.pattern.test(l)) + 1;
        feedback.push(rule.message.replace('{line}', line));
      }
    }
    
    return feedback.length > 0 ? feedback : ["Great effort! Try reviewing variable names and indentation"];
  }
}
