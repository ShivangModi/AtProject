$("#loginBtn").click(function () {
    var email = $("#email").val();
    var paswd = $("#paswd").val();
    
    if (email === '') {
        alert("Please Enter the Email Id");
        return;
    }
    if (paswd === '') {
        alert("Please Enter the password");
        return;
    }
    alert("Welcome to Weddings.");
    $(window).attr("location", "userPage.html");
});

$("#registerBtn").click(function () {
    var f_n = $("#f_n").val();
    var m_n = $("#m_n").val();
    var l_n = $("#l_n").val();
    var age = $("#age").val();
    var gender = $("#gender").val();
    var emailId = $("#emailId").val();
    var paswd1 = $("#paswd1").val();
    var paswd2 = $("#paswd2").val();
    var mobile = $("#mobile").val();
    var tongue = $("#tongue").val();
    var height = $("#height").val();
    var weight = $("#weight").val();
    var graduation = $("#graduation").val();
    var status = $("#status").val();
    var addr = $("#addr").val();
    var pin = $("#pin").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var country = $("#country").val();

    if (paswd1 === paswd2) {
        alert("First Name: " + f_n + "\n" +
            "Middel Name: " + m_n + "\n" +
            "Last Name: " + l_n + "\n" +
            "Age: " + age + "\n" +
            "Gender: " + gender + "\n" +
            "Email Id: " + emailId + "\n" +
            "Password: " + paswd1 + "\n" +
            "Mobile No.: " + mobile + "\n" +
            "Tounge: " + tongue + "\n" +
            "Height: " + height + "\n" +
            "Weight: " + weight + "\n" +
            "Graduation: " + graduation + "\n" +
            "Status: " + status + "\n" +
            "Address: " + addr + "\n" +
            "City: " + city + "\n" +
            "State: " + state + "\n" +
            "Pin Code: " + pin + "\n" +
            "Country: " + country + "\n");
        alert("Registration is done!!! \nNow You can login into your account");
        $(window).attr("location", "index.html");
    }
    else {
        alert("Enter same password.");
        return;
    }
});

$("#adminBtn").click(function () {
    var aname = $("#aname").val();
    var pass = $("#pass").val();

    if (aname != 'user1') {
        alert("Please Enter correct admin name");
        return;
    }
    if (pass != 'user10702') {
        alert("Please Enter correct password");
        return;
    }
    alert("Welcome user1");
    $(window).attr("location", "adminPage.html");
});