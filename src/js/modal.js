export default function modal () {
    const menuOpen = document.querySelector('.header__button-burger');
    const menuClose = document.querySelector('.menu-mobile__button');
    const menu = document.querySelector('.menu');

    const feedbackOpen = document.querySelectorAll('.buttons-connections__feedback');
    const feedbackClose = document.querySelector('.feedback__button');
    const feedbackBlock = document.querySelector('.feedback');

    const callOpen = document.querySelectorAll('.buttons-connections__call');
    const callClose = document.querySelector('.call__button');
    const callBlock = document.querySelector('.call');

    const body = document.querySelector('body');
    const but = document.querySelectorAll('.header-desktop__button');
    const contentBlock = document.querySelector('.content');
    const header = document.querySelector('.header');

    function menuToogle(block, activeClass){
        return (event) => {

            if (!block.classList.contains(activeClass)){
                setTimeout(() => window.addEventListener('click', closePopUp(block, activeClass), {once: true}), 300);
            }

            block.classList.toggle(activeClass);
            // contentBlock.classList.toggle('overflow');
            contentBlock.classList.toggle('content--blur');
            // contentBlock.classList.toggle('content--fixed');

            if (window.innerWidth < 1366){
                contentBlock.classList.toggle('content--fixed');

                if (event.target.classList.contains('buttons-connections__feedback')||
                    event.target.classList.contains('buttons-connections__call')||
                    event.target.classList.contains("buttons-connections__img")
                    ){
                        menu.classList.remove('menu--active');
                        contentBlock.classList.add('content--fixed');
                        contentBlock.classList.add('content--blur');
                }
            }

            if (window.innerWidth > 1366){
                menu.classList.toggle('content--blur');
                body.classList.toggle('content--fixed');
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

    feedbackOpen[0].addEventListener('click', menuToogle(feedbackBlock , 'feedback--active'));
    feedbackOpen[1].addEventListener('click', menuToogle(feedbackBlock , 'feedback--active'));
    feedbackClose.addEventListener('click', menuToogle(feedbackBlock, 'feedback--active'));

    callOpen[0].addEventListener('click', menuToogle(callBlock, 'call--active'));
    callOpen[1].addEventListener('click', menuToogle(callBlock, 'call--active'));
    callClose.addEventListener('click', menuToogle(callBlock, 'call--active'));
} 