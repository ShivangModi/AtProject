function validateLogin() {
    var email = document.forms["form1"]["email"].value;
    var paswd = document.forms["form1"]["paswd"].value;

    if (email == "") {
        document.getElementById("lbl2").style.visibility = "hidden";
        document.getElementById("lbl1").style.visibility = "visible";
        return false;
    } else if (paswd == "") {
        document.getElementById("lbl1").style.visibility = "hidden";
        document.getElementById("lbl2").style.visibility = "visible";
        return false;
    } else {
        alert("Welcome to Weddings.");
        return true;
    }
}

function validateAdmin() {
    var aname = document.forms["form2"]["aname"].value;
    var pass = document.forms["form2"]["pass"].value;

    if (aname == "user1" && pass == "user10702") {
        alert("Welcome user1");
        return true;
    } else if (aname != "user1") {
        document.getElementById("l2").style.visibility = "hidden";
        document.getElementById("l1").style.visibility = "visible";
        return false;
    } else if (pass == "") {
        document.getElementById("l1").style.visibility = "hidden";
        document.getElementById("l2").style.visibility = "visible";
        return false;
    }
}

function validate() {
    var f_n = document.getElementById("f_n").innerHTML;
    var m_n = document.getElementById("m_n").innerHTML;
    var l_n = document.getElementById("l_n").innerHTML;
    var age = document.getElementById("age").innerHTML;
    var gender = document.getElementById("gender").value;
    var email = document.getElementById("email").innerHTML;
    var pass1 = document.getElementById("pass1").innerHTML;
    var pass2 = document.getElementById("pass2").innerHTML;
    var mobile = document.getElementById("mobile").innerHTML;
    var tongue = document.getElementById("tongue").value;
    var height = document.getElementById("height").innerHTML;
    var weight = document.getElementById("weight").innerHTML;
    var graduation = document.getElementById("graduation").innerHTML;
    var status = document.getElementById("status").value;
    var addr = document.getElementById("addr").innerHTML;
    var pin = document.getElementById("pin").innerHTML;
    var city = document.getElementById("city").innerHTML;
    var state = document.getElementById("state").innerHTML;
    var country = document.getElementById("country").innerHTML;

    if (pass1 == pass2) {
            
        return false;
    }
}
