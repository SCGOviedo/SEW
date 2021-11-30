/* Ejercicio-08.js */
class Objeto {

    constructor() {
        this.apikey = "6a47d0a1d24bb133943cb6dcb1eaab1e";
        this.ciudad = "Oviedo";
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.error = "<h2>¡problemas! No puedo obtener información de <a href='http://openweathermap.org'>OpenWeatherMap</a></h2>";
    }
    cargarDatos(ciudad) {
        this.url = "https://api.openweathermap.org/data/2.5/weather?q=" + ciudad + this.unidades + this.idioma + "&APPID=" + this.apikey;
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: this.cargar,
            error: this.mostrarError
        });
    }
    cargar(datos,status) {
        if(status="success"){
            var stringDatos = "<ul><li>Ciudad: " + datos.name + ' </li>';
            stringDatos += "<li>País: " + datos.sys.country + "</li>";
            stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>";
            stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>";
            stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>";
            stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>";
            stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>";
            stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
            stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
            stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>";
            stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li>";
            stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>";
            stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>";
            stringDatos += "<li>Hora de la medida: " + new Date(datos.dt * 1000).toLocaleTimeString() + "</li>";
            stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt * 1000).toLocaleDateString() + "</li>";
            stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
            stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
            stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";
            $("ul").first().remove();
            $("p").first().remove();
            $("h2").after(stringDatos);
            //Añade la foto
            var linkFoto = '<img src="http://openweathermap.org/img/w/' + datos.weather[0].icon + '.png" alt="Icono tiempo" />';
            $('img').remove();
            $('ul').before(linkFoto);
        }
    }
    mostrarError() {
        $("p").first().remove();
        $("h2").after("<p>¡Tenemos problemas! No puedo obtener json de <a href='http://openweathermap.org'>OpenWeatherMap</a> </p>");
    }
}
var objeto = new Objeto();