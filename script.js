document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const response = document.getElementById('response');
    response.textContent = `Danke, ${name}! Wir haben Ihre Nachricht erhalten und werden uns bald bei Ihnen melden.`;

    // Reset form fields
    document.getElementById('contactForm').reset();
});
