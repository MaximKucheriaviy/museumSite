document.querySelector('.status-button-get').onclick = function(){
    let fild = document.querySelector(".excursion-data")
    fild.innerHTML = `<table class = "Response-table">
    <thead>
      <tr>
        <th>Ім'я</th>
        <th>Дата</th>
        <th>Статус</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Максим Кучепявмй</td>
        <td>2022-03-31</td>
        <td>
            <div class = "color-box bc-yelow">
              <p>Обробка</p>
            </div>
          </td>
      </tr>
    </tbody>
  </table>`;
}