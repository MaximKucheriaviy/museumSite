function createProseccedExcursion(name, data, phone, callback, id){
    let line = `<tr>
                  <td class = "ID-container">` + id + `</td>
                  <td>` + name + `</td>
                  <td>` + data + `</td>
                  <td>` + phone + `</td>
                  <td>` + callback + `</td>
                  <td><Button class = "acsept-button-green">Прияняти</Button></td>
                  <td><Button class = "cansel-button-red">Відмініти</Button></td>
                </tr>`
    return line;
}

function getTable(){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '../getProseccedExcorsion.php');
    xhr.responseType = 'json';
    let reqest = new FormData();
    reqest.append('message', 'Обработка');
    xhr.send(reqest);
    xhr.onload = function(){
        let table = document.querySelector('.Response-table-rq');
        let tableBody = document.querySelector('.reqset-table-body')
        if(xhr.response.length == 0){
            console.log("Response is empty");
        }
        else{
            for(let i = 0; i < xhr.response.length; i++){
                console.log(xhr.response[i][1]);
                tableBody.insertAdjacentHTML('beforeend', createProseccedExcursion(xhr.response[i][1], xhr.response[i][2], xhr.response[i][3], xhr.response[i][4], xhr.response[i][0]))
            }
        }
    }
}

getTable();

document.querySelector('.Response-table-rq').onclick = function(event){
    let target = event.target;
    
    if(target.classList.contains("cansel-button-red")){
        let ID = target.parentElement.parentElement.querySelector('.ID-container').textContent
        let line = target.parentElement.parentElement
        
        // console.log("cansel button pressed " + ID);
        let reqest = new FormData();
        reqest.append('ID', ID);
        reqest.append('message', 'Change');
        reqest.append('state', 'Відхилено');

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '../getProseccedExcorsion.php');
        xhr.responseType = 'text';
        xhr.send(reqest);

        xhr.onload = function(){
            if(xhr.response = "OK"){
                removeReqestLine(line);
            }
            else{
                alert("Error");
            }
        }
    }
    else if(target.classList.contains("acsept-button-green")){
        let ID = target.parentElement.parentElement.querySelector('.ID-container').textContent
        removeReqestLine(target.parentElement.parentElement);
        // console.log("submit button pressed " + ID);
        let reqest = new FormData();
        reqest.append('ID', ID);
        reqest.append('message', 'Change');
        reqest.append('state', 'Прийнято');

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '../getProseccedExcorsion.php');
        xhr.responseType = 'text';
        xhr.send(reqest);

        xhr.onload = function(){
            if(xhr.response = "OK"){
                removeReqestLine(line);
            }
            else{
                alert("Error");
            }
        }
    }
}