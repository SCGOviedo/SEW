/* CalculadoraCientifica.js */
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
class CalculadoraCientifica extends Calculadora {
    constructor() {
        super();
        this.memoriaArray = new Array();
        this.second = false;
        this.isDeg = true;
        this.resultadoSinParentesis = "";
        this.isFe = true;
        this.antiguosOperadores;

    }
    parentesisIzquierdo() {
        var boton = document.getElementsByTagName("input")[22];
        boton.disabled = true;
        boton = document.getElementsByTagName("input")[23];
        boton.disabled = false;

        this.resultadoSinParentesis += this.resultado;
        this.resultado = "(";
        this.antiguosOperadores = this.operadores;
        this.operadores = 0;
        this.mostrar();
    }
    parentesisDerecho() {
        var boton = document.getElementsByTagName("input")[22];
        boton.disabled = false;
        boton = document.getElementsByTagName("input")[23];
        boton.disabled = true;
        this.resultado += ")";
        this.igual();
        this.resultadoSinParentesis += this.resultado;
        this.resultado = this.resultadoSinParentesis;
        this.resultadoSinParentesis = "";
        this.operadores += this.antiguosOperadores;
        this.mostrar();
    }
    cambioSigno() {
        this.igual();
        this.resultado = "-1*" + this.resultado;
        this.igual();
    }
    factorial() {
        this.igual();
        this.resultado = "" + this.factorialCalculador(Number(this.resultado));
        this.mostrar();
    }
    factorialCalculador(number) {
        try {
            if (number == 0 || number == 1) {
                return 1;
            }
            else return Number(number * this.factorialCalculador(number - 1));
        }
        catch (err) {
            alert("Error = No se puede calcular el factorial");
        }
    }
    pi() {
        this.resultado += Math.PI;
        this.mostrar();
    }
    e() {
        this.resultado += Math.E;
        this.mostrar();
    }
    borrarUna() {
        this.resultado = this.resultado.slice(0, -1);
        this.mostrar();
    }
    raiz() {
        try {
            this.igual();
            this.resultado = "" + (Math.pow(Number(this.resultado), 1 / 2));
            this.mostrar();
        }
        catch (err) {
            alert("Error = No se puede calcular la raíz cuadrada");
        }
    }
    diezExp() {
        try {
            this.igual();
            this.resultado = "" + Math.pow(10, Number(this.resultado));
            this.mostrar();
        }
        catch (err) {
            alert("Error = No se puede calcular");
        }
    }
    log() {
        try {
            this.igual();
            this.resultado = "" + Math.log10(Number(this.resultado));
            this.mostrar();
        }
        catch (err) {
            alert("Error = No se puede calcular el logaritmo");
        }
    }
    ln() {
        try {
            this.igual();
            this.resultado = "" + Math.log(Number(this.resultado));
            this.mostrar();
        }
        catch (err) {
            alert("Error = No se puede calcular el logaritmo neperiano");
        }
    }
    exp() {
        try {
            this.igual();
            this.resultado = "" + Math.exp(Number(this.resultado));
            this.mostrar();
        }
        catch (err) {
            alert("Error = " + err);
        }
    }
    mod() {
        this.hayQueOperar();
        this.resultado = this.resultado + "%";
        this.mostrar();
    }
    x2() {
        try {
            this.igual();
            this.resultado = "" + Math.pow(Number(this.resultado), 2);
            this.mostrar();
        }
        catch (err) {
            alert("Error = No se puede calcular el cuadrado");
        }
    }
    xy() {
        this.igual();
        this.resultado += "**"
        this.operadores = 1;
        this.mostrar();
    }
    IsDeg() {
        this.igual();
        if (this.isDeg == true) {
            this.resultado = eval(Number(this.resultado) + "*" + Number(Math.PI) + "/" + Number(180))
            this.mostrar();
        }
    }
    sin() {
        try {
            this.IsDeg();
            if (this.second)
                this.resultado = "" + Math.asin(Number(this.resultado));
            else
                this.resultado = "" + Math.sin(Number(this.resultado));
        }
        catch (err) {
            alert("Error = No se puede calcular el seno");
        }
        this.mostrar();
    }
    cos() {
        try {
            this.IsDeg();
            if (this.second)
                this.resultado = "" + Math.acos(Number(this.resultado));
            else
                this.resultado = "" + Math.cos(Number(this.resultado));
        }
        catch (err) {
            alert("Error = No se puede calcular el coseno");
        }
        this.mostrar();
    }
    tan() {
        try {
            this.IsDeg();
            if (this.second)
                this.resultado = "" + Math.atan(Number(this.resultado));
            else
                this.resultado = "" + Math.tan(Number(this.resultado));
        }
        catch (err) {
            alert("Error = No se puede calcular la tangente");
        }
        this.mostrar();
    }
    mc() {
        this.memoriaArray = new Array();
    }
    mr() {
        this.resultado = "" + this.memoriaArray[this.memoriaArray.length - 1];
    }
    ms() {
        if (this.memoria == 0) {
            this.igual();
            this.memoriaArray[this.memoriaArray.length] = (Number(this.resultado));
        }
        else {
            this.memoriaArray[this.memoriaArray.length] = this.memoria;
            this.memoria = Number(0);
        }
        this.mostrar();
    }
    deg() {
        var boton = document.getElementsByTagName("input")[1];
        if (this.isDeg == true) {
            boton.value = "GRAD";

        }
        else {
            boton.value = "DEG";
        }
        this.isDeg = !this.isDeg;
        this.mostrar();
    }
    fe() {
        this.igual();
        var pantalla = document.getElementsByTagName("input")[0];
        if (this.isFe)
            this.resultado = Number(this.resultado).toExponential();
        else
            this.resultado = Number(this.resultado).toFixed();
        this.isFe = !this.isFe;
        this.mostrar();
    }
    abs() {
        try {
            this.igual();
            this.resultado = "" + Math.abs(Number(this.resultado));
            this.mostrar();
        }
        catch (err) {
            alert("Error = No se puede calcular el valor absoluto");
        }
    }
    inversa() {
        try {
            this.igual();
            this.resultado = "" + eval(Number(1) / Number(this.resultado));
            this.mostrar();
        }
        catch (err) {
            alert("Error = No se puede calcular la inversa");
        }
    }
    borrarUnaCientifica() {
        var borra = this.resultado.substr(this.resultado.length - 1);
        this.borrarUna();
        if (borra == '(') {
            var boton = document.getElementsByTagName("input")[22];
            boton.disabled = false;
            boton = document.getElementsByTagName("input")[23];
            boton.disabled = true;
            this.resultado = this.resultadoSinParentesis;
            this.resultadoSinParentesis = "";
            this.operadores += this.antiguosOperadores;
        }
        this.mostrar();
    }
    borrarCientifica() {
        var boton = document.getElementsByTagName("input")[22];
        boton.disabled = false;
        boton = document.getElementsByTagName("input")[23];
        boton.disabled = true;
        this.resultadoSinParentesis = "";
        this.borrar();
        this.mostrar();
    }
    secondTrigo() {
        var sen = document.getElementsByTagName("input")[3];
        var cos = document.getElementsByTagName("input")[4];
        var tan = document.getElementsByTagName("input")[5];
        if (this.second) {
            sen.value = "sin";
            cos.value = "cos";
            tan.value = "tan";
        }
        else {
            sen.value = "asen";
            cos.value = "acos";
            tan.value = "atan";

        }
        this.second = !this.second;
        this.mostrar();
    }
}
var calculadora = new CalculadoraCientifica();