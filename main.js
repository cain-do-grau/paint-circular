//vamos declarar 3 variáveis que vamos usar ao longo do projeto
var mouseEvent, mouseXfinal, mouseYfinal, canvas, ctx, color, larguraLinha, mouseXtouchAtual,mouseYtouchAtual,mouseXtouchFinal,mouseXtouchFinal;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown() {
    //estamos pegando o valor da caixa de texto e atribundo a variável
    color = document.getElementById("caixaTextoCor").value;
    larguraLinha = document.getElementById("caixaTextoLargura").value;
    //Fim da Atividade Adicional
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    mouseXatual = e.clientX - canvas.offsetLeft;
    mouseYatual = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color; //A propriedade strokeStyle define ou retorna a cor, o gradiente ou o padrão usado para traçados.
        ctx.lineWidth = 3; //A propriedade lineWidth define ou retorna a largura da linha atual, em pixels.
        ctx.arc(mouseXatual, mouseYatual,larguraLinha, 0, 2*Math.PI);
        ctx.stroke();
    }

    mouseXfinal = mouseXatual;
    mouseYfinal = mouseYatual;
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp() {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave() {
    mouseEvent = "mouseleave";
}

var mouseXtouchFinal, mouseYtouchFinal;
var width = screen.width;

newWidht = screen.width - 70;
newHeight = screen.height - 300;
if (width < 992) {
    document.getElementById("myCanvas").width = newWidht;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart", myTouchStart);
function myTouchStart(e) {
    console.log("myTouchStart");
    color = document.getElementById("color").value;
    larguraLinha = document.getElementById("larguraLinha").value;

    mouseXtouchFinal = e.touches[0].clientX - canvas.offsetLeft;
    mouseYtouchFinal = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", myTouchMove);
function myTouchMove(e) {
    mouseXtouchAtual = e.touches[0].clientX - canvas.offsetLeft;
    mouseYtouchAtual = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color; //A propriedade strokeStyle define ou retorna a cor, o gradiente ou o padrão usado para traçados.
    ctx.lineWidth = 3; //A propriedade lineWidth define ou retorna a largura da linha atual, em pixels.
    ctx.arc(mouseXtouchAtual, mouseYtouchAtual,larguraLinha, 0, 2*Math.PI);
    ctx.stroke();

    mouseXtouchFinal = mouseXtouchAtual;
    mouseYtouchFinal = mouseYtouchAtual;
}

function limparCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
