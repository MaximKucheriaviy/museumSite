let submitButton = document.querySelector(".submit-button");
//qweqwew
function submit(){
    let data = new FormData(document.forms.mailForm);
    if(data.get("Name") == "" || data.get("Telephone") == "" || data.get("Data") == "" || data.get("callback") == ""){
        alert("Форма не заполнена");
    }
    else if(data.get("Telephone").length != 13){
        alert("Неверный формат телефона");
    }
    else{
        xhr = new XMLHttpRequest();
        xhr.open("POST", "../sendMail.php");
        xhr.responseType = 'text';
        xhr.send(data);
        xhr.onload = function() {
            switch (xhr.response){
                case "-3":
                    alert("Вибачте на цю дату вже зареєстрована екскурсія, спробуйте іншу");
                    break;
                default:
                    alert("Екскурсія зареєстрована з ID " + xhr.response + " Цей ID потрібно запам'ятати і використовувати для отримання інформації по єкскурсії");
                    document.forms.mailForm.Name.value = "";
                    document.forms.mailForm.Telephone.value = "";
            }
        }
    }
}
submitButton.onclick = function() {
    submit();
};

