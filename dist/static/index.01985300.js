function $e5c4c14d35e51da5$export$9f42c466da956b3() {
    const menuBtn = document.querySelector(".burger-btn");
    const menuWrap = document.querySelector(".menu");
    const menuLink = document.querySelectorAll(".menu__link");
    const headerSite = document.querySelector(".header");
    const body = document.querySelector(".body");
    const toggleMenu = ()=>{
        menuWrap.classList.toggle("menu-active");
        menuBtn.classList.toggle("menu-active");
        headerSite.classList.toggle("menu-active");
        if (menuWrap.classList.contains("menu-active")) {
            menuBtn.setAttribute("aria-label", "close menu");
            menuBtn.setAttribute("aria-expanded", "true");
        } else {
            menuBtn.setAttribute("aria-label", "open menu");
            menuBtn.setAttribute("aria-expanded", "false");
        }
    };
    menuBtn.addEventListener("click", ()=>{
        toggleMenu(body.classList.toggle("menu-active"));
    });
    menuLink.forEach((link)=>{
        link.addEventListener("click", ()=>{
            toggleMenu(body.classList.remove("menu-active"));
        });
    });
    for(let i = 0; i < menuLink.length; i++)menuLink[i].addEventListener("click", function() {
        for(let u = 0; u < menuLink.length; u++)menuLink[u].classList.remove("menu-active");
        this.classList.add("menu-active");
    });
}
$e5c4c14d35e51da5$export$9f42c466da956b3();


function $5868948939730058$export$38e42c68cf43b5d4() {
    const header = document.querySelector(".menu");
    const headerContainer = document.querySelector(".header__container");
    window.addEventListener("scroll", ()=>{
        let scrollDistance = window.scrollY;
        if (scrollDistance > 60) {
            header.classList.add("header-scrolling");
            headerContainer.classList.add("header-scrolling");
        } else {
            header.classList.remove("header-scrolling");
            headerContainer.classList.remove("header-scrolling");
        }
        document.querySelectorAll(".section").forEach((el, i)=>{
            if (el.offsetTop - document.querySelector(".header").clientHeight <= scrollDistance) {
                document.querySelectorAll(".menu__link").forEach((el)=>{
                    if (el.classList.contains("menu-active")) el.classList.remove("menu-active");
                });
                document.querySelectorAll(".menu__item")[i].querySelector(".menu__link").classList.add("menu-active");
            }
        });
    });
}
$5868948939730058$export$38e42c68cf43b5d4();


function $c51b7a5808d8c300$export$96e4b36520c26a2c() {
    const btns = document.querySelectorAll("*[data-modal-open-btn]");
    const modalOverlay = document.querySelector(".modals__overlay");
    const modalsItem = document.querySelectorAll(".modals__item");
    const body = document.querySelector(".body");
    const modalButtonClose = document.querySelectorAll(".modals-btn-close");
    const menuWrap = document.querySelector(".menu");
    const menuBtn = document.querySelector(".burger-btn");
    const header = document.querySelector(".header");
    const wrapper = document.querySelector(".wrapper");
    const focusElement = [
        "a[href]",
        "input",
        "button",
        "select",
        "textarea"
    ];
    btns.forEach((el)=>{
        el.addEventListener("click", (e)=>{
            let previousActiveElement = e.currentTarget;
            let path = e.currentTarget.getAttribute("data-modal-open-btn");
            modalsItem.forEach((el)=>{
                el.classList.remove("modals__item--visible");
            });
            const targetMOdal = document.querySelector(`[data-modal-window="${path}"]`);
            wrapper.setAttribute("inert", "true");
            modalOverlay.classList.add("modals__overlay--visible");
            body.classList.add("menu-active");
            targetMOdal.classList.add("modals__item--visible");
            const focusElementModal = targetMOdal.querySelectorAll(focusElement);
            if (targetMOdal) setTimeout(()=>{
                focusElementModal[0].focus();
            }, 200);
            menuWrap.classList.remove("menu-active");
            menuBtn.classList.remove("menu-active");
            header.classList.remove("menu-active");
            if (menuWrap.classList.contains("menu-active")) {
                menuBtn.setAttribute("aria-label", "close menu");
                menuBtn.setAttribute("aria-expanded", "true");
            } else {
                menuBtn.setAttribute("aria-label", "open menu");
                menuBtn.setAttribute("aria-expanded", "false");
            }
            modalButtonClose.forEach((el)=>{
                el.addEventListener("click", ()=>{
                    previousActiveElement.focus();
                });
            });
        });
    });
    modalOverlay.addEventListener("click", (e)=>{
        if (e.target == modalOverlay) {
            wrapper.removeAttribute("inert", "true");
            modalOverlay.classList.remove("modals__overlay--visible");
            body.classList.remove("menu-active");
            modalsItem.forEach((el)=>{
                el.classList.remove("modals__item--visible");
            });
        }
    });
    modalButtonClose.forEach((el)=>{
        el.addEventListener("click", ()=>{
            wrapper.removeAttribute("inert", "true");
            modalOverlay.classList.remove("modals__overlay--visible");
            body.classList.remove("menu-active");
            modalsItem.forEach((el)=>{
                el.classList.remove("modals__item--visible");
            });
        });
    });
}
$c51b7a5808d8c300$export$96e4b36520c26a2c();


// import { Swiper } from 'swiper';
// import { Pagination } from 'swiper/modules';
function $f58ec3221040e229$export$b38bf4f33e9e4c25() {
    window.addEventListener("DOMContentLoaded", ()=>{
        const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback)=>{
            let swiper;
            breakpoint = window.matchMedia(breakpoint);
            const enableSwiper = function(className, settings) {
                swiper = new Swiper(className, settings);
                if (callback) callback(swiper);
            };
            const checker = function() {
                if (breakpoint.matches) return enableSwiper(swiperClass, swiperSettings);
                else {
                    if (swiper !== undefined) swiper.destroy(true, true);
                    return;
                }
            };
            breakpoint.addEventListener("change", checker);
            checker();
        };
        const someFunc = (instance)=>{
            if (instance) instance.on("slideChange", function(e) {
                console.log("*** mySwiper.activeIndex", instance.activeIndex);
            });
        };
        resizableSwiper("(min-width: 10px)", ".swiper", {
            // modules: [Pagination],
            // navigation: {
            // 	nextEl: '.swiper-button-next',
            // 	prevEl: '.swiper-button-prev',
            // },
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true
            },
            direction: "horizontal",
            // loop: false, // true - круговой слайдер, false - слайдер с конечными положениями 
            // speed: 500, // скорость переключения слайдов
            // effect:"stider', // cards, coverflow, flip, fade, cube
            // initialstide: 1, // Начинаем со 2 слайдера // freeMode: true, // можно перетаскивать как ленту
            // slidesPerGroup: 2,
            slidesPerView: 1,
            spaceBetween: 16,
            // centeredSlides: true,
            breakpoints: {
                574: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 16
                },
                1023: {
                    spaceBetween: 32,
                    slidesPerView: 3
                }
            }
        });
    });
}
$f58ec3221040e229$export$b38bf4f33e9e4c25();




