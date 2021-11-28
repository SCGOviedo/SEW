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
    addH3() {
        $("h3").first().after("<h3>Esto es el encabezado h3</h3>");
    }
    doblarH3() {
        $("h3").after("<h3>Esto es el encabezado h3</h3>");
    }
    removeH3() {
        $("h3").last().remove();
    }
    removeAllH3() {
        $("h3").remove();
    }
    mostrarArbol() {
        var query = $("p");
        for (var i = 0; i < query.length; i++) {
            var etiquetaPadre = $(query[i]).parent().get(0).tagName;
            $(query[i]).prepend(document.createTextNode("Etiqueta padre : <" + etiquetaPadre + "> elemento : <" + $(query[i]).get(0).tagName + "> valor: "));
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