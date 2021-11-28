/* tarea-5.js */
class GeoLocalizacion {

  constructor() {
  }
  dinamicMap() {
    var centro = { lat: 43.3672702, lng: -5.8502461 };
    var donde = document.getElementsByTagName("p")[0];
    var mapaGeoposicionado = new google.maps.Map(donde, { zoom: 8, center: centro });

    var infoWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.buscarCoordenadas(position, infoWindow, mapaGeoposicionado)
        , this.handleLocationError(true, infoWindow, mapaGeoposicionado)
      );
    } else {
      this.handleLocationError(false, infoWindow, mapaGeoposicionado);
    }
  }
  buscarCoordenadas(position, infoWindow, mapaGeoposicionado) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Localización encontrada');
    infoWindow.open(mapaGeoposicionado);
    mapaGeoposicionado.setCenter(pos);
  }
  handleLocationError(browserHasGeolocation, infoWindow, mapaGeoposicionado) {
    infoWindow.setPosition(mapaGeoposicionado.getCenter());
    infoWindow.setContent(browserHasGeolocation ?
      'Error: Ha fallado la geolocalización' :
      'Error: Su navegador no soporta geolocalización');
    infoWindow.open(mapaGeoposicionado);
  }
}
var objeto = new GeoLocalizacion();