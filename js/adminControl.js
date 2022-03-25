document.querySelector('.Response-table-rq').onclick = function(event){
    let target = event.target;
    
    if(target.classList.contains("cansel-button-red")){
        let ID = target.parentElement.parentElement.querySelector('.ID-container').textContent
        removeReqestLine(target.parentElement.parentElement);
        console.log("cansel button pressed " + ID);
    }
    else if(target.classList.contains("acsept-button-green")){
        let ID = target.parentElement.parentElement.querySelector('.ID-container').textContent
        removeReqestLine(target.parentElement.parentElement);
        console.log("submit button pressed " + ID);
    }
}