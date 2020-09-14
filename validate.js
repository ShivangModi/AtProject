function validateLogin() {
    var email = document.forms["loginForm"]["email"].value;
    var paswd = document.forms["loginForm"]["paswd"].value;

    if (email == "") {
        document.getElementById("l_lbl2").style.visibility = "hidden";
        document.getElementById("l_lbl1").style.visibility = "visible";
        return false;
    } else if (paswd == "") {
        document.getElementById("l_lbl1").style.visibility = "hidden";
        document.getElementById("l_lbl2").style.visibility = "visible";
        return false;
    } else {
        alert("Welcome to Weddings.");
        return true;
    }
}

function validateRegister() {
    var f_n = document.forms["registerForm"]["f_n"].value;
    var m_n = document.forms["registerForm"]["m_n"].value;
    var l_n = document.forms["registerForm"]["l_n"].value;
    var age = document.forms["registerForm"]["age"].value;
    var gender = document.forms["registerForm"]["gender"].value;
    var email = document.forms["registerForm"]["email"].value;
    var paswd1 = document.forms["registerForm"]["paswd1"].value;
    var paswd2 = document.forms["registerForm"]["paswd2"].value;
    var mobile = document.forms["registerForm"]["mobile"].value;
    var tongue = document.forms["registerForm"]["tongue"].value;
    var height = document.forms["registerForm"]["height"].value;
    var weight = document.forms["registerForm"]["weight"].value;
    var graduation = document.forms["registerForm"]["graduation"].value;
    var status = document.forms["registerForm"]["status"].value;
    var addr = document.forms["registerForm"]["addr"].value;
    var pin = document.forms["registerForm"]["pin"].value;
    var city = document.forms["registerForm"]["city"].value;
    var state = document.forms["registerForm"]["state"].value;
    var country = document.forms["registerForm"]["country"].value;

    if(paswd1 == paswd2){
        document.getElementById("r_lbl1").innerHTML = f_n;
        document.getElementById("r_lbl2").innerHTML = m_n;
        document.getElementById("r_lbl3").innerHTML = l_n;
        document.getElementById("r_lbl4").innerHTML = age;
        document.getElementById("r_lbl5").innerHTML = gender;
        document.getElementById("r_lbl6").innerHTML = email;
        document.getElementById("r_lbl7").innerHTML = paswd1;
        document.getElementById("r_lbl8").innerHTML = mobile;
        document.getElementById("r_lbl9").innerHTML = tongue;
        document.getElementById("r_lbl10").innerHTML = height;
        document.getElementById("r_lbl11").innerHTML = weight;
        document.getElementById("r_lbl12").innerHTML = graduation;
        document.getElementById("r_lbl13").innerHTML = status;
        document.getElementById("r_lbl14").innerHTML = addr;
        document.getElementById("r_lbl15").innerHTML = city;
        document.getElementById("r_lbl16").innerHTML = state;
        document.getElementById("r_lbl17").innerHTML = pin;
        document.getElementById("r_lbl18").innerHTML = country;

        document.getElementById("r_lbl1").style.visibility = "visible";
        document.getElementById("r_lbl2").style.visibility = "visible";
        document.getElementById("r_lbl3").style.visibility = "visible";
        document.getElementById("r_lbl4").style.visibility = "visible";
        document.getElementById("r_lbl5").style.visibility = "visible";
        document.getElementById("r_lbl6").style.visibility = "visible";
        document.getElementById("r_lbl7").style.visibility = "visible";
        document.getElementById("r_lbl8").style.visibility = "visible";
        document.getElementById("r_lbl9").style.visibility = "visible";
        document.getElementById("r_lbl10").style.visibility = "visible";
        document.getElementById("r_lbl11").style.visibility = "visible";
        document.getElementById("r_lbl12").style.visibility = "visible";
        document.getElementById("r_lbl13").style.visibility = "visible";
        document.getElementById("r_lbl14").style.visibility = "visible";
        document.getElementById("r_lbl15").style.visibility = "visible";
        document.getElementById("r_lbl16").style.visibility = "visible";
        document.getElementById("r_lbl17").style.visibility = "visible";
        document.getElementById("r_lbl18").style.visibility = "visible";
        alert("Registration is done!!! Now you can login in our website. ")

        return false;
    }
    else{
        alert("Enter same password.");
        return false;
    }

}

function validateAdmin() {
    var aname = document.forms["adminForm"]["aname"].value;
    var paswd = document.forms["adminForm"]["paswd"].value;

    if (aname != "user1") {
        document.getElementById("a_lbl2").style.visibility = "hidden";
        document.getElementById("a_lbl1").style.visibility = "visible";
        return false;
    } else if (paswd != "user10702") {
        document.getElementById("a_lbl1").style.visibility = "hidden";
        document.getElementById("a_lbl2").style.visibility = "visible";
        return false;
    } else {
        alert("Welcome user1");
        return true;
    }
}