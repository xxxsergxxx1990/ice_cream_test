!function(){!function(){var e={openModalBtn:document.querySelector("[data-modal-ingredients-open]"),closeModalBtn:document.querySelector("[data-modal-ingredients-close]"),modal:document.querySelector("[data-modal-ingredients]")};function n(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}(),Footer,function(){var e={openMenuBtn:document.querySelector("[data-about-open]"),closeMenuBtn:document.querySelector("[data-about-close]"),menu:document.querySelector("[data-about]"),body:document.querySelector("body"),menuList:document.querySelector(".menu-list")};function n(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),e.body.classList.remove("no-scroll")}))}();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})}();
//# sourceMappingURL=index.d82188bc.js.map
