// scripts/quiz-system.js
class QuizManager {
  constructor() {
    this.quizzes = {
      variables: {
        question: "Create variable 'age' with value 12",
        solution: /age\s*=\s*12/,
        tests: [
          { input: "print(age)", output: "12" }
        ]
      }
    };
  }

  validate(quizId, code) {
    const quiz = this.quizzes[quizId];
    let results = [];
    
    try {
      Sk.importMainWithBody("<stdin>", false, code, true);
      quiz.tests.forEach(test => {
        const output = simulateExecution(test.input);
        results.push(output === test.output);
      });
    } catch (e) {
      return { passed: false, feedback: new AIFeedback().analyze(code, e) };
    }
    
    return { 
      passed: results.every(r => r),
      feedback: results.some(r => !r) 
        ? "Almost there! Check variable naming" 
        : "Perfect! Variable created successfully"
    };
  }
}
