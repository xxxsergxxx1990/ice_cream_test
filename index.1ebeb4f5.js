(()=>{const e={openMenuBtn:document.querySelector("[data-about-open]"),closeMenuBtn:document.querySelector("[data-about-close]"),menu:document.querySelector("[data-about]"),body:document.querySelector("body"),menuList:document.querySelector(".menu-list")};function n(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),e.body.classList.remove("no-scroll")}))})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});
//# sourceMappingURL=index.1ebeb4f5.js.map
