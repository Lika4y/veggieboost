import clickOnHeaderMenu from "../handlers/clickOnHeaderMenu.js";

const openMenuClick = document.querySelector(".header-menu");
const headerNavList = document.querySelector(".header-nav");
const mainTag = document.querySelector(".main");

openMenuClick.addEventListener("click", () => {
openMenuClick.classList.toggle("header-menu--open");
clickOnHeaderMenu(openMenuClick, mainTag);
headerNavList.classList.toggle("header-nav-selected-menu"); 
if(headerNavList.classList.contains("header-nav-selected-menu")) {
    setTimeout(() => { headerNavList.style.opacity = "1"; }, 200)
} else {
    setTimeout(() => { headerNavList.style.opacity = "0"; }, 300);
}
});

document.querySelectorAll('.header-nav ul li a').forEach(function(link) {
    link.addEventListener('click', function() {
        if(!headerNavList.classList.contains("header-nav-selected-menu")) return false;
        document.querySelector('.selected-menu').remove();
        document.querySelector('.overlay').remove();
        openMenuClick.classList.remove("header-menu--open");
        headerNavList.classList.remove("header-nav-selected-menu");
        headerNavList.style.opacity = "0"; 
        document.body.style.overflow = "";
        openMenuClick.innerHTML = `<svg width="20" height="14" viewBox="0 0 20 14" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 0.995C0 0.445 0.446 0 0.995 0H9.005C9.26889 7.86455e-09 9.52197 0.10483 9.70857 0.291429C9.89517 0.478027 10 0.731109 10 0.995C10 1.25889 9.89517 1.51197 9.70857 1.69857C9.52197 1.88517 9.26889 1.99 9.005 1.99H0.995C0.731109 1.99 0.478028 1.88517 0.291429 1.69857C0.10483 1.51197 0 1.25889 0 0.995ZM0 7C0 6.45 0.446 6.005 0.995 6.005H19.005C19.2689 6.005 19.522 6.10983 19.7086 6.29643C19.8952 6.48303 20 6.73611 20 7C20 7.26389 19.8952 7.51697 19.7086 7.70357C19.522 7.89017 19.2689 7.995 19.005 7.995H0.995C0.731109 7.995 0.478028 7.89017 0.291429 7.70357C0.10483 7.51697 0 7.26389 0 7ZM0.995 12.01C0.731109 12.01 0.478028 12.1148 0.291429 12.3014C0.10483 12.488 0 12.7411 0 13.005C0 13.2689 0.10483 13.522 0.291429 13.7086C0.478028 13.8952 0.731109 14 0.995 14H13.005C13.2689 14 13.522 13.8952 13.7086 13.7086C13.8952 13.522 14 13.2689 14 13.005C14 12.7411 13.8952 12.488 13.7086 12.3014C13.522 12.1148 13.2689 12.01 13.005 12.01H0.995Z"
            fill="#77AC63" />
        </svg>`;
    });
});