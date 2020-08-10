function validate() {
    var email = document.getElementById("email");
    var paswd = document.getElementById("paswd");

    if (email.value.trim() == "") {
        document.getElementById("lbl2").style.visibility = "hidden";
        document.getElementById("lbl1").style.visibility = "visible";
        return false;
    } else if (paswd.value == "") {
        document.getElementById("lbl1").style.visibility = "hidden";
        document.getElementById("lbl2").style.visibility = "visible";
        return false;
    } else {
        alert("Welcome to Weddings.");
        return true;
    }
}
