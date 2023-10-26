import '../scss/style.scss';
import '../scss/media.scss';

const menuOpen = document.querySelector('.header__button-burger');
const menuClose = document.querySelector('.menu-mobile__button');
const menu = document.querySelector('.menu');

const feedbackOpen = document.querySelector('.header__button-repair');
const feedbackClose = document.querySelector('.feedback__button');
const feedbackBlock = document.querySelector('.feedback');

const callOpen = document.querySelector('.header__button-status');
const callClose = document.querySelector('.call__button');
const callBlock = document.querySelector('.call');

const body = document.querySelector('body');
const but = document.querySelectorAll('.header-desktop__button');
const contentBlock = document.querySelector('.content');
const header = document.querySelector('.header');


function menuToogle(block, activeClass){
    return (e) => {

        if (!block.classList.contains(activeClass)){
            setTimeout(() => window.addEventListener('click', closePopUp(block, activeClass), {once: true}), 300);
        }

        block.classList.toggle(activeClass);
        body.classList.toggle('overflow');
        contentBlock.classList.toggle('content--blur');

        if (window.innerWidth > 1120){
            menu.classList.toggle('content--blur');
        }

        // if (!block.classList.contains(activeClass)){
        //     block.classList.add(activeClass);
        //     body.classList.add('overflow');
        //     contentBlock.classList.add('content--blur');

        //     // window.addEventListener('click', contentHide(block));
        //     setTimeout(()=> window.addEventListener('click', contentHide(block, activeClass), {once: true}), 500);
            
        //     if (window.innerWidth > 1120){
        //         menu.classList.add('content--blur');
        //     }
        // } else {
        //     block.classList.remove(activeClass);
        //     body.classList.remove('overflow');
        //     contentBlock.classList.remove('content--blur');

        //     if (window.innerWidth > 1120){
        //         menu.classList.remove('content--blur');
        //     }
        // }
    };
}
function closePopUp(block,activeClass){
    return (e) => {
        if(!block.contains(e.target) && contentBlock.classList.contains('content--blur')){
            menuToogle(block, activeClass)();
        }
    };
}

menuOpen.addEventListener('click', menuToogle(menu, 'menu--active'));
menuClose.addEventListener('click', menuToogle(menu, 'menu--active'));

feedbackOpen.addEventListener('click', menuToogle(feedbackBlock , 'feedback--active'));
but[0].addEventListener('click', menuToogle(feedbackBlock , 'feedback--active'));
feedbackClose.addEventListener('click', menuToogle(feedbackBlock, 'feedback--active'));

callOpen.addEventListener('click', menuToogle(callBlock, 'call--active'));
but[1].addEventListener('click', menuToogle(callBlock, 'call--active'));
callClose.addEventListener('click', menuToogle(callBlock, 'call--active'));


let swiperFix = null;
let swiperRepair = null;
let swiperPrices = null;

function fixSliderInit () {
    if (!swiperFix) {
        swiperFix = new Swiper('.fix__mobile', {
            loop: true,
            slidesPerView: 1.15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard:{
                enabled: true,
                onlyInViewport:true,
            },
            
            breakpoints:{
                350: {
                    slidesPerView: 1.35,
                    slidesPerGroup: 1,
                    spaceBetween: 17,
                },
                400: {
                    slidesPerView: 1.55,
                    slidesPerGroup: 1,
                    spaceBetween: 17,
                },
                450: {
                    slidesPerView: 1.75,
                    slidesPerGroup: 1,
                    spaceBetween: 17,
                },
                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 17,
                },
            }
            });
    }
}

function repairSliderInit(){
    if (!swiperRepair) {
        swiperRepair = new Swiper('.repair-type__mobile', {
            loop: true,
            slidesPerView: 1.15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard:{
                enabled: true,
                onlyInViewport:true
            },
            
            breakpoints:{
                350: {
                    slidesPerView: 1.35,
                    spaceBetween: 17,
                },
                400: {
                    slidesPerView: 1.55,
                    spaceBetween: 17,
                },
                450: {
                    slidesPerView: 1.75,
                    spaceBetween: 17,
                },
                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 17,
                },
            }
            });
    }
}

function pricesSliderInit(){
    if (!swiperPrices) {
        swiperPrices = new Swiper('.prices__mobile', {
            loop: true,
            slidesPerView: 1.15,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            keyboard:{
                enabled: true,
                onlyInViewport:true
            },
            
            breakpoints:{
                350: {
                    slidesPerView: 1.35,
                    spaceBetween: 17,
                },
                400: {
                    slidesPerView: 1.55,
                    spaceBetween: 17,
                },
                450: {
                    slidesPerView: 1.75,
                    spaceBetween: 17,
                },
                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    spaceBetween: 17,
                },
            }
            });
    }
}
  
function sliderDestroy (slider) {
    if (slider) {
        slider.destroy();
        slider = null;
    }
}

fixSliderInit ();
repairSliderInit();
pricesSliderInit();

window.addEventListener('resize', function(){
    let widthClient = window.innerWidth;

    if (!swiperFix && !swiperRepair && !swiperPrices && widthClient < 767){
        fixSliderInit ();
        repairSliderInit();
        pricesSliderInit();
    }
    if (widthClient > 767){
        sliderDestroy(swiperFix);
        sliderDestroy(swiperRepair);
        sliderDestroy(swiperPrices);

    }
});


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

// button.addEventListener('click', hideShowBrandsBlock('fix__desc--hidden','button-unwrap__arrow--hide','Скрыть','Показать все'));





