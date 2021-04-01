function check() {

    let username = document.getElementById("user");
    let password = document.getElementById("pass");
    if (document.getElementById("user").value == "" || document.getElementById("pass").value == "") {
        alert("Please fill the empty fields!");
        if (username.value == "") {
            username.style.borderColor = "#ff1a00";
        }

        if (password.value == "") {
            password.style.borderColor = "#ff1a00";
        }
    } else {
        window.open("../index.html", "_self", "replace")
        alert("Welcome " + username.value + " !");
    }

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