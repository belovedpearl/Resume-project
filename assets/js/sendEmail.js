function sendMail(contactForm){
    emailjs.send("service_v2zk4yh","template_8wjhfc6", {
        name: contactForm.name.value,
        email: contactForm.emailaddress.value,
        project_request: contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log("SUCCESS", response)
        },
        function(error){
            console.log("FAILED", error)
        }
    );
}