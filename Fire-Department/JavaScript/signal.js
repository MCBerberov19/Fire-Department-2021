function initMap() {
    var location = {
        lat: 42.497681,
        lng: 27.470030
    };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map

    });
}

/*function check() {
    let number = document.getElementById("number");
    if (isNaN(number.value) == true) {
        alert("Enter a valid number !");
        number.value = '';
    }


}*/

function check() {
    let x = document.getElementById("teams").style.borderColor;
    if ((document.getElementById("number").value == "" || isNaN(document.getElementById("number").value) == true) || document.getElementById("teams").value == '' || document.getElementById("adress").value == "") {
        document.getElementById("showText").innerHTML = "Please fill the blanks!*";
        document.getElementById("showText").style.color = "#ff1a00";
        if (isNaN(document.getElementById("number").value) == true) {
            document.getElementById("number").value = "";
            document.getElementById("number").style.borderColor = "#ff1a00";
            alert("Enter a valid number!");
        } else {
            document.getElementById("number").style.borderColor = "rgb(255, 137, 26)";
        }
        if (document.getElementById("number").value == "") {
            document.getElementById("number").style.borderColor = "#ff1a00";
        } else {
            document.getElementById("number").style.borderColor = "rgb(255, 137, 26)";
        }
        if (document.getElementById("adress").value == "") {
            document.getElementById("adress").style.borderColor = "#ff1a00";
        } else {
            document.getElementById("adress").style.borderColor = "rgb(255, 137, 26)";
        }
        if (document.getElementById("teams").value == '') {
            document.getElementById("teams").style.borderColor = "red";
        } else {
            document.getElementById("teams").style.borderColor = "black";
        }
    } else {
        alert(`We sent to the adress team ${document.getElementById("teams").value} !`);
        window.location.reload();
    }
}