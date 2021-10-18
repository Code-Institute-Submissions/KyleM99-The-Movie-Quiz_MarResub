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
})