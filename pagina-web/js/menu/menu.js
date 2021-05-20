/* Alternar entre adicionar e remover a classe "responsiva" para topnav quando o usuário clicar no ícone */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }