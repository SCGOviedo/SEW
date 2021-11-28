/* MapaKML.js */
class Objeto {

    constructor() {
    }
    dinamicMap() {
        var centro = { lat: 40.42, lng: -3.70 };
        var donde = document.getElementsByTagName("main")[0];
        this.mapa = new google.maps.Map(donde, { zoom: 6.5, center: centro, mapTypeId: 'satellite' });
    }
    leerArchivoTexto(file) {
        this.imprimirArchivo(file[0]);
    }
    imprimirArchivo(archivo) {
        if (archivo.name.substr(archivo.name.length - 4) == ".kml") {
            var lector = new FileReader();

            lector.onload = () => this.rellenar(lector);
            lector.readAsText(archivo);

        } else {
            alert("Tipo de archivo no compatible");
        }
    }

    rellenar(lector) {
        var texto = lector.result;
        var kml = $(texto).find("Placemark")
        for (var i = 0; i < kml.length; i++) {
            var coordenadas = $('coordinates', kml[i]).text();
            coordenadas = coordenadas.replace('\n', '').replace('\n', '');
            coordenadas = coordenadas.split(',');

            var posicion = { lat: parseFloat(coordenadas[1]), lng: parseFloat(coordenadas[0]) }
            var marcador = new google.maps.Marker({ position: posicion, map: this.mapa });
        }
    }
}
var objeto = new Objeto();