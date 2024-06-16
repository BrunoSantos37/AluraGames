const botoes = document.querySelectorAll("a");

const capas = document.querySelectorAll(".dashboard__item__img");

const botaoAluga = (botaoAtual, capaAtual) => {
     //remove o estilo do botao devolver
     botaoAtual.classList.remove("dashboard__item__button--return");
     //muda o texto para alugar
     botaoAtual.innerHTML = "Alugar";

     //deixa a capa para alugar
     capaAtual.classList.remove("dashboard__item__img--rented");
};

const botaoDevolve = (botaoAtual, capaAtual) => {
     botaoAtual.classList.add("dashboard__item__button--return");
     botaoAtual.innerHTML = "Devolver";

     capaAtual.classList.add("dashboard__item__img--rented");
};

const alterarStatus = (indice) => {
     const botaoAtual = botoes[indice - 1];
     const capaAtual = capas[indice - 1];

     //classList.contains() retorna um valor booleano
     const botaoDesligado = botaoAtual.classList.contains(
          "dashboard__item__button--return"
     );

     if (botaoDesligado) {
          botaoAluga(botaoAtual, capaAtual);
     } else {
          botaoDevolve(botaoAtual, capaAtual);
     }
};
