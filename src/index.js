//Variaveis constantes para facilitar a mensagem final
const mensagem1 = "O Herói de nome ";
const mensagem2 = " está no nível ";


//Variavel matriz armazenando os herois cadastrados
let heroi = [
  ["Jorginho Mega-Mente", 5000],
  ["Elvira Cabelo-flamejante", 10009],
  ["Star", 2],
  ["All Might", 3000],
];

//Mensagem mostrando todos os herois cadastrados
console.log(
  "Estes são os herois cadastrados: \n" +
    heroi[0][0] +
    " \n" +
    heroi[1][0] +
    " \n" +
    heroi[2][0] +
    "\n" +
    heroi[3][0]
);

//Quebra de linha para melhorar a visualização no console
console.log("\n");

//Estrutura de repetição para verificar todos os herois cadastrados
for (var i = 0; i < heroi.length; i++) {
  //Variaveis armazenando o heroi escolhido para verificação de XP
  let heroiSolicitado = heroi[i][0];
  let xpHeroiSolicitado = heroi[i][1];

  //Verificar o XP dos herois
  testeDeXP();

  function testeDeXP() {
    if (xpHeroiSolicitado < 1000) {
      console.log(mensagem1 + heroiSolicitado + mensagem2 + "Ferro.");
    } else if (xpHeroiSolicitado >= 1001 && xpHeroiSolicitado <= 2000) {
      console.log(mensagem1 + heroiSolicitado + mensagem2 + "Bronze.");
    } else if (xpHeroiSolicitado >= 2001 && xpHeroiSolicitado <= 5000) {
      console.log(mensagem1 + heroiSolicitado + mensagem2 + "Prata.");
    } else if (xpHeroiSolicitado >= 5001 && xpHeroiSolicitado <= 7000) {
      console.log(mensagem1 + heroiSolicitado + mensagem2 + "Ouro.");
    } else if (xpHeroiSolicitado >= 7001 && xpHeroiSolicitado <= 8000) {
      console.log(mensagem1 + heroiSolicitado + mensagem2 + "Platina.");
    } else if (xpHeroiSolicitado >= 8001 && xpHeroiSolicitado <= 9000) {
      console.log(mensagem1 + heroiSolicitado + mensagem2 + "Ascendente.");
    } else if (xpHeroiSolicitado >= 9001 && xpHeroiSolicitado <= 10000) {
      console.log(mensagem1 + heroiSolicitado + mensagem2 + "Imortal.");
    } else if (xpHeroiSolicitado >= 10001) {
      console.log(mensagem1 + heroiSolicitado + mensagem2 + "Radiante.");
    }
  } //fecha a função testeDeXP
} //fecha o for
