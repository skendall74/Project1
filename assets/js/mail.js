//Firebase
var config = {
    apiKey: "AIzaSyDBrHeD7JWQuVsRB3Zwrpi4qrahZ7Gbzks",
    authDomain: "contact-1a402.firebaseapp.com",
    databaseURL: "https://contact-1a402.firebaseio.com",
    projectId: "contact-1a402",
    storageBucket: "contact-1a402.appspot.com",
    messagingSenderId: "1000516393964"
};
// Initialize Firebase
firebase.initializeApp(config);
var dataRef = firebase.database();
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'template_UyMXqtgl', this);
        var params = {
            name: $("#icon_name").val().trim(),
            email: $("#icon_email").val().trim(),
            message: $("#message").val().trim()
        }
        // Submit to firebase
        dataRef.ref().push({
            ...params,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
        alert("Your email has been sent, thank you for reaching out!\nI'll be back to you as soon as possible.\n -Team");
    });
}