export default function showMore(){
    const buttons = document.querySelectorAll('.button-unwrap');
    const buttonText = document.querySelectorAll('.button-unwrap__text');
    const buttonImg = document.querySelectorAll('.button-unwrap__arrow');

    const fixBrandsBlock = document.querySelector('.fix__desc');
    const servicesBlock = document.querySelector('.services__text');
    const repairBlock = document.querySelector('.repair-type__desc');



    function hideShowBrandsBlock(classMore, classArrowHide, textHide, textShow,button, buttonText, buttonImg){

        
        function showMore(){
            if (button.classList.contains('services__button')){
                servicesBlock.classList.toggle(classMore);
                buttonText.innerText === textHide ? buttonText.innerText = "Читать далее" : buttonText.innerText = textHide;
                buttonImg.classList.toggle(classArrowHide);
            }
            if (button.classList.contains('fix__toggle')){
                fixBrandsBlock.classList.toggle(classMore);
                buttonText.innerText === textHide ? buttonText.innerText = textShow : buttonText.innerText = textHide;
                buttonImg.classList.toggle(classArrowHide);
            }
            if (button.classList.contains('repair-type__toggle')){
                repairBlock.classList.toggle(classMore);
                buttonText.innerText === textHide ? buttonText.innerText = textShow : buttonText.innerText = textHide;
                buttonImg.classList.toggle(classArrowHide);
            }
        }  

        return showMore;
    }

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', hideShowBrandsBlock('show-more','button-unwrap__arrow--hide','Скрыть','Показать все', buttons[i], buttonText[i], buttonImg[i]));
    }
} 