function sendEmail() {
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    
    const subject = encodeURIComponent("Contact depuis portfolio");
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:valentin.59370@epitech.eu?subject=${subject}&body=${body}`;
}