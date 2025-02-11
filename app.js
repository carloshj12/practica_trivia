const questions = [
    {
      question: "¿Cuántos años tiene Carlos Flores?",
      options: { a: "28", b: "27", c: "29" },
      correct: "a"
    },
    {
      question: "¿Cuál es su color favorito?",
      options: { a: "Azul", b: "Negro", c: "Gris" },
      correct: "c"
    },
    {
      question: "¿Donde nació?",
      options: { a: "Morelia", b: "CDMX", c: "Lázaro Cárdenas" },
      correct: "c"
    }
  ];
  
  let currentQuestionIndex = 0;
  let timerInterval;
  
  function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
      document.getElementById("result-message").innerText = "¡Trivia terminada!";
      document.querySelector(".trivia-container").classList.add("hidden");
      return;
    }

    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    document.getElementById("option-a").innerText = "a. " + question.options.a;
    document.getElementById("option-b").innerText = "b. " + question.options.b;
    document.getElementById("option-c").innerText = "c. " + question.options.c;
    document.getElementById("result-message").innerText = "";
    startTimer();
  }
  
  function checkAnswer(answer) {
    clearInterval(timerInterval);
    if (answer === questions[currentQuestionIndex].correct) {
      document.getElementById("result-message").innerText = "¡Correcto!";
    } else {
      document.getElementById("result-message").innerText = "¡Incorrecto!";
    }
    currentQuestionIndex++;
    setTimeout(loadQuestion, 2000);
  }
  
  function startTimer() {
    let width = 100;
    const progressBar = document.getElementById("timer-progress");
    progressBar.style.width = "100%";
    
    timerInterval = setInterval(() => {
      width -= 1.67;
      progressBar.style.width = width + "%";
      if (width <= 0) {
        clearInterval(timerInterval);
        currentQuestionIndex++;
        loadQuestion();
      }
    }, 100);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("option-a").addEventListener("click", () => checkAnswer('a'));
    document.getElementById("option-b").addEventListener("click", () => checkAnswer('b'));
    document.getElementById("option-c").addEventListener("click", () => checkAnswer('c'));
    document.getElementById("start-trivia").addEventListener("click", () => {
      document.querySelector(".trivia-container").classList.remove("hidden");
      document.querySelector(".start-button").remove();
      currentQuestionIndex = 0;
      loadQuestion();
    });
  });