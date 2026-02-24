function Validate(){

    if(document.myForm.username.value == ""){
        alert("Please enter Username! 🙏");
        document.myForm.username.focus();

        return false;

    } else if(document.myForm.password.value == ""){
        alert("Please enter Password! 🛂");
        document.myForm.password.focus();
        
        return false;

    } else {
        
        return true;

    }
}
