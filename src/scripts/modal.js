const bgModal = document.getElementsByClassName('modal-shadow');
const showModal = document.getElementById("modalWin");


function showModalWindow () {
    showModal.classList.remove("showModal");
};

function closeModalWindow () {
    showModal.classList.contains('showModal') ? successModal.classList.add('successModalState') : showModal.classList.add('showModal')
};


window.onclick = function(event) {
    if (event.target == modalWin) {
      modalWin.classList.add('showModal');
    }
  };