$(window).scroll(function(){var t=$(this).scrollTop();$("#text-header").css({opacity:1}),$("#text").css({transform:"translate("+t/15+"%, "+t/4+"%)"}),$("#pohon").css({transform:"translate(0px, "+t/20+"%)"}),$("#gajah").css({transform:"translate(0px, "+t/20+"%)"})});const sr=ScrollReveal({duration:1e3,reset:!0});sr.reveal("#anatomi",{scale:1.5}),sr.reveal(".side-nav",{origin:"bottom",distance:"10em"});var tooltipTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')),tooltipList=tooltipTriggerList.map(function(t){return new bootstrap.Tooltip(t)});const peta=document.querySelector("#peta"),tesso=document.querySelector("#tesso"),sumatera=document.querySelector("#sumatera"),scrollAmount=-1e3;window.addEventListener("scroll",t=>{var{top:e}=peta.getBoundingClientRect();e-window.innerHeight<scrollAmount?(sumatera.style.opacity=0,tesso.style.opacity=1):(sumatera.style.opacity=1,tesso.style.opacity=0)});const lahan=document.querySelector("#lahan"),lahantutup=document.querySelector("#lahan-tutup"),lahantata=document.querySelector("#lahan-tata"),scrollAmount3=-1e3;window.addEventListener("scroll",t=>{var{top:e}=lahan.getBoundingClientRect();e-window.innerHeight<scrollAmount3?(lahantutup.style.opacity=0,lahantata.style.opacity=1):(lahantutup.style.opacity=1,lahantata.style.opacity=0)});var myCarousel=document.querySelector("#carouselExampleCaptions"),carousel=new bootstrap.Carousel(myCarousel,{interval:!1,wrap:!0}),myCarousel=document.querySelector("#carouselExampleIndicators"),carousel=new bootstrap.Carousel(myCarousel,{interval:!1,wrap:!0});function myFunction(){document.getElementById("myInput").select(),document.execCommand("copy"),alert("https://tessonilo.gardaanimalia.com/")}$(document).ready(function(){$(".owl-carousel").owlCarousel({loop:!1,nav:!0,navText:["<i class='fa-solid fa-arrow-left'></i>","<i class='fa-solid fa-arrow-right'></i>"],dots:!1,responsiveClass:!0,responsive:{0:{items:1}}})});const lahaneng=document.querySelector("#lahan"),lahantutupeng=document.querySelector("#lahan-tutup-eng"),lahantataeng=document.querySelector("#lahan-tata"),scrollAmount4=-1e3;window.addEventListener("scroll",t=>{var{top:e}=lahaneng.getBoundingClientRect();e-window.innerHeight<scrollAmount3?(lahantutupeng.style.opacity=0,lahantataeng.style.opacity=1):(lahantutupeng.style.opacity=1,lahantataeng.style.opacity=0)});
