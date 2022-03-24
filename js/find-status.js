document.querySelector('.status-button-get').onclick = function(){
    let fild = document.querySelector(".excursion-data")
    fild.innerHTML = createResponseTable("Maxim ka", "2022-01-01", "Прийнято");
}