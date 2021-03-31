function check() {
    let username = document.getElementById("user").value;
    if (username.length == 0) {
        document.getElementById("user").style.borderColor = "red";

    }
}