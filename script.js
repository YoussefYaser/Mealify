

// START NAV

// click on ==> ul li a

let ulLink = document.querySelectorAll('.page nav .container ul li a');

ulLink[0].style.setProperty('--clickEvent', 'calc(100% - var(--a-padding) - var(--a-padding))');
ulLink[0].style.color = 'black';

for(let i=0; i<4; i++){
    ulLink[i].onclick = function(){
        for(let j=0; j<4; j++){
            ulLink[j].removeAttribute('style');
        }
        ulLink[i].style.setProperty('--clickEvent', 'calc(100% - var(--a-padding) - var(--a-padding))');
        ulLink[i].style.color = 'black';
    }
}

// ----------------------------------------------------------------------------------------------------------------

// END NAV
        