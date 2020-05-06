const createMenuPage = () => {
  const parent = document.getElementById("content")
  const content = document.createElement("div")
  content.setAttribute("class", "page-content")
  
  content.innerHTML = `
  <img src="./static/img/restaurant.jpg" class="cover-img">
  <div class="centered">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Menu Item</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td><em>Pho</em></td>
          <td>$7</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td><em>Stir-fried Rice</em></td>
          <td>$8</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td><em>Chicken Stir Fry</em></td>
          <td>$10</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td><em>Vegetable Stir Fry</em></td>
          <td>$10</td>
        </tr>
      </tbody>
    </table>
  </div>`
  
  parent.appendChild(content)
}

export { createMenuPage }