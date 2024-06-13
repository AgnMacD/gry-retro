document.addEventListener('DOMContentLoaded', () => {
    console.log('Strona załadowana');

    // Formularz kontaktowy
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log(`Imię: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Wiadomość: ${message}`);

            alert('Dziękujemy za wiadomość!');
            contactForm.reset();
        });
    }

    // Dynamiczne ładowanie zawartości
    const loadContent = (url, container) => {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(container).innerHTML = data;
            })
            .catch(error => console.error('Error loading content:', error));
    };

    // Przykład użycia dynamicznego ładowania (jeśli masz dodatkowe pliki HTML)
    // loadContent('partials/some-content.html', '#content-container');
});