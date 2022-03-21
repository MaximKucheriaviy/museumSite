document.querySelector('.retistration-button').onclick = function(){
    let currnet = document.querySelector('.is-not-hidden');
    let target = document.querySelector('.registration');

    currnet.classList.remove('is-not-hidden');
    currnet.classList.add('is-hidden');
    target.classList.add('is-not-hidden');
    target.classList.remove('is-hidden');
}

document.querySelector('.main-button').onclick = function(){
    let currnet = document.querySelector('.is-not-hidden');
    let target = document.querySelector('.herro');

    currnet.classList.remove('is-not-hidden');
    currnet.classList.add('is-hidden');
    target.classList.add('is-not-hidden');
    target.classList.remove('is-hidden');
}