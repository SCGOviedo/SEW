/* tarea-4.js */
class GeoLocalizacion {

    constructor() {
    }
    dinamicMap() {

        var oviedo = { lat: 43.3672702, lng: -5.8502461 };
        var donde = document.getElementsByTagName("p")[0];
        var mapaOviedo = new google.maps.Map(donde, { zoom: 8, center: oviedo });
        var marcador = new google.maps.Marker({ position: oviedo, map: mapaOviedo });
    }
}
var objeto = new GeoLocalizacion();