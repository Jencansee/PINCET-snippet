//script for select in modal window

let select = function () {
    let selectHeader = document.querySelectorAll('.visual-value__container');
    let selectItem = document.querySelectorAll('.selection-options__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('show-sorting');
    }

    function selectChoose(){
        let text = this.innerText,
            select =  this.closest('.visual-value'),   
            currentText = select.querySelector('.visual-value__current');

        currentText.innerText = text;
        select.classList.remove('show-sorting')
    }
}

select();