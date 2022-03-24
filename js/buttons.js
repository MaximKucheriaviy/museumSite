function showHide(currnet, target){
    currnet.classList.remove('is-not-hidden');
    currnet.classList.add('is-hidden');
    target.classList.add('is-not-hidden');
    target.classList.remove('is-hidden');
}

document.querySelector('.retistration-button').onclick = function(){
    let currnet = document.querySelector('.is-not-hidden');
    let target = document.querySelector('.registration');
    showHide(currnet, target);
}

document.querySelector('.main-button').onclick = function(){
    let currnet = document.querySelector('.is-not-hidden');
    let target = document.querySelector('.herro');
    showHide(currnet, target);
}

document.querySelector('.status-button').onclick = function(){
    document.querySelector(".excursion-data").innerHTML = "";
    let currnet = document.querySelector('.is-not-hidden');
    let target = document.querySelector('.status');
    showHide(currnet, target);
}