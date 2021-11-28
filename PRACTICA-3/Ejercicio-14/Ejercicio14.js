/* Ejercicio14.js */
class Objeto {

    constructor() {
        this.radius = 20;
        this.lastX = 0;
        this.lastY = 0;
        this.x = 50;
        this.y = 50;
        this.animation;
        this.pulsado = false;
        this.color='#000';
    }
    cargar() {
        this.canvas = document.getElementsByTagName("canvas")[0];
        this.ctx = this.canvas.getContext('2d');

        document.addEventListener('pointerlockchange', () => this.lockChangeAlert(this), false);
        this.canvas.onclick = () =>
            this.canvas.requestPointerLock();

        this.canvasDraw();
        document.addEventListener("mousemove", () => this.updatePosition(this, event), false);
        document.addEventListener("mousedown", () => this.estaPulsado(this, true), false);
        document.addEventListener("mouseup", () => this.estaPulsado(this, false), false);
    }
    estaPulsado(objeto, estado) {
        objeto.pulsado = estado;
    }
    pantallaCompleta() {
        this.canvas.requestFullscreen();
    }
    canvasDraw() {
        if (!this.pulsado) {
            this.circulo("#fff");
        }
        this.ctx.beginPath();
        this.lastX = this.x;
        this.lastY = this.y;
        this.ctx.fillStyle = this.color;
        this.ctx.arc(this.x, this.y, this.radius, 0, this.degToRad(360), true);
        this.ctx.fill();

    }
    degToRad(degrees) {
        var result = Math.PI / 180 * degrees;
        return result;
    }
    lockChangeAlert(objeto) {
        if (document.pointerLockElement === objeto.canvas) {
            objeto.lock = true;
        }
        else {
            objeto.lock = false;
        }
    }
    updatePosition(objeto, e) {
        if (objeto.lock) {
            objeto.x += e.movementX;
            objeto.y += e.movementY;
            var mitad= objeto.radius/2;
            if (objeto.x > objeto.canvas.width - mitad) {
                objeto.x = objeto.canvas.width-mitad;
              }
              if (objeto.y > objeto.canvas.height - mitad) {
                objeto.y = objeto.canvas.height-mitad;
              }  
              if (objeto.x < -objeto.radius+mitad) {
                objeto.x = -objeto.radius+mitad;
              }
              if (objeto.y < -objeto.radius+mitad) {
                objeto.y = -objeto.radius+mitad;
              }
            if (!objeto.animation) {
                objeto.animation = requestAnimationFrame(() => objeto.animar(objeto)
                );
            }
        }
    }
    animar(objeto) {
        objeto.animation = null;
        objeto.canvasDraw();
    }
    cambiarColor(color){
        if(color==undefined){
            var botones=document.getElementsByTagName('input');
            color="#"+botones[botones.length-1].value;
        }
        this.color=color;
        this.circulo(color);
    }
    tam(number){
        this.radius+=1;
        this.circulo("#fff");
        this.radius+=number;
        this.radius=Math.max(5,this.radius);
        this.radius=Math.min(300,this.radius);
        this.circulo(this.color);
    }
    circulo(color){
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(this.lastX, this.lastY, this.radius+1, 0, this.degToRad(360), true);
        this.ctx.fill();
    }
}
var objeto = new Objeto();