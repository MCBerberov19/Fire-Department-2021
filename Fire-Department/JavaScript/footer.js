function popUpTeam() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

function openOutlook() {
    let choice = confirm("Are you sure you want to continue?");
    if (choice == true) {
        window.open("https://outlook.live.com/owa/");
    }
}

function openPlace() {
    let choice = confirm("Are you sure you want to continue?");
    if (choice == true) {
        window.open("https://www.google.bg/maps/place/%D0%9F%D0%BE%D0%B6%D0%B0%D1%80%D0%BD%D0%B0+%D0%B8+%D0%B0%D0%B2%D0%B0%D1%80%D0%B8%D0%B9%D0%BD%D0%B0+%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82/@42.5632862,27.5111681,17z/data=!3m1!4b1!4m5!3m4!1s0x40a696b5456f591b:0x3254fd0d18c27b3a!8m2!3d42.5632823!4d27.5133568");
    }
}

function openGithub() {
    let choice = confirm("Are you sure you want to continue?");
    if (choice == true) {
        window.open("https://github.com/MCBerberov19/Fire-Department-2021");
    }
}

function openContact() {
    alert("+359 111 222 333");
}