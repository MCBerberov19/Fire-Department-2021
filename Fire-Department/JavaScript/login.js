var check1 = false;
var check2 = false;

function check() {

    let username = document.getElementById("user");
    let password = document.getElementById("pass");
    if (document.getElementById("user").value == "" || document.getElementById("pass").value == "") {
        alert("Please fill the empty fields!");
        if (username.value == "") {
            username.style.borderColor = "#ff1a00";
            check1 = true;
        }

        if (password.value == "") {
            password.style.borderColor = "#ff1a00";
            check2 = true;
        }
    } else {
        window.open("../index.html", "_self", "replace")
        alert("Welcome " + username.value + " !");
    }

}

function onFocus(thing) {
    thing.style.borderColor = "#1bbe31cc";
}

function onBlurUser() {
    if (check1 == true) {
        return document.getElementById("user").style.borderColor = "#ff1a00";
    }

    document.getElementById("user").style.borderColor = "#dad732cc";
}

function onBlurPass() {
    if (check2 == true) {
        return document.getElementById("pass").style.borderColor = "#ff1a00";
    }

    document.getElementById("pass").style.borderColor = "#dad732cc";
}

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