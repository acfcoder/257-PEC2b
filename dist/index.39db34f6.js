function e(){let e=document.querySelector("#open"),o=document.querySelector(".menu-open"),t=document.querySelector(".header__menu"),n=document.querySelector("#close"),l=document.querySelector(".header__picture>img"),r=document.querySelector(".header__logo--mobile"),c=(l.offsetWidth,l.offsetHeight),s=screen.width;e.addEventListener("click",(()=>{t.style.display="block"})),n.addEventListener("click",(()=>{t.style.display="none"})),document.documentElement.style.setProperty("--highline","#768394"),window.onscroll=function(){var e=window.scrollY;s<796?c<e+50?(o.style.cssText="background-color:var(--highline);color: white",r.style.display="block",o.style.boxShadow="2px 2px 2px 1px rgba(200, 200, 200, 0.3)"):(o.style.backgroundColor="transparent",r.style.display="none",o.style.boxShadow="none"):c>e?(o.style.cssText="background-color:var(--highline);color: white",r.style.display="block",t.style.boxShadow="none",t.style.justifyContent="end",document.querySelector(".menu__logo").style.display="none"):(o.style.backgroundColor="transparent",r.style.display="none",t.style.justifyContent="space-between",document.querySelector(".menu__logo").style.display="block",t.style.boxShadow=" 2px 2px 2px 1px rgba(200, 200, 200, 0.3)")}}window.onload=function(){e()},window.onresize=function(){e()};
//# sourceMappingURL=index.39db34f6.js.map