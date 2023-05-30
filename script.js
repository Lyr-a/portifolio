/*import Typed from `https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js`


var typed = new Typed(".auto-type", {
    strings: ["meu nome é Estêvão."],
    typeSpeed: 70,
    backSpeed: 140,
    loop: false
})
*/      

const boxWrapper = document.getElementById("lista");

for (var i = 0; i < 9; i++) {
    
    const box = document.createElement("div");
    box.classList.add("box");
    boxWrapper.appendChild(box)
}

function modal(){

    let modal = document.querySelector('.modal')

    modal.style.display = 'block';

}

function fmodal(){

    let modal = document.querySelector('.modal')

    modal.style.display = 'none';

}

function copiargmail() {

    navigator.clipboard.writeText("estevaoturbay@gmail.com");
  
    // Alert the copied text
    alert("Gmail copiado para a área de Transferência");
  }











