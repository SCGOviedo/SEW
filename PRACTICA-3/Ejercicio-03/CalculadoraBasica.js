// CalculadoraBasica.js{
class Calculadora {

    constructor() {
        this.resultado = "";
        this.memoria = 0;
        this.operadores = 0;
    }
    digitos(numero) {
        this.resultado += numero
    }
    punto() {
        this.resultado += "."
    }

    suma() {
        if (this.resultado.slice(-1) >= '0' && this.resultado.slice(-1) <= '9')
            this.hayQueOperar();
        this.resultado += "+"
    }
    resta() {
        if (this.resultado.slice(-1) >= '0' && this.resultado.slice(-1) <= '9')
            this.hayQueOperar();
        this.resultado += "-"
    }
    multiplicacion() {
        this.hayQueOperar();
        this.resultado += "*"
    }

    division() {
        this.hayQueOperar();
        this.resultado += "/"
    }

    mrc() {
        this.resultado = Number(this.memoria) + "";
    }

    mMas() {
        this.igual();
        this.memoria += Number(this.resultado);
        this.mrc();
    }

    mMenos() {
        this.igual();
        this.memoria -= Number(this.resultado);
        this.mrc();
    }

    borrar() {
        this.operadores = 0;
        this.resultado = "";
    }

    igual() {
        var numero = "";
        var numero1 = Number(0);
        var numero2 = Number(0);
        var operador = "";
        var primero = false;
        try {
            for (var i = 0; i < this.resultado.length; i++) {//recorre la pantalla, caracter a caracter
                var actual = this.resultado.charAt(i);
                if ((actual >= '0' && actual <= '9') || actual == '.') {//si es un número o punto, se va guardando
                    numero += actual;
                }
                else {//cuando es un operador
                    if (numero == "") {
                        if (actual == '-' || actual == '+') {//el operado '-' puede ser dos cosas diferentes
                            numero += actual;
                        }
                    }
                    else if (!primero) {
                        numero1 = Number(numero);//se guarda el número
                        operador = actual;//se guarda el operador
                        var numero = "";
                        primero = true;
                    }
                }
            }
            if (numero.length > 0)//si se puede, se guarda el segundo número
                numero2 = Number(numero);
            if (!primero) {
                var operador = "+";
            }
            this.resultado = "" + (eval(numero1 + operador + numero2));//se le pasa al eval dos Number y un operador
            this.operadores = 0;
        }
        catch (err) {
            alert("Error = Se ha confundido de tecla");
            this.borrar();
        }
    }

    hayQueOperar() {
        this.operadores++;
        if (this.operadores > 1) {//si ya había un operador, se calcula el valor
            this.igual();
            this.mostrar();
            this.operadores = 1;
        }
    }
    mostrar() {
        this.pantalla = document.getElementsByTagName("input")[0];
        this.pantalla.value = this.resultado;
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
            this.igual();

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