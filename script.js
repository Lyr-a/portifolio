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