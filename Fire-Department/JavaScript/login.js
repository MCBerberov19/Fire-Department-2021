function check() {

    if (document.getElementById("user").value == "" || document.getElementById("pass").value == "") {
        alert("Please fill the empty fields!");

    } else {
        alert("Welcome " + document.getElementById("user").value + " !");


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