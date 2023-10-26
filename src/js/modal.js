export default function modal () {
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

            if (window.innerWidth > 1366){
                menu.classList.toggle('content--blur');
            }
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
} 