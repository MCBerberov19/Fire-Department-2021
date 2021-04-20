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

function check() {

}