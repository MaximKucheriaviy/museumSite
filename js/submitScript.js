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
    // xhr.setRequestHeader('Content-type', 'multipart/form-data')
    xhr.send(data);
    alert("Экскурсия принята")
    document.forms.mailForm.Name.value = "";
    document.forms.mailForm.Data.value = "";
    document.forms.mailForm.Telephone.value = "";
    document.forms.mailForm.callback.value = "";
    // xhr.onload = function() {
    //     let responseObj = xhr.response;
    //     alert(responseObj.message); // Привет, мир!
    // };
    }
}
submitButton.onclick = function() {
    submit();
};

