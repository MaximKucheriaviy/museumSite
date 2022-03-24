function createResponseTable(name, data, value){
    let colorClass;
    if(value == "Обробка"){
        colorClass = "bc-yelow";
    }
    else if(value == "Відхилено"){
        colorClass = "bc-red";
    }
    else if(value == "Прийнято"){
        colorClass = "bc-green";
    }
    let table = `<table class = "Response-table">
    <thead>
      <tr>
        <th>Ім'я</th>
        <th>Дата</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>`+ name + `</td>
        <td>`+ data + `</td>
        <td>
            <div class = "color-box `+ colorClass +`">
              <p>`+ value +`</p>
            </div>
          </td>
      </tr>
    </tbody>
  </table>`
    return table;
}