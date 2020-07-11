const modalForm = document.getElementById('modal-form');
const submitMode = document.getElementById('submitMode');
const successModal = document.getElementById('submitMode'); // modal of success

function submitFunction() {
  successModal.classList.remove('successModalState');

  window.onclick = function(event) {
    if (event.target == submitMode) {
      submitMode.classList.add('successModalState');
    };
  };
};


function closeSuccessModal() {
    successModal.classList.contains('successModalState') ? successModal.classList.remove('successModalState') : successModal.classList.add('successModalState')
};
 
modalForm.addEventListener('submit', e => {
  e.preventDefault();
  closeModalWindow();
});