

function giphyApi() {
    var getInfo = document.getElementById("user-input").value
    console.log(getInfo)
    
    var myApi = "4SGZMcOUobdN4nX6cFWdyX3pDbRi5Akr"
    var apiAddress = `https://api.giphy.com/v1/gifs/search?q=${getInfo}&rating=g&api_key=${myApi}`
    
    fetch(apiAddress).then(function(data) {
        return data.json()
    })
    .then(function(json){
      console.log(json.data[0].images.fixed_height.url)
      var giphyLocation = json.data[0].images.fixed_height.url

      var img = document.createElement("img")
      img.setAttribute("src", giphyLocation)
      document.body.appendChild(img)
    })
  }

  /* References:

  https://www.youtube.com/watch?v=R59U6QaOEFg&list=WL&index=17&t=1130s
  https://developers.giphy.com/dashboard/?
  https://developers.giphy.com/docs/api/
  https://www.youtube.com/watch?v=HRh6zHRwRLo&list=WL&index=16&t=5s
  https://www.youtube.com/watch?v=mj8_w11MvH8&list=WL&index=15




  */