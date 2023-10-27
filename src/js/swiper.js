export default function modal(){
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
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    550: {
                        slidesPerView: 2.30,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    600: {
                        slidesPerView: 2.4,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    650: {
                        slidesPerView: 2.75,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    700: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
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
                        slidesPerView: 2,
                        spaceBetween: 17,
                    },
                    550: {
                        slidesPerView: 2.30,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    600: {
                        slidesPerView: 2.4,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    650: {
                        slidesPerView: 2.75,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    700: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
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
                    300: {
                        slidesPerView: 1.05,
                        slidesPerGroup: 1,
                        spaceBetween: 17,
                    },
                    350: {
                        slidesPerView: 1.20,
                        slidesPerGroup: 1,
                        spaceBetween: 17,
                    },
                    400: {
                        slidesPerView: 1.40,
                        slidesPerGroup: 1,
                        spaceBetween: 17,
                    },
                    450: {
                        slidesPerView: 1.60,
                        slidesPerGroup: 1,
                        spaceBetween: 17,
                    },
                    550: {
                        slidesPerView: 1.75,
                        slidesPerGroup: 1,
                        spaceBetween: 17,
                    },
                    550: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    650: {
                        slidesPerView: 2.30,
                        slidesPerGroup: 2,
                        spaceBetween: 17,
                    },
                    700: {
                        slidesPerView: 2.5,
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
} 