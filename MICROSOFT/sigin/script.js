function checkfirstname(){
    let user = document.getElementById("fist-name")
    if(user == ""){
        document.getElementById("msg").innerText = "Enter Name"
        user.classList.add("error");
        user.focus()
    }
    return false
}

