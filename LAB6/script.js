let canvas = document.getElementById('canvas');
let ctx =  canvas.getContext('2d');



let img_cur = {
    x: 0,
    y: 100,
    raio: 16,
    img: new Image(),
    desenha: function(){
        this.img.src = 'zoio.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

img_cur.desenha();

let qua1 = {
    x: 0,
    y: 0,
    largura: 32,
    altura: 32,
    cor: '',
    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.altura, this.largura);
    }
}

document.addEventListener('mousesor',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
   
    qua1.x = x_mouse - altura/2;
    qua1.y = y_mouse - largura/2;
})


