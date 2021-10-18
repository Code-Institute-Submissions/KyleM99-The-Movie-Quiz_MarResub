// 

(function() {
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
            const answerContainer = answerContainers[question];
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



    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
})