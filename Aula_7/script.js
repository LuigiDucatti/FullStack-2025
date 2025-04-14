let canvas = document.getElementById('canvas');
let ctx =  canvas.getContext('2d');

let ret1 = {
    x: 0,
    y: 0,
    largura: 50,
    altura: 50,
    cor: 'red',
    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.altura, this.largura);
    }
}

ret1.desenha()

let ret2 = {
    x: 200,
    y: 320,
    largura: 50,
    altura: 50,
    cor: 'yellow',
    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.altura, this.largura);
    }
}

ret2.desenha()

let ret3 = {
    x: 200,
    y: 320,
    largura: 20,
    altura: 20,
    cor: 'black',
    desenha: function(){
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x, this.y, this.altura, this.largura);
    }
}

ret3.desenha()

function animacao(){
    ctx.clearRect(0,0,400,400)
    ret1.desenha()
    ret2.desenha()
    ret3.desenha()

    if (ret1.x > 400){
        /* ret1.x -= 10 */
        direcao = -1000
    }
    if(ret1.x <= 0){
        direcao = 20
    }

    ret1.x += direcao
    

    requestAnimationFrame(animacao)
}

animacao()

document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);

    let vel = 6;
    if (tecla == "w"){
        ret2.y -=  vel
    }
    if(tecla == "s"){
        ret2.y +=  vel
    }
    if(tecla == "d"){
        ret2.x +=  vel
    }
    if(tecla == "a"){
        ret2.x -=  vel
    }
})

document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
   
    ret3.x = x_mouse - 10;
    ret3.y = y_mouse - 10;
})
