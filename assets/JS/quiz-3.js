//I got help with this code from Sitepoint as JS in the LMS was very confusing for me

(function(){
    // Functions
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
          const answers = [];
          for(letter in currentQuestion.answers){
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
      const answerContainers = quizContainer.querySelectorAll('.answers');
      let numCorrect = 0;
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){
          numCorrect++;
          answerContainers[questionNumber].style.color = 'green';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What year was the movie released?",
        answers: {
          1: "1986",
          2: "1988",
          3: "1990"
        },
        correctAnswer: "1"
      },
      {
        question: "Which grade is Ferris in?",
        answers: {
          1: "10th",
          2: "11th",
          3: "12th"
        },
        correctAnswer: "3"
      },
      {
        question: "Which city does the movie take place?",
        answers: {
          1: "Manhattan",
          2: "Chicago",
          3: "New York"
        },
        correctAnswer: "2"
      },
      {
        question: "What is the name of Ferris' sister?",
        answers: {
          1: "Maggie",
          2: "Jackie",
          3: "Jeannie"
        },
        correctAnswer: "3"
      },
      {
        question: "What is the name of Ferri's best friend?",
        answers: {
          1: "Cameron",
          2: "Jack",
          3: "Alan"
        },
        correctAnswer: "1"
      },
      {
        question: "How do Ferris and Cameron get Sloane out of school?",
        answers: {
          1: "She calls in sick",
          2: "Doctor's Note",
          3: "Pretend her grandmother has died"
        },
        correctAnswer: "3"
      },
      {
        question: "When they are Downtown, what does Ferris impulsively jump in on?",
        answers: {
          1: "A Flashmob",
          2: "The Von Steuben Day Parade",
          3: "A bouncy castle full of kids"
        },
        correctAnswer: "2"
      },
      {
        question: "Who is Ferris Beuller's girlfriend?",
        answers: {
          1: "Patty",
          2: "Maggie",
          3: "Sloane"
        },
        correctAnswer: "3"
      },
      {
        question: "Who owns the car that they take on his day off?",
        answers: {
          1: "Sloane's brother",
          2: "Cameron's Dad",
          3: "Ferri's Dad"
        },
        correctAnswer: "2"
      },
      {
        question: "When the school found out about Ferri's illness, what campaign did they start?",
        answers: {
          1: "Ferris Bueller Foundation",
          2: "Healthy Students Campaign",
          3: "Save Ferris Campaign"
        },
        correctAnswer: "3"
      },
    ];
  
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  
