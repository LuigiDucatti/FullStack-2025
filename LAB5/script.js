function faz_caixa(a, b, c , d, v ) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = v;
    ctx.strokeStyle = v;
    ctx.moveTo(a,b)
    ctx.lineTo(a,c)
    ctx.lineTo(d,c)
    ctx.lineTo(d,b)
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
function faz_caixa_vazia(a, b, c , d, v ) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = v;
    ctx.moveTo(a,b)
    ctx.lineTo(a,c)
    ctx.lineTo(d,c)
    ctx.lineTo(d,b)
    ctx.stroke();
    ctx.closePath();
}

function faz_linha(a, b, c, d, v){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = v;
    ctx.strokeStyle = v;
    ctx.moveTo(a,b)
    ctx.lineTo(c,d)
    ctx.stroke();
    ctx.closePath();
}

function faz_curva(z, w, a, b, c, d, i){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = z;
    ctx.strokeStyle = w;
    ctx.arc(a,b,c,d*Math.PI,i*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

faz_caixa_vazia( 0, 0, 400, 400, 'black')

faz_caixa(a = 0, b = 0, c = 50, d = 50, v = 'blue')
