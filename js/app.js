const alterarStatus = (id) => {
     const gameAtual = document.querySelector(`#game-${id}`);
     const capa = gameAtual.querySelector(".dashboard__item__img");
     const botao = gameAtual.querySelector(".dashboard__item__button");

     if (capa.classList.contains("dashboard__item__img--rented")) {
          capa.classList.remove("dashboard__item__img--rented");
          botao.classList.remove("dashboard__item__button--return");
          botao.innerText = "Alugar";
     } else {
          capa.classList.add("dashboard__item__img--rented");
          botao.classList.add("dashboard__item__button--return");
          botao.innerText = "Devolver";
     }
};
