let perso = document.querySelector('.perso');
let obstacles = document.querySelector('.obstacles');


function sauter() {
    if(perso.classList != 'animation'){
        perso.classList.add('animation');
    }
    setTimeout(function(){
        perso.classList.remove('animation');
    }, 500)
}

//verification si l'obstacle touche le personnage

let verification = setInterval(function(){
    let persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
    let obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    if(obstaclesLeft < 20 && obstaclesLeft > 0 && persoTop >= 130){
        obstacles.style.animation = "none";
        alert("vous avez perdu");
    }
}, 1)