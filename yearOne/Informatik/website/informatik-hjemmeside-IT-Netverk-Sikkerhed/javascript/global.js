const responsiveDivBtn = document.getElementById('menu')
const responsiveDivChnacheDirection = document.querySelector('.menu-bar')
const navBarresponsiveDiv = document.getElementById('showNavBar')
const home = document.getElementById('home')

let direction = true // true means horizontal and false means vertical

function chanceDirection(dir) {
    if (direction == true) {
        responsiveDivBtn.style.flexDirection = 'row';
        for (let i = 0; i < document.querySelectorAll('.menu-bar').length; i++) {
            document.querySelectorAll('.menu-bar')[i].style.height = '20px';
            document.querySelectorAll('.menu-bar')[i].style.width = '5px';
        }
        direction = false;
    } else if (direction == false) {
        responsiveDivBtn.style.flexDirection = 'column';
        responsiveDivBtn.style.justifyContent = 'space-between';
        responsiveDivBtn.style.columnGap = '3px';
        for (let i = 0; i < document.querySelectorAll('.menu-bar').length; i++) {
            document.querySelectorAll('.menu-bar')[i].style.height = '5px';
            document.querySelectorAll('.menu-bar')[i].style.width = '30px';
        }
        direction = true;
    } else {
        console.log('Error');
    }
}

function showNavBar() {
    console.log('showNavBar');
    navBarresponsiveDiv.style.display = 'block'
}

function closeNavBar() {
    console.log('closeNavBar');
    navBarresponsiveDiv.style.display = 'none'
}

responsiveDivBtn.addEventListener('click', function() {
    if (direction == true) {
        chanceDirection();
        showNavBar();
    } else if (direction == false) {
        chanceDirection();
        closeNavBar();
    } else {
        console.log('Error');
    }
});

// Go home 
home.addEventListener('click', function() {
    window.location.href = 'index.html';
});