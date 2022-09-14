// Here is the logic for the Giphy API

//This function grabs the input value from the search bar
function giphyApi() {
    var getInfo = document.getElementById("user-input").value
    console.log(getInfo)
    //Next we send a request to Giphy's server for the info we want
    var myApi = "4SGZMcOUobdN4nX6cFWdyX3pDbRi5Akr"
    var apiAddress = `https://api.giphy.com/v1/gifs/search?q=${getInfo}&rating=g&api_key=${myApi}`
    //Then we get the data lump back and use json to turn into something we can use
    fetch(apiAddress).then(function(data) {
        return data.json()
    })
    .then(function(json){
      console.log(json.data[0].images.fixed_height.url)
      var giphyLocation = json.data[0].images.fixed_height.url
    //Next we grab the specific info we want from the fetch, which is the gif
      var img = document.createElement("img")
      img.setAttribute("src", giphyLocation)
      document.body.appendChild(img)
      //finally we create the gif on the html with methods :)
    })
  }

  /* References:

  https://www.youtube.com/watch?v=R59U6QaOEFg&list=WL&index=17&t=1130s
  https://developers.giphy.com/dashboard/?
  https://developers.giphy.com/docs/api/
  https://www.youtube.com/watch?v=HRh6zHRwRLo&list=WL&index=16&t=5s
  https://www.youtube.com/watch?v=mj8_w11MvH8&list=WL&index=15


  Will V worked on the Giphy API and Local Storage :)

  */

  //----------------------------------------//

  /*   */

  var fullname = document.getElementById('yourname'),
    address = document.getElementById('email'),
    saveIt = document.getElementById('save'),

    loadIt = document.getElementById('load'),
    clearIt = document.getElementById('clear'),

    resetIt = document.getElementById('reset');

var localStore = {
  saveLocalStorage: function() {
    localStorage.setItem('item', JSON.stringify(this.getInputValue()));
  },

  loadLocalStorage: function() {
    var store = JSON.parse(localStorage.getItem('item'));
    if ( store ) {
      fullname.value = store.fullname;
      address.value = store.address;
    } 
  },
  clearLocalStorage: function() {
    localStorage.removeItem('item');
  },
  getInputValue: function() {
    return {
      fullname: fullname.value,
      address: address.value
    }
  }
};


saveIt.addEventListener('click', function() {
  localStore.saveLocalStorage();
}, false);

loadIt.addEventListener('click', function() {
  localStore.loadLocalStorage();
}, false);

clearIt.addEventListener('click', function() {
  localStore.clearLocalStorage();
}, false);

resetIt.addEventListener('click', function() {
  fullname.value = '';
  address.value = '';
}, false);

/* References

https://codepen.io/oneezy/pen/GQmoQY
https://stackoverflow.com/questions/36178718/search-html5-localstorage-values
https://medium.com/swlh/using-local-storage-with-javascript-cb3713ca56c4
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

*/
