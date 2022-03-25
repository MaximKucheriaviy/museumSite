document.querySelector('.status-button-get').onclick = function(){
    let fild = document.querySelector(".excursion-data")
    let xhr = new XMLHttpRequest();
    let data = new FormData(document.forms.statusform);
    
    xhr.open('POST', "../getStatus.php")
    xhr.responseType = 'json';
    xhr.send(data);
    xhr.onload = function(){
        let response = xhr.response;
        fild.innerHTML = createResponseTable(response.Имя, response.Дата, response.Статус);
        document.forms.statusform.ID.value = ""
    }
}