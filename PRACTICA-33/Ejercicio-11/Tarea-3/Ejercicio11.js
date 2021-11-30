/* tarea-3.js */
class GeoLocalizacion {

    constructor() {
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this),
            this.verErrores.bind(this));
    }

    getPosicion(posicion) {
        this.mensaje = "Se ha realizado correctamente la petición de geolocalización";
        this.longitud = posicion.coords.longitude;
        this.latitud = posicion.coords.latitude;
        this.precision = posicion.coords.accuracy;
        this.altitud = posicion.coords.altitude;
        this.precisionAltitud = posicion.coords.altitudeAccuracy;
        this.rumbo = posicion.coords.heading;
        this.velocidad = posicion.coords.speed;
    }
    leerMapa() {
        var datos = '<h2>' + this.mensaje + '</h2>';
        datos + '<p>Longitud: ' + this.longitud + ' grados</p>';
        datos += '<p>Latitud: ' + this.latitud + ' grados</p>';
        datos += '<p>Precisión de la latitud y longitud: ' + this.precision + ' metros</p>';
        datos += '<p>Altitud: ' + this.altitude + ' metros</p>';
        datos += '<p>Precisión de la altitud: ' + this.precisionAltitud + ' metros</p>';
        datos += '<p>Rumbo: ' + this.rumbo + ' grados</p>';
        datos += '<p>Velocidad: ' + this.velocidad + ' metros/segundo</p>';

        $("p").remove();
        $("h2").remove();
        $("input").after(datos);
    }
    verErrores(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                this.mensaje = "El usuario no permite la petición de geolocalización"
                break;
            case error.POSITION_UNAVAILABLE:
                this.mensaje = "Información de geolocalización no disponible"
                break;
            case error.TIMEOUT:
                this.mensaje = "La petición de geolocalización ha caducado"
                break;
            case error.UNKNOWN_ERROR:
                this.mensaje = "Se ha producido un error desconocido"
                break;
        }
    }
    getMapa() {
        var apiKey = "&key=AIzaSyDU45qqAc_i56a8dzZ55-kb1vuO-_3Sk9U";
        var url = "https://maps.googleapis.com/maps/api/staticmap?";
        //ParÃ¡metros
        var centro = "center=" + this.latitud + "," + this.longitud;
        //zoom: 1 (el mundo), 5 (continentes), 10 (ciudad), 15 (calles), 20 (edificios)
        var zoom = "&zoom=15";
        //TamaÃ±o del mapa en pixeles (obligatorio)
        var tamano = "&size=800x600";
        var marcador = "&markers=color:red%7Clabel:S%7C" + this.latitud + "," + this.longitud;
        var sensor = "&sensor=false";

        this.imagenMapa = url + centro + zoom + tamano + marcador + sensor + apiKey;
        $("img").remove();
        $("input").after("<img src='" + this.imagenMapa + "' alt='mapa estático google' />");
        this.leerMapa();
    }
}
var objeto = new GeoLocalizacion();