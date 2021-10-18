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
        question: "Who is the main character in the movie?",
        answers: {
          1: "Lester 'Worm' Murphy",
          2: "Teddy KGB",
          3: "Mike McDermott"
        },
        correctAnswer: "3"
      },
      {
        question: "What is the primary game that is played?",
        answers: {
          1: "Seven Card Stud",
          2: "No-Limit Texas Hold'em",
          3: "Blackjack"
        },
        correctAnswer: "2"
      },
      {
        question: "Where did Worm and Mike meet?",
        answers: {
          1: "Worked at McDonalds together",
          2: "New York University",
          3: "Dwight Englewood Preparatory Academy"
        },
        correctAnswer: "3"
      },
      {
        question: "What are the initials following Teddy's name?",
        answers: {
          1: "FBI",
          2: "MI6",
          3: "KGB"
        },
        correctAnswer: "3"
      },
      {
        question: "How did worm end up in prison?",
        answers: {
          1: "Distributing fake credit cards",
          2: "Making counterfeit money",
          3: "Robbing a bank"
        },
        correctAnswer: "1"
      },
      {
        question: "What is the casino Mike first thinks about while pretending to make a call during the first game with Teddy?",
        answers: {
          1: "Bellagio",
          2: "MGM Grand",
          3: "The Mirage"
        },
        correctAnswer: "3"
      },
      {
        question: "Where does Mike hide his money?",
        answers: {
          1: "Sock Drawer",
          2: "In a book called 'Super System'",
          3: "In the basement"
        },
        correctAnswer: "2"
      },
      {
        question: "During the very first game, how much money did Mike stake?",
        answers: {
          1: "$30,000",
          2: "$10,000",
          3: "$15,500"
        },
        correctAnswer: "1"
      },
      {
        question: "What town do Mike and Worm play a municipal workers game in?",
        answers: {
          1: "Binghamton",
          2: "Queens",
          3: "Staten Island"
        },
        correctAnswer: "1"
      },
      {
        question: "What game was Worm playing in prison before he was released?",
        answers: {
          1: "No-Limit Hold'em",
          2: "Spades",
          3: "Hearts"
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
  
