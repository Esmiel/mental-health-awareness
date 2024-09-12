// Show or hide the mental health resource details
function showResourceDetails() {
    const details = document.getElementById('resource-details');
    details.classList.toggle('hidden');
}

// Start the quiz section
function startQuiz() {
    const quizSection = document.getElementById('quiz-section');
    quizSection.classList.toggle('hidden');
}

// Handle quiz submission and show result
function submitQuiz() {
    const q1 = document.getElementById('q1').value;
    const q2 = document.getElementById('q2').value;
    let result = '';

    if (q1 === 'yes' && q2 === 'no') {
        result = 'It seems like you might be feeling stressed and having trouble sleeping. Consider talking to a professional.';
    } else if (q1 === 'no' && q2 === 'yes') {
        result = 'Great! You seem to have good mental health at the moment.';
    } else {
        result = 'It seems like there might be a mix of factors affecting your mental well-being.';
    }

    document.getElementById('quiz-result').textContent = result;
}

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent successfully! Thank you for reaching out.');
});
