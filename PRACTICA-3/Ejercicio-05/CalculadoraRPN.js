/* Ejercicio-05.js */
class Calculadora {

    constructor() {
        this.resultado = "";
        this.memoria = new Array();
    }
    digitos(numero) {
        this.resultado += numero;
    }
    punto() {
        this.resultado += "."
    }

    suma() {
        try {
            if (this.memoria.length >= 2) {
                var number1 = Number(this.memoria.pop());
                var number2 = Number(this.memoria.pop());

                this.memoria.push(number1 + number2);
            }
        } catch {
            alert("Error inexperado");
        }
    }
    resta() {
        try {
            if (this.memoria.length >= 2) {
                var number1 = Number(this.memoria.pop());
                var number2 = Number(this.memoria.pop());

                this.memoria.push(number2 - number1);
            }
        } catch {
            alert("Error inexperado");
        }
    }
    multiplicacion() {
        try {
            if (this.memoria.length >= 2) {
                var number1 = Number(this.memoria.pop());
                var number2 = Number(this.memoria.pop());

                this.memoria.push(number1 * number2);
            }
        } catch {
            alert("Error inexperado");
        }
    }

    division() {
        try {
            if (this.memoria.length >= 2) {
                var number1 = Number(this.memoria.pop());
                var number2 = Number(this.memoria.pop());

                this.memoria.push(number2 / number1);
            }
        } catch {
            alert("Error inexperado");
        }
    }

    sin() {
        try {
            if (this.memoria.length >= 1) {
                var number1 = Number(this.memoria.pop());

                this.memoria.push(Math.sin(number1));
            }
        } catch {
            alert("Error inexperado");
        }
    }
    cos() {
        try {
            if (this.memoria.length >= 1) {
                var number1 = Number(this.memoria.pop());

                this.memoria.push(Math.cos(number1));
            }
        } catch {
            alert("Error inexperado");
        }
    }
    tan() {
        try {
            if (this.memoria.length >= 1) {
                var number1 = Number(this.memoria.pop());

                this.memoria.push(Math.tan(number1));
            }
        } catch {
            alert("Error inexperado");
        }
    }
    asin() {
        try {
            if (this.memoria.length >= 1) {
                var number1 = Number(this.memoria.pop());
                if (number1 >= -1 && number1 <= 1)
                    this.memoria.push(Math.asin(number1));
                else {
                    alert("Ha de ser menor o igual a 1");
                    this.memoria.push(number1);
                }
            }
        } catch {
            alert("Error inexperado");
        }
    }
    acos() {
        try {
            if (this.memoria.length >= 1) {
                var number1 = Number(this.memoria.pop());
                if (number1 >= -1 && number1 <= 1)
                    this.memoria.push(Math.acos(number1));
                else {
                    alert("Ha de ser menor o igual a 1");
                    this.memoria.push(number1);
                }
            }
        } catch {
            alert("Error inexperado");
        }
    }
    atan() {
        try {
            if (this.memoria.length >= 1) {
                var number1 = Number(this.memoria.pop());
                this.memoria.push(Math.atan(number1));
            }
        } catch {
            alert("Error inexperado");
        }
    }
    borrar() {
        this.resultado = "";
    }

    enter() {
        try {
            var meter = Number(this.resultado)
            if (!Number.isNaN(meter))
                this.memoria.push(meter);
            this.resultado = "";
        }
        catch (err) {
            alert("Error");
        }
    }
    delete() {
        this.memoria.pop();
    }

    mostrar() {
        this.pantalla = document.getElementsByTagName("textarea")[0];
        var texto = "";
        for(var i=0;i<this.memoria.length;i++){
            texto += this.memoria[i] + "\r\n"
        }

        texto += this.resultado;
        this.pantalla.value = texto;
    }
    teclas(event) {
        var numeroTecla = String.fromCharCode(event.keyCode);
        var tecla = event.keyCode;
        if (numeroTecla >= '0' && numeroTecla <= '9') {
            this.digitos(numeroTecla);
        }
        else if (tecla >= 96 && tecla <= 105) {
            this.digitos(tecla - 96);
        }
        else if (tecla == 109) {
            this.resta();
        }
        else if (tecla == 107) {
            this.suma();
        }
        else if (tecla == 106) {
            this.multiplicacion();
        }
        else if (tecla == 111) {
            this.division();
        }
        else if (tecla == 13) {//intro
            this.enter();
        }
        else if (tecla == 110) {
            this.punto();
        }
        else if (tecla == 46) {//suprimir
            this.borrar();
        }
        this.mostrar();
    }
}
var calculadora = new Calculadora();