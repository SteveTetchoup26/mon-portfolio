window.addEventListener("scroll", function(){
    let navbar = document.querySelector(".nav-bar");

    navbar.classList.toggle("sticky", window.scrollY > 0);
});



let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");


let link1 = document.getElementById("link-1");
let skills = document.getElementById("skills");
let link2 = document.getElementById("link-2");
let experience = document.getElementById("experience");
let link3 = document.getElementById("link-3");
let education = document.getElementById("education");

function opentab1(){
    for(let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    link1.classList.add("active-link");
    skills.classList.add("active-tab");
}

function opentab2(){
    for(let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    link2.classList.add("active-link");
    experience.classList.add("active-tab");
}

function opentab3(){
    for(let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    link3.classList.add("active-link");
    education.classList.add("active-tab");
}

link1.addEventListener("click", opentab1);
link2.addEventListener("click", opentab2);
link3.addEventListener("click", opentab3);


/*---------------------button close and open the menu----------------------------*/

let sidemenu = document.getElementById("sidemenu");

function openmenu (){
    sidemenu.style.right = "0";
}

function closemenu (){
    sidemenu.style.right = "-100%";
}



