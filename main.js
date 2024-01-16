const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

let interval = null;

document.querySelector(".scramble").onmouseover = event => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration || letter == " ") {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += (1 / (50 / event.target.dataset.value.length)) + (iteration / 20);
    }, 30);
}
let WinDow = document.querySelector('.wrapper');
WinDow.addEventListener("scroll", function() {
    let navbar =document.querySelector('.NavBar')
    navbar.classList.toggle('navbar',WinDow.scrollTop > 500)
    if(WinDow.scrollTop > 500){
        document.getElementById("navlogo").src ="assets/navlogo1.png";
        document.getElementById("navlogo").style.width = '120px';
        document.getElementById("navlogo").style.height = '80px';
        document.getElementById("navlogo").style.marginRight = '0px';
        document.getElementById("NavHeading").style.color = 'var(--Pink)';
        document.getElementById("NavHeading").style.textShadow ='5px 5px var(--LightBlue)';
    }
    if(WinDow.scrollTop < 500){
        document.getElementById("navlogo").src ="assets/Capture(1).png";
        document.getElementById("navlogo").style.width = '75px';
        document.getElementById("navlogo").style.height = '50px';
        document.getElementById("navlogo").style.marginRight = '15px';
        document.getElementById("NavHeading").style.color = 'var(--Yellow)';
    }
  });