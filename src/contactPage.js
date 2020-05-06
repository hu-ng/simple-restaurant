const createContactPage = () => {
  const parent = document.getElementById("content")
  const content = document.createElement("div")
  content.setAttribute("class", "page-content")
  
  content.innerHTML = `
  <img src="./static/img/restaurant.jpg" class="cover-img">
  <form class="centered message-form p-2 border rounded">
    <legend><em>Send us a message!</em></legend>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="first-name">First Name</label>
        <input type="text" class="form-control" id="first-name">
      </div>
      <div class="form-group col-md-6">
        <label for="last-name">Last Name</label>
        <input type="text" class="form-control" id="last-name">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col">
        <label for="email">Email</label>
        <input type="email" class="form-control" id="email">
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" rows="4"></textarea>
      </div>
    </div>
    <button type="submit" class="btn btn-info">Send</button>
  </form>
  `
  
  parent.appendChild(content)
}

export { createContactPage }