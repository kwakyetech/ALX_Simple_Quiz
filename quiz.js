const checkAnswer = () => {
    const correctAnswer = "4"; // Define the correct answer for the quiz question
    const userAnswer = document.querySelector('input[name="quiz"]:checked');

    const userAnswerValue = userAnswer.value; // Get the value of the selected answer

    // Get the feedback element to display the result
    const feedback = document.getElementById('feedback');


    if (userAnswerValue == correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect. Please try again.";
        feedback.style.color = "red";
    }
    document.querySelector('input[name="quiz"]:checked') = ''; // Clear the input field
}

const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);