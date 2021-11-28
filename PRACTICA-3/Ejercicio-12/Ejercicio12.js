/* Ejercicio12.js */
class Objeto {

    constructor() {
    }

    leerArchivoTexto(files) {
        var archivos = files;
        var section = "<section></section>";
        $("section").last().remove();
        $("p").last().after(section);
        for (let archivo of archivos) {
            this.imprimirArchivo(archivo);
        }
    }
    imprimirArchivo(archivo) {
        var texto = "<h2> Nombre del archivo: " + archivo.name + " </h2>";
        texto += "<p> Tamaño del archivo: " + archivo.size + " bytes </p>";
        texto += "<p> Tipo del archivo: " + archivo.type + " </p>";
        texto += "<p> Fecha de la última modificación: " + archivo.lastModifiedDate + " </p>";
        texto += "<p> Contenido del archivo: </p>"
        texto += "<p>rellenar</p>";

        $("section").last().append(texto)
        //Solamente admite archivos de tipo textov
        var tipoTxt = /text.plain/;
        var tipoXML = /text.xml/;
        var tipoJSon = /application.json/;
        if (archivo.type.match(tipoTxt) ||
            archivo.type.match(tipoXML) ||
            archivo.type.match(tipoJSon)) {
            var lector = new FileReader();
            lector.onload = () => this.rellenar(lector);
            lector.readAsText(archivo);
        }
        else {
            $("p:contains('rellenar')").last().text("Tipo de archivo no compatible");
        }
    }
    rellenar(lector) {
        var texto = lector.result;
        $("p:contains('rellenar')").first().text(texto);
    }
}
var objeto = new Objeto();