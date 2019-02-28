window.onload = function () {
    var params = {
        name: $("#icon_name").val().trim(),
        email: $("#icon_email").val().trim(),
        message: $("#message").val().trim()
    }
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('gmail', 'template_UyMXqtgl', params);
        console.log('message sent');
        alert("Your email has been sent, thank you for reaching out!\nI'll be back to you as soon as possible.\n -Team");
    });
}