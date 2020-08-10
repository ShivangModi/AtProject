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
        window.alert("Enter the first name");
        return false;
    }
}
