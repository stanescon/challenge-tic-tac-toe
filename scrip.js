const inicioVsCpu = document.querySelector('.vs-cpu');
const inicioMultiplayer = document.querySelector('.multiplayer');
const botoesDoJogo = document.querySelectorAll('.botao');
const marcadorX = document.querySelectorAll('.marca-x');
const marcadorO = document.querySelectorAll('.marca-o');
let multiplayer = false;
let change = true

inicioMultiplayer.onclick = function () {
    document.querySelector('.modo-game').classList.add('inativo');
    multiplayer = true
}

for(let i=0; i < botoesDoJogo.length; i++) {
    botoesDoJogo[i].onclick = function () {
        if (marcadorX[i].classList.contains('inativo') && marcadorO[i].classList.contains('inativo') && multiplayer && change ) {
            marcadorX[i].classList.remove('inativo');
            change = false;

                if(!marcadorX[(i+3) % 9].classList.contains('inativo') && !marcadorX[(i+6) % 9].classList.contains('inativo')) {
                    document.querySelector('.x-won').classList.remove('inativo');
                } else if (i < 3 && !marcadorX[(i+1) % 3].classList.contains('inativo') && !marcadorX[(i+2) % 3].classList.contains('inativo')){
                    document.querySelector('.x-won').classList.remove('inativo');
                } else if (i > 2 && i < 6 && !marcadorX[((i+1) % 3) + 3].classList.contains('inativo') && !marcadorX[((i+2) % 3) + 3].classList.contains('inativo')){
                    document.querySelector('.x-won').classList.remove('inativo');
                } else if (i > 5 && i < 9 && !marcadorX[((i+1) % 3) + 6].classList.contains('inativo') && !marcadorX[((i+2) % 3) + 6].classList.contains('inativo')){
                    document.querySelector('.x-won').classList.remove('inativo');
                } else if ((i % 4) == 0 && !marcadorX[((i+4) % 12)].classList.contains('inativo') && !marcadorX[((i+8) % 12)].classList.contains('inativo')){
                    document.querySelector('.x-won').classList.remove('inativo');
                } else if (!marcadorX[2].classList.contains('inativo') && !marcadorX[4].classList.contains('inativo') && !marcadorX[6].classList.contains('inativo')){
                    document.querySelector('.x-won').classList.remove('inativo');
                }

        } else if (marcadorX[i].classList.contains('inativo') && marcadorO[i].classList.contains('inativo') && multiplayer && !change){
            marcadorO[i].classList.remove('inativo');
            change = true
            
            if(!marcadorO[(i+3) % 9].classList.contains('inativo') && !marcadorO[(i+6) % 9].classList.contains('inativo')) {
                document.querySelector('.o-won').classList.remove('inativo');
            } else if (i < 3 && !marcadorO[(i+1) % 3].classList.contains('inativo') && !marcadorO[(i+2) % 3].classList.contains('inativo')){
                document.querySelector('.o-won').classList.remove('inativo');
            } else if (i > 2 && i < 6 && !marcadorO[((i+1) % 3) + 3].classList.contains('inativo') && !marcadorO[((i+2) % 3) + 3].classList.contains('inativo')){
                document.querySelector('.o-won').classList.remove('inativo');
            } else if (i > 5 && i < 9 && !marcadorO[((i+1) % 3) + 6].classList.contains('inativo') && !marcadorO[((i+2) % 3) + 6].classList.contains('inativo')){
                document.querySelector('.o-won').classList.remove('inativo');
            } else if ((i % 4) == 0 && !marcadorO[((i+4) % 12)].classList.contains('inativo') && !marcadorO[((i+8) % 12)].classList.contains('inativo')){
                document.querySelector('.o-won').classList.remove('inativo');
            } else if (!marcadorO[2].classList.contains('inativo') && !marcadorO[4].classList.contains('inativo') && !marcadorO[6].classList.contains('inativo')){
                document.querySelector('.o-won').classList.remove('inativo');
            }
        }
        console.log(change)
    }
}

const quit = document.querySelectorAll('.quit');
const nextXwon = document.querySelector('.next-x-won');
const nextOwon = document.querySelector('.next-o-won');

let contadorX = 0
let contadorO = 0

nextXwon.onclick = function () {
    document.querySelector('.x-won').classList.add('inativo');
    contadorX = contadorX + 1;
    document.querySelector('.player-x').innerHTML = '<p>PLAYER X</p><p>' + contadorX + '</p>';
    change = true
    for(let i=0; i < botoesDoJogo.length; i++){
        if(!marcadorX[i].classList.contains('inativo')){
        marcadorX[i].classList.add('inativo');
        }
        if(!marcadorO[i].classList.contains('inativo')){
        marcadorO[i].classList.add('inativo');
        }
    }
}


nextOwon.onclick = function () {
    document.querySelector('.o-won').classList.add('inativo');
    contadorO = contadorO + 1;
    document.querySelector('.player-o').innerHTML = '<p>PLAYER O</p><p>' + contadorO + '</p>';
    change = false

    for(let i=0; i < botoesDoJogo.length; i++){
        if(!marcadorX[i].classList.contains('inativo')){
        marcadorX[i].classList.add('inativo');
        }
        if(!marcadorO[i].classList.contains('inativo')){
        marcadorO[i].classList.add('inativo');
        }
    }
}

const notificacoes = document.querySelectorAll('.notificacao');

for(let i=0; i < quit.length; i++){
    quit[i].onclick = function (){
        for(let k=0; k < notificacoes.length; k++){
            if(!notificacoes[k].classList.contains('inativo')){
                notificacoes[k].classList.add('inativo');
            }
        }
        document.querySelector('.modo-game').classList.remove('inativo');

        contadorX = 0;
        contadorO = 0;
        document.querySelector('.player-o').innerHTML = '<p>PLAYER O</p><p>0</p>';
        document.querySelector('.player-x').innerHTML = '<p>PLAYER X</p><p>0</p>';

        for(let j=0; j < botoesDoJogo.length; j++){
            if(!marcadorX[j].classList.contains('inativo')){
            marcadorX[j].classList.add('inativo');
            }
            if(!marcadorO[j].classList.contains('inativo')){
            marcadorO[j].classList.add('inativo');
            }
        }
    }

}

const reset = document.querySelector('.reset')

reset.onclick = function () {
    for(let i=0; i < botoesDoJogo.length; i++){
        if(!marcadorX[i].classList.contains('inativo')){
            marcadorX[i].classList.add('inativo');
        }
        if(!marcadorO[i].classList.contains('inativo')){
            marcadorO[i].classList.add('inativo');
        }
    }
    contadorX = 0;
    contadorO = 0;
    document.querySelector('.player-o').innerHTML = '<p>PLAYER O</p><p>0</p>';
    document.querySelector('.player-x').innerHTML = '<p>PLAYER X</p><p>0</p>';
    multiplayer = false
    document.querySelector('.modo-game').classList.remove('inativo');

}
