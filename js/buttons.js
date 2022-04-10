function showHide(currnet, target){
    currnet.classList.remove('is-not-hidden');
    currnet.classList.add('is-hidden');
    target.classList.add('is-not-hidden');
    target.classList.remove('is-hidden');
}

function openCloseControll(){
    let iconS = document.querySelector('.header__controllbutton use:not(.is-hidden)');
    let iconH = document.querySelector('.header__controllbutton .is-hidden');

    iconS.classList.add('is-hidden');
    iconH.classList.remove('is-hidden');
    let menu = document.querySelector('.header__control');
    if(menu.classList.contains('header--is-hidden')){
        menu.classList.remove('header--is-hidden')
    }
    else{
        menu.classList.add('header--is-hidden')
    }
}

document.querySelector('.retistration-button').onclick = function(){
    let currnet = document.querySelector('.is-not-hidden');
    let target = document.querySelector('.registration');
    showHide(currnet, target);
    openCloseControll()
}

document.querySelector('.main-button').onclick = function(){
    let currnet = document.querySelector('.is-not-hidden');
    let target = document.querySelector('.herro');
    showHide(currnet, target);
    openCloseControll()
}

document.querySelector('.status-button').onclick = function(){
    document.querySelector(".excursion-data").innerHTML = "";
    let currnet = document.querySelector('.is-not-hidden');
    let target = document.querySelector('.status');
    showHide(currnet, target);
    openCloseControll()
}

document.querySelector('.header__controllbutton').onclick = function(){
    openCloseControll();
}