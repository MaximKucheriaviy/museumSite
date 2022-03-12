let submitButton = document.querySelector(".submit-button");

function submit(){
    let form = document.forms.mailForm;
    let user = {
        name: form.elements.Name.value,
        sername: form.elements.Sername.value,
        telephone: form.elements.Telephone.value,
        date: form.elements.Date.value,
        callback: form.elements.callback.value
    }
    console.log(user.name);
    console.log(user.sername);
    console.log(user.telephone);
    console.log(user.date);
    console.log(user.callback);
}
submitButton.onclick = function() {
    submit();
};

