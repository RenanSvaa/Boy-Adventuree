const personagem = document.getElementById('personagem');
let posicaoHorizontal = 0;
let posicaoVertical = 0;
const step = 10;

//função que atualiza a posição do personagem no DOM
function updatePersonagemPosition(params) {
    //Definindo a posição horizontal do personagem
    personagem.style.left = posicaoHorizontal + 'px';


    //Definindo a posição vertical do personagem
    personagem.style.top = posicaoVertical + 'px';
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowUp':
        posicaoVertical -= step;
        break;
      case 'ArrowDown':
        posicaoVertical += step;
        break;
      case 'ArrowLeft':
        posicaoHorizontal -= step;
        break;
      case 'ArrowRight':
        posicaoHorizontal += step;
        break;
    }
  
    updatePersonagemPosition();
  });



