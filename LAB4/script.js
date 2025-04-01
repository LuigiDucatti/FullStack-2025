let x = Math.random() * 100
let  chute = Math.floor(x)
console.log(chute);


function numer(){
    let hug = document.getElementById('num_esc').value;
  

    if (hug > chute) {
        document.getElementById('resp').innerHTML = "Muito alto! Tente novamente!!";
    }
    else if (hug < chute) {
        document.getElementById('resp').innerHTML = "Muito baixo! Tente novamente!!";
    }
    else{
        document.getElementById('resp').innerHTML = "Muito bem! Você acertou!!";
    }


    if (hug != chute) {
        document.getElementById('resp').style.setProperty("background-color", "red");
    }
    else{
        document.getElementById('resp').style.setProperty("background-color", 'green');
        document.body.style.background = 'lime';
    }
}