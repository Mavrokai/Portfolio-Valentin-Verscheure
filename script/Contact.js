emailjs.init("l_ce7qtvjadGdWq3w");

function sendEmail() {
    const params = {
        from_name: document.querySelector('[name="name"]').value,
        reply_to: document.querySelector('[name="email"]').value,
        message: document.querySelector('[name="message"]').value
    };

    emailjs.send("service_lmf8hyk", "template_cxqeb2u", params)
        .then(() => {
            alert("Message envoyé !");
            document.getElementById("contactForm").reset();
        }, (err) => {
            alert("Erreur: " + JSON.stringify(err));
        });
}