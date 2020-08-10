function validate() {
    var aname = document.getElementById("aname").innerHTML;
    var pass = documnet.getElementById("pass").innerHTML;

    if (aname == "user1" && pass == "user10702") {
        alert("Welcome user1");
        return true;
    } else if (aname != "user1") {
        document.getElementById("l2").style.visibility = "hidden";
        document.getElementById("l1").style.visibility = "visible";
        return false;
    } else if (pass.value == "") {
        document.getElementById("l1").style.visibility = "hidden";
        document.getElementById("l2").style.visibility = "visible";
        return false;
    }
}
