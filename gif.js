function sendApiRequest() {
    
  var retrieveGifInput = document.getElementById("input").value
    
    console.log(retrieveGifInput)
    
    var secondGifApiKey = "4SGZMcOUobdN4nX6cFWdyX3pDbRi5Akr"
    
    var secondGifURL = `https://api.giphy.com/v1/gifs/search?q=${retrieveGifInput}&rating=g&api_key=${secondGifApiKey}`
    
    fetch(secondGifURL).then(function(data) {
        return data.json()
    })
    .then(function(json){
      console.log(json.data[0].images.fixed_height.url)
      
      var imgPath = json.data[0].images.fixed_height.url

      var img = document.createElement("img")
      img.setAttribute("src", imgPath)
      document.body.appendChild(img)
    })
  }