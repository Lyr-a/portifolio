/*import Typed from `https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js`


var typed = new Typed(".auto-type", {
    strings: ["meu nome é Estêvão."],
    typeSpeed: 70,
    backSpeed: 140,
    loop: false
})
*/      

//#region General

var mais = 0;
const proj = ["Saab", "Volvo", "BMW","caio","rafael","psg_baby","rodrigo","ira","paquistao","LAURA"];

const boxWrapper = document.getElementById("lista");

for (var i = 0; i < 3; i++) {
        
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = proj[i];
    box.style.backgroundImage = "url('images/perfil.jpg')";
    boxWrapper.appendChild(box)
    
}

//#endregion

//#region Habilidades

const texto = document.getElementById('txt_desc');

const ableton = document.getElementById('ableton');
const js = document.getElementById('js');
const python = document.getElementById('python');
const java = document.getElementById('java');
const html = document.getElementById('html');
const css = document.getElementById('css');
const blender = document.getElementById('blender');
const photoshop = document.getElementById('photoshop');

ableton.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = 'ABLETON';
});
js.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = 'js';
});
python.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = 'pypypyppyy';
});
java.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = 'java/???';
});
html.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = 'AGA TE EMI ELI';
});
css.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = 'cê esssss esssss';
});
blender.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = 'blend blend';
});
photoshop.addEventListener('mouseover', function handleMouseOver() {
    texto.innerHTML = 'photoshop!!';
});

//#endregion

//#region Funcões

function vermais(){

var btn = document.getElementById("btn_sm");

if (mais == 0){


    for (var i = 0; i < proj.length-3; i++) {
        
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundImage = "url('images/perfil.jpg')";
        box.innerHTML = proj[i+3];
        boxWrapper.appendChild(box);
        
    }

    btn.innerHTML = "Ver menos";
    mais = 1;
}

else{
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
    box.remove();
    });

    
    for (var i = 0; i < 3; i++) {
        
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = proj[i];
        box.style.backgroundImage = "url('images/perfil.jpg')";
        boxWrapper.appendChild(box)
        

    }

    btn.innerHTML = "Ver mais";
    mais = 0;

}

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

//#endregion
