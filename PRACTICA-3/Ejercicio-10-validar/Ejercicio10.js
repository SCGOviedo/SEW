/* Ejercicio-10.js */
class Objeto {

    constructor() {
        this.access_key = "kaayv49135r91ui766shjt94whgp52ddexq07fbzip88jkw133adn5f7rpec";
        this.endpoint = 'latest';
        this.symbol = 'EUR';
        this.base = 'BRENTOIL';
    }
    cargarDatos() {
        this.url = 'https://commodities-api.com/api/' + this.endpoint + '?access_key=' + this.access_key
            + "&base=" + this.base + "&symbols=" + this.symbol;
        $.ajax({
            dataType: 'json',
            url: this.url,
            method: 'GET',
            success: this.mostrarDatos,
            error: this.mostrarError
        });

    }
    mostrarDatos(json,status) {
        if(status="success"){
            var brent = json.data.rates.EUR;
            //Brent Crude Oil
            $("section").first().append("<p>Brent Crude Oil<p>");
            $("section").first().append("<h3>€ Por barril</h2>");
            $("section").first().append("<p>" + brent + "</p>");
            $("section").first().append("<h3>€ Por litro</h2>");
            $("section").first().append("<p>" + brent / 159 + "</p>");
        }
    }
    mostrarError() {
        $("section").first().append("<h2>¡Tenemos problemas! No puedo obtener json</h2>");
      }
    actualizarEuros() {
        this.precio = parseFloat($("p").first().text());

        var valor = $("input").eq(0).val();
        $("input").eq(1).val(valor / this.precio * 159);
        $("input").eq(2).val(valor / this.precio);
    }
    actualizarLitros() {
        this.precio = parseFloat($("p").first().text());
        var valor = $("input").eq(1).val();
        $("input").eq(0).val(valor / 159 * this.precio);
        $("input").eq(2).val(valor / 159);

    }
    actualizarBarriles() {
        this.precio = parseFloat($("p").first().text());
        var valor = $("input").eq(2).val();
        $("input").eq(0).val(valor * this.precio);
        $("input").eq(1).val(valor * 159);

    }
}
var objeto = new Objeto();