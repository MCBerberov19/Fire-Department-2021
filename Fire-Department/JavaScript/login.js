var check1 = false;
var check2 = false;

//Checks the accuracy of the entered information
function check() {

    let username = document.getElementById("user");
    let password = document.getElementById("pass");

    let text = "Fill the blank!";
    if (document.getElementById("user").value == "" || document.getElementById("pass").value == "" || document.getElementById("agreement").checked == false) {
        if (username.value == "") {
            username.style.borderColor = "#ff1a00";
            check1 = true;
            document.getElementById("errorMessage1").style.color = "#ff1a00";
            document.getElementById("errorMessage1").innerHTML = text;
        } else {
            username.style.borderColor = "rgba(0, 0, 0, 0.349)";
            check1 = false;
            document.getElementById("errorMessage1").innerHTML = "";
        }

        if (password.value == "") {
            password.style.borderColor = "#ff1a00";
            check2 = true;
            document.getElementById("errorMessage2").style.color = "#ff1a00";
            document.getElementById("errorMessage2").innerHTML = text;
        } else {
            password.style.borderColor = "rgba(0, 0, 0, 0.349)";
            check2 = false;
            document.getElementById("errorMessage2").innerHTML = "";
        }

        if (document.getElementById("agreement").checked == false) {
            document.getElementById("privacy").style.color = "#ff1a00";
        } else {
            document.getElementById("privacy").style.color = "rgba(24, 24, 24, 0.575)";
        }
    } else {
        window.open("../index.html", "_self", "replace")
        alert(`Welcome ${username.value} !`);
    }
}

//Changes color when On focus on field
function onFocus(thing) {
    thing.style.borderColor = "#1bbe31cc";
}

//Changes color when On blur out of username field
function onBlurUser() {
    if (check1 == true) {
        return document.getElementById("user").style.borderColor = "#ff1a00";
    } else {
        document.getElementById("user").style.borderColor = "rgba(0, 0, 0, 0.349)";
    }

    document.getElementById("user").style.borderColor = "rgba(0, 0, 0, 0.349)";
}

//Changes color when On blur out of password field
function onBlurPass() {
    if (check2 == true) {
        return document.getElementById("pass").style.borderColor = "#ff1a00";
    } else {
        document.getElementById("pass").style.borderColor = "rgba(0, 0, 0, 0.349)";
    }
    document.getElementById("pass").style.borderColor = "rgba(0, 0, 0, 0.349)";
}

//On click hide and show password
function hideAndShow() {
    let view = document.getElementById("pass");
    if (view.type === "password") {
        view.type = "text";
        document.getElementById("view").src = "../IMG/unview.png";
    } else {
        view.type = "password";
        document.getElementById("view").src = "../IMG/view.png";
    }
}