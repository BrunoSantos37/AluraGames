//pega os botoes do html e coloca num array
const botoes = document.querySelectorAll("a");

//pega as imgs e coloca num array
const capas = document.querySelectorAll(".dashboard__item__img");

//função para ativar o botao alugar, passando o(a) botao/capa atual
const botaoAluga = (botaoAtual, capaAtual) => {
     //remove o estilo do botao devolver
     botaoAtual.classList.remove("dashboard__item__button--return");
     //muda o texto para alugar
     botaoAtual.innerHTML = "Alugar";
     //deixa a capa para alugar
     capaAtual.classList.remove("dashboard__item__img--rented");
};

//funçao para ativar o botato devolver, passando o(a) botao/capa atual
const botaoDevolve = (botaoAtual, capaAtual) => {
     //ativa o estilo do botao devolver
     botaoAtual.classList.add("dashboard__item__button--return");
     //muda o texto para devolver
     botaoAtual.innerHTML = "Devolver";
     //coloca a capa ocupada
     capaAtual.classList.add("dashboard__item__img--rented");
};

//funçao altera os status dos games, clickando nos botoes
const alterarStatus = (indice) => {
     //botao atual
     const botaoAtual = botoes[indice - 1];
     //capa atual
     const capaAtual = capas[indice - 1];

     //classList.contains() retorna um valor booleano
     //verifica se tem a classe que ativa o estilo devolver do botao
     const botaoDesligado = botaoAtual.classList.contains(
          "dashboard__item__button--return"
     );
     // se tiver a classe acima, chama as funcao aluga se nao devolve
     // passando os parametros do botao e capa atual
     if (botaoDesligado) {
          botaoAluga(botaoAtual, capaAtual);
     } else {
          botaoDevolve(botaoAtual, capaAtual);
     }
};
