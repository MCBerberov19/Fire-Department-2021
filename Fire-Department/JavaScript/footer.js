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
        window.open("https://www.google.bg/maps/place/%D0%91%D1%83%D1%80%D0%B3%D0%B0%D1%81/@42.5266271,27.3819262,12z/data=!3m1!4b1!4m5!3m4!1s0x40a69266f9fc9d91:0x400a01269bf4df0!8m2!3d42.5047926!4d27.4626361");
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