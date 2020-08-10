function validate() {
    var aname = document.getElementById("aname");
    var pass = documnet.getElementById("pass");

    if (aname.value.trim() == "") {
        document.getElementById("l2").style.visibility = "hidden";
        document.getElementById("l1").style.visibility = "visible";
        return false;
    } else if (pass.value == "") {
        document.getElementById("l1").style.visibility = "hidden";
        document.getElementById("l2").style.visibility = "visible";
        return false;
    } else {
        alert("Welcome to Weddings.");
        return true;
    }
}
