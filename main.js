
let WinDow = document.querySelector('.wrapper');
WinDow.addEventListener("scroll", function() {
    let navbar =document.querySelector('.NavBar')
    navbar.classList.toggle('navbar',WinDow.scrollTop > 500)
    if(WinDow.scrollTop > 500){
        document.getElementById("navlogo").src ="assets/Capture.PNG";
        document.getElementById("navlogo").style.width = '70px';
        document.getElementById("navlogo").style.height = '45px';
        document.getElementById("navlogo").style.marginRight = '15px';
        document.getElementById("NavHeading").style.color = 'var(--Pink)';
    }
    if(WinDow.scrollTop < 500){
        document.getElementById("navlogo").src ="assets/Capture(1).png";
        document.getElementById("navlogo").style.width = '75px';
        document.getElementById("navlogo").style.height = '50px';
        document.getElementById("navlogo").style.marginRight = '15px';
        document.getElementById("NavHeading").style.color = 'var(--Yellow)';
    }
  });