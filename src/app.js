
window.onload = function () {
    myScript();
}

window.onresize = function () {
    myScript();
}

 let open = document.querySelector("#open");
    let menuOpen = document.querySelector(".menu-open");
    let mobilMenu = document.querySelector(".header__menu");
    let close = document.querySelector("#close");
    let box = document.querySelector(".header__picture>img");
    let mobilLogo = document.querySelector(".header__logo--mobile");

function myScript() {
   

    let width = box.offsetWidth;
    let openHeight = box.offsetHeight;
    let wW = screen.width;

    open.addEventListener('click', () => {
        mobilMenu.style.display = "block";
    });

    close.addEventListener('click', () => {
        mobilMenu.style.display = "none";
    });

    window.onscroll = function () {
        var y = window.scrollY;
        if (wW < 796) {
            if (openHeight < y + 50) {
                menuOpen.style.cssText = "background-color:var(--highline);color: white";
                mobilLogo.style.display = "block";
                menuOpen.style.boxShadow = "2px 2px 2px 1px rgba(200, 200, 200, 0.3)";
            } else {
                menuOpen.style.backgroundColor = "transparent";
                mobilLogo.style.display = "none";
                menuOpen.style.boxShadow = "none";
            }
        } else {
            if (openHeight > y) {
                menuOpen.style.cssText = "background-color:var(--highline);color: white";
                mobilLogo.style.display = "block";
                mobilMenu.style.boxShadow = "none";
                mobilMenu.style.justifyContent = "end";
                document.querySelector(".menu__logo").style.display = "none";
            } else {
                menuOpen.style.backgroundColor = "transparent";
                mobilLogo.style.display = "none";
                mobilMenu.style.justifyContent = "space-between";
                document.querySelector(".menu__logo").style.display = "block";
                mobilMenu.style.boxShadow = " 2px 2px 2px 1px rgba(200, 200, 200, 0.3)";
            }

        }

    };
};