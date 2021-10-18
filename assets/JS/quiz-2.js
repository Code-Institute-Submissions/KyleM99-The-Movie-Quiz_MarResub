//

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
          1: "Wade 'Parzival' Watts",
          2: "James 'Anorak' Halliday",
          3: "Samantha 'Art3mis' Cook"
        },
        correctAnswer: "1"
      },
      {
        question: "When Wade is decending the stacks, what song is playing?",
        answers: {
          1: "'Stayin' Alive' by the BeeGees",
          2: "'Jump' by Van Halen",
          3: "'You Make My Dreams' by Hall and Oates"
        },
        correctAnswer: "2"
      },
      {
        question: "When Parzival and Art3mis are ambushed in the Distracted Globe, what artifact does he use to escape?",
        answers: {
          1: "Cataclyst",
          2: "Gregarious 120",
          3: "Zemeckis Cube"
        },
        correctAnswer: "3"
      },
      {
        question: "At the battle of Castle Doom, what large heroic figure does Daito transform into?",
        answers: {
          1: "Gundam RX-78-2",
          2: "Iron Giant",
          3: "Thor"
        },
        correctAnswer: "1"
      },
      {
        question: "Which developer created the first ever easter egg in the game 'Adventure'?",
        answers: {
          1: "Greg Street",
          2: "Warren Robinett",
          3: "C. R. Evans"
        },
        correctAnswer: "2"
      },
      {
        question: "What is the relationship between Alice and Wade?",
        answers: {
          1: "Alice is not related to Wade, and fosters him for the money",
          2: "Alice is Wade's mother",
          3: "Alice is Wade's aunt"
        },
        correctAnswer: "3"
      },
      {
        question: "When Sorrento meets I-R0K after they have obtained the Orb of Osuvox, I-R0K mentions that he hates three things. What besides pirates and steampunk does I-R0K dislike?",
        answers: {
          1: "Princesses",
          2: "He only mentions two things that he hates",
          3: "Tabbouleh"
        },
        correctAnswer: "3"
      },
      {
        question: "When Wade enters Halliday's room, the young Halliday is playing which video game?",
        answers: {
          1: "Space Invaders",
          2: "Adventure",
          3: "Frogger"
        },
        correctAnswer: "1"
      },
      {
        question: "When Parzival is showing Art3mis Aech's workshop, what model space ship does he pull out?",
        answers: {
          1: "The Millennium Falcon",
          2: "Starship Voyager",
          3: "The Jupiter 2"
        },
        correctAnswer: "1"
      },
      {
        question: "What is the last thing Halliday says to Wade as he takes control of the Oasis?",
        answers: {
          1: "Keep the Oasis safe.",
          2: "Don't forget me.",
          3: "Thanks for playing my game."
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
  