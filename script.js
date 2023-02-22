
const validateEmail = (inputText) => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat)){
        // alert("Valid email address!");
        
        document.form.email.focus();
    return true;
}else{
    // alert("You have entered an invalid email address!");
    let email_exp = document.querySelector(".email-exp");
    let email_border = document.querySelector(".first-elm");
        email_border.style.borderColor = "red";
        email_exp.innerHTML = "Please provide a valid email address";
        document.form.text.focus();
        return false;
    }
}