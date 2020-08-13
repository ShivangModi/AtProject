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
        confirm("Welcome to Weddings.");
        return true;
    }
}

function validateAdmin() {
    var aname = document.forms["form2"]["aname"].value;
    var pass = document.forms["form2"]["pass"].value;

    if (aname != "user1") {
        document.getElementById("l2").style.visibility = "hidden";
        document.getElementById("l1").style.visibility = "visible";
        return false;
    } else if (pass != "user10702") {
        document.getElementById("l1").style.visibility = "hidden";
        document.getElementById("l2").style.visibility = "visible";
        return false;
    } else {
        confirm("Welcome user1");
        return true;
    }
}

function validateRegister() {
    var f_n = document.forms["form3"]["f_n"].value;
    var m_n = document.forms["form3"]["m_n"].value;
    var l_n = document.forms["form3"]["l_n"].value;
    var age = document.forms["form3"]["age"].value;
    var gender = document.forms["form3"]["gender"].value;
    var email = document.forms["form3"]["email"].value;
    var pass1 = document.forms["form3"]["pass1"].value;
    var pass2 = document.forms["form3"]["pass2"].value;
    var mobile = document.forms["form3"]["mobile"].value;
    var tongue = document.forms["form3"]["tongue"].value;
    var height = document.forms["form3"]["height"].value;
    var weight = document.forms["form3"]["weight"].value;
    var graduation = document.forms["form3"]["graduation"].value;
    var status = document.forms["form3"]["status"].value;
    var addr = document.forms["form3"]["addr"].value;
    var pin = document.forms["form3"]["pin"].value;
    var city = document.forms["form3"]["city"].value;
    var state = document.forms["form3"]["state"].value;
    var country = document.forms["form3"]["country"].value;

    if(pass1 == pass2){
        document.getElementById("l1").innerHTML = "First Name: " + f_n;
        document.getElementById("l2").innerHTML = "Middel Name: " + m_n;
        document.getElementById("l3").innerHTML = "Last Name: " + l_n;
        document.getElementById("l4").innerHTML = "Age: " + age;
        document.getElementById("l5").innerHTML = "Gender: " + gender;
        document.getElementById("l6").innerHTML = "E-mail id: " + email;
        document.getElementById("l18").innerHTML = "password:" + pass1;
        document.getElementById("l7").innerHTML = "Mobile No.: " + mobile;
        document.getElementById("l8").innerHTML = "Tongue: " + tongue;
        document.getElementById("l9").innerHTML = "Height: " + height;
        document.getElementById("l10").innerHTML = "Weight: " + weight;
        document.getElementById("l11").innerHTML = "Graduation: " + graduation;
        document.getElementById("l12").innerHTML = "Marital status: " + status;
        document.getElementById("l13").innerHTML = "Address: " + addr;
        document.getElementById("l14").innerHTML = "Pin: " + pin;
        document.getElementById("l15").innerHTML = "City: " + city;
        document.getElementById("l16").innerHTML = "State: " + state;
        document.getElementById("l17").innerHTML = "Country: " + country;

        document.getElementById("l1").style.visibility = "visible";
        document.getElementById("l2").style.visibility = "visible";
        document.getElementById("l3").style.visibility = "visible";
        document.getElementById("l4").style.visibility = "visible";
        document.getElementById("l5").style.visibility = "visible";
        document.getElementById("l6").style.visibility = "visible";
        document.getElementById("l18").style.visibility = "visible";
        document.getElementById("l7").style.visibility = "visible";
        document.getElementById("l8").style.visibility = "visible";
        document.getElementById("l9").style.visibility = "visible";
        document.getElementById("l10").style.visibility = "visible";
        document.getElementById("l11").style.visibility = "visible";
        document.getElementById("l12").style.visibility = "visible";
        document.getElementById("l13").style.visibility = "visible";
        document.getElementById("l14").style.visibility = "visible";
        document.getElementById("l15").style.visibility = "visible";
        document.getElementById("l16").style.visibility = "visible";
        document.getElementById("l17").style.visibility = "visible";

        return false;
    }
    else{
        alert("Enter same password.");
        return false;
    }

}
