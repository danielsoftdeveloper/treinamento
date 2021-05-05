// Recebe o modal de filmes
var modal = document.getElementById("myModal");

// Recebe o elemento do botão que abre o modal
var btn = document.getElementById("myBtn");

// Recebe o <span> elemento ue fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando clica no botão mostra o modal com vídeo.
btn.onclick = function() {
  modal.style.display = "block";
}

//uando usuário clica em <span> (x), fecha o modal de filmes
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clica fora fecha o modal de filmes
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*  */
// Recebe o modal de informaçõe
var modal2 = document.getElementById("myModal2");

// Recebe o elemento do botão que abre o modal de informações
var btn2 = document.getElementById("myBtn2");

// Recebe o <span> elemento ue fecha o modal
var span2 = document.getElementsByClassName("close")[1];
 
// Quando clica no botão mostra o modal de informações.
btn2.onclick = function() {
  modal2.style.display = "block";
}

//uando usuário clica em <span> (x), fecha o modal de filmes
span2.onclick = function() {
  modal2.style.display = "none";
}

// Quando o usuário clica fora fecha o modal de filmes
window.onclick = function(event2) {
  if (event2.target == modal2) {
    modal2.style.display = "none";
  }
} 

/* script para pausar e da play no vídeo */

var btn = document.getElementById("myBtn2");
/* pausa video */
var video = document.getElementById("myVideo");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
    
  }
}