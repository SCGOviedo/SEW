/* MapaGeoJSON.js */
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
        if (archivo.name.substr(archivo.name.length - 8) == ".geojson") {
            var lector = new FileReader();

            lector.onload = () => this.rellenar(lector);
            lector.readAsText(archivo);

        } else {
            alert("Tipo de archivo no compatible");
        }
    }

    rellenar(lector) {
        var texto = lector.result;
        var json = $.parseJSON(texto);
        for (var i = 0; i < json.features.length; i++) {
            var posicion = { lat: parseFloat(json.features[i].geometry.coordinates[1]), lng: parseFloat(json.features[i].geometry.coordinates[0]) };
            var marcador = new google.maps.Marker({ position: posicion, map: this.mapa });
            var coordenadas = $("p").last().remove();
        }
    }
}
var objeto = new Objeto();