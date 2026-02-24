const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");
if (form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        successMessage.textContent = "Message envoyé avec succès";
        successMessage.style.display="block";
        form.reset();
    })
}