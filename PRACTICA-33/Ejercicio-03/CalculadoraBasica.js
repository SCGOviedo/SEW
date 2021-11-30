// CalculadoraBasica.js{
class Calculadora {

    constructor() {
        this.resultado = "";
        this.memoria = 0;
        this.operadores = 0;

        document.addEventListener( 'keydown',()=>this.teclas(this,event));
    }
    digitos(numero) {
        this.resultado += numero;
       this.mostrar();
    }
    punto() {
        this.resultado += ".";
       this.mostrar();
    }

    suma() {
        if (this.resultado.slice(-1) >= '0' && this.resultado.slice(-1) <= '9')
            this.hayQueOperar();
        this.resultado += "+";
       this.mostrar();
    }
    resta() {
        if (this.resultado.slice(-1) >= '0' && this.resultado.slice(-1) <= '9')
            this.hayQueOperar();
        this.resultado += "-";
       this.mostrar();
    }
    multiplicacion() {
        this.hayQueOperar();
        this.resultado += "*";
       this.mostrar();
    }

    division() {
        this.hayQueOperar();
        this.resultado += "/";
       this.mostrar();
    }

    mrc() {
        this.resultado = Number(this.memoria) + "";;
       this.mostrar();
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
        this.resultado = "";;
       this.mostrar();
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
            this.operadores = 0;;
           this.mostrar();
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
    teclas(object,event) {
        var numeroTecla = String.fromCharCode(event.keyCode);
        var tecla = event.keyCode;
        if (numeroTecla >= '0' && numeroTecla <= '9') {
            object.digitos(numeroTecla);
        }
        else if (tecla >= 96 && tecla <= 105) {
            object.digitos(tecla - 96);
        }
        else if (tecla == 109) {
            object.resta();
        }
        else if (tecla == 107) {
            object.suma();
        }
        else if (tecla == 106) {
            object.multiplicacion();
        }
        else if (tecla == 111) {
            object.division();
        }
        else if (tecla == 13) {//intro
            object.igual();

        }
        else if (tecla == 110) {
            object.punto();
        }
    }
}
var calculadora = new Calculadora();