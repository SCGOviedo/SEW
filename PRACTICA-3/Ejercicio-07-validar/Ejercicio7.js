/* Ejercicio-07.js */
class Objeto {

    constructor() {
        this.resultado = "";
        this.memoria = 0;
    }
    ocultar() {
        $("h1").hide();
    }
    mostrar() {
        $("h1").show();
    }
    cambiarH2() {
        $("h2").text("Has cambiado el h2");
    }
    originalH2() {
        $("h2").text("Esto es el encabezado h2");
    }
    addP() {
        $("h3").first().after("<p>Ha añadido un nuevo párrafo</h3>");
    }
    doblarP() {
        $("p").after("<p>Ha doblado los párrafos</p>");
    }
    removeP() {
        $("p").last().remove();
    }
    removeAllP() {
        $("p").remove();
    }
    mostrarArbol(padre) {
        var query = $(padre).children();
        for (var i = 0; i < query.length; i++) {
            var etiquetaPadre = $(query[i]).parent().get(0).tagName;
            $(query[i]).prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(query[i]).get(0).tagName + "> valor: "));
            this.mostrarArbol( $(query[i]).prev().prop('nodeName'));
        }
    }
    sumarFilas() {
        var fila = $("table tr");
        for (var i = 1; i < fila.length; i++) {
            var sum = 0;
            var columna = $("td", fila[i]);
            for (var j = 0; j < columna.length; j++) {
                sum += Number($(columna[j]).text());
            }
            alert("Fila " + i + "= " + sum);
        }
    }
    sumarColumnas() {
        var columna = $("table tr");
        for (var i = 0; i < columna.length-1; i++) {
            var sum = 0;
            var fila = $("table tr");
            for (var j = 0; j < fila.length; j++) {
                sum += Number($('td', fila[j]).eq(i).text());
            }
            alert("Columna " + i + "= " + sum);
        }
    }


}
var objeto = new Objeto();