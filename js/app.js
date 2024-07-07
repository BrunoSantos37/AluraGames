let jogosAlugados = 0;
const alterarStatus = (id) => {
     const gameAtual = document.querySelector(`#game-${id}`);
     const capa = gameAtual.querySelector(".dashboard__item__img");
     const botao = gameAtual.querySelector(".dashboard__item__button");
     const nameGame = gameAtual.querySelector(".dashboard__item__name");

     const aceitou = confirm(
          `Você tem certeza que deseja ${botao.textContent} ${nameGame.textContent}?`
     );

     if (aceitou) {
          if (capa.classList.contains("dashboard__item__img--rented")) {
               capa.classList.remove("dashboard__item__img--rented");
               botao.classList.remove("dashboard__item__button--return");
               botao.innerText = "Alugar";
               jogosAlugados--;
          } else {
               capa.classList.add("dashboard__item__img--rented");
               botao.classList.add("dashboard__item__button--return");
               botao.innerText = "Devolver";
               jogosAlugados++;
          }
     }
     console.log(`Jogos Alugados : ${jogosAlugados}`);
};
