const inicioVsCpu = document.querySelector('.vs-cpu');
const inicioMultiplayer = document.querySelector('.multiplayer');
const botoesDoJogo = document.querySelectorAll('.botao');
const marcadorX = document.querySelectorAll('.marca-x');
const marcadorO = document.querySelectorAll('.marca-o');
const multiplayer = true;
let change = true

inicioMultiplayer.onclick = function () {
    document.querySelector('.modo-game').classList.add('inativo');
}

for(let i=0; i < botoesDoJogo.length; i++) {
    botoesDoJogo[i].onclick = function () {
        if (marcadorX[i].classList.contains('inativo') && marcadorO[i].classList.contains('inativo') && multiplayer && change ) {
            marcadorX[i].classList.remove('inativo');
            change = false;
        } else if (marcadorX[i].classList.contains('inativo') && marcadorO[i].classList.contains('inativo') && multiplayer && !change){
            marcadorO[i].classList.remove('inativo');
            change = true
        }
        console.log(change)
    }
}
