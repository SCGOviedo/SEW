/* tarea-6.js */
class Mapa {

  constructor() {
    this.lugares = new Map().set(
      "Oviedo", { lat: 43.22, lng: -5.50 }).set(
        "Madrid", { lat: 40.24, lng: -3.41 }).set(
          "Málaga", { lat: 36.43, lng: -4.25 }).set(
            "Barcelona", { lat: 41.23, lng: 2.11 }).set(
              "Coruña", { lat: 43.22, lng: -8.23 }).set(
                "Cáceres", { lat: 39.28, lng: -6.22 }).set(
                  "Barakaldo", { lat: 43.20, lng: -2.57 }).set(
                    "Valencia", { lat: 39.28, lng: -0.22 }).set(
                      "León", { lat: 42.36, lng: -5.34 }).set(
                        "Albacete", { lat: 39.00, lng: -1.52 });
  }
  cargarBotones() {
    try {
      this.puntos = 0;
      $("h2").first().text("puntos: " + this.puntos);
      var items = Array.from(this.lugares.keys());
      for (var i = 0; i < items.length; i++) {
        if(i==0)
          $("aside p").first().remove();
        var element = "'" + items[i] + "'";
        var nuevo = '<input type="button" value="' + items[i] + '" onclick = "objeto.marcar(' + element + ')"/>';
        $("aside").append(nuevo);
      }
      this.puntoRandom();
    } catch {
      alert("Error inexperado, no se ha podido cargar los botones");
    }
  }
  dinamicMap() {
    try {
      var centro = { lat: 40.42, lng: -3.70 };
      var donde = document.getElementsByTagName("main")[0];
      this.mapa = new google.maps.Map(donde, { zoom: 6.5, center: centro, mapTypeId: 'satellite' });
    } catch {
      alert("Error inexperado, no se ha podido cargar el mapa");
    }
  }
  puntoRandom() {
    try {
      this.dinamicMap();
      var items = Array.from(this.lugares.keys());
      this.key = items[Math.floor(Math.random() * items.length)];
      var posicion = this.lugares.get(this.key);
      var marcador = new google.maps.Marker({ position: posicion, map: this.mapa });
    } catch {
      alert("Error inexperado");
      this.puntoRandom();
    }
  }
  marcar(ciudad) {
    try {
      if (ciudad == this.key) {
        this.puntos++;
      }
      else {
        this.puntos--;
      }
      $("h2").first().text("puntos: " + this.puntos);
      this.puntoRandom()
    } catch {
      alert("Error inexperado");
    }
  }
}
var objeto = new Mapa();