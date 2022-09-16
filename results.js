
var resetButton = document.getElementById("reset");
var giphyPrint = document.getElementById("giphy-here")



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
      giphyPrint.append(img)
      dictionaryApi();
      //finally we create the gif on the html with methods :)
    })
  }

    
function dictionaryApi() {
  let input = document.getElementById('user-input').value
  var apiKey = "8dd6dd73-b3ce-433c-8b39-431c51190aa8"
  var websterApi = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input}?key=${apiKey}`
  console.log(websterApi)

  fetch(websterApi)
      .then(response => response.json())
      .then(function (apiData) {
          console.log(apiData[0].shortdef[0])
          let heading = document.getElementById('cocktail-header')
          let result = document.getElementById('result')
          let desc = document.getElementById('desc')

          heading.innerHTML = `Word: ${input}`
          result.innerHTML = "Definition: "
          desc.innerHTML = apiData[0].shortdef[0]
          let card = document.querySelector('.card')
          card.style.display = "block"

      })

      .catch(err => console.error(err));


}

  /* References:

  https://www.youtube.com/watch?v=R59U6QaOEFg&list=WL&index=17&t=1130s
  https://developers.giphy.com/dashboard/?
  https://developers.giphy.com/docs/api/
  https://www.youtube.com/watch?v=HRh6zHRwRLo&list=WL&index=16&t=5s
  https://www.youtube.com/watch?v=mj8_w11MvH8&list=WL&index=15


  Will V worked on the Giphy API and Local Storage :)

  */

  /* Here I use some methods to grab the form ids in the html and save them as 
  variables*/

  var yourname = document.getElementById('yourname'),

    email = document.getElementById('email'),
    saveIt = document.getElementById('save'),

    loadIt = document.getElementById('load'),
    clearIt = document.getElementById('clear'),

    resetIt = document.getElementById('reset');
//Next I created an object called saveLcal with a number of functions to help save
//the user inputs for their name and email address
var saveLocal = {
  //save function
  saveLocalStorage: function() {
    localStorage.setItem('item', JSON.stringify(this.grabInfo()));
  },
  //load function
  loadLocalStorage: function() {
    var savestuff = JSON.parse(localStorage.getItem('item'));
    if ( savestuff ) {
      yourname.value = savestuff.yourname;
      email.value = savestuff.email;
    } 
  },
  //clear function
  clearLocalStorage: function() {
    localStorage.removeItem('item');
  },
  grabInfo: function() {
    return {
      yourname: yourname.value,
      email: email.value
 //The functions operate based on whether the use pushes the save, load, or clear button
    }
  }
};

//This part adds an event listener to the buttons to call the functions to clear, save, load or reset info
saveIt.addEventListener('click', function() {
  saveLocal.saveLocalStorage();
}, false);

loadIt.addEventListener('click', function() {
  saveLocal.loadLocalStorage();
}, false);

clearIt.addEventListener('click', function() {
  saveLocal.clearLocalStorage();
}, false);


resetIt.addEventListener('click', function() {
  yourname.value = '';
  email.value = '';
}, false);

resetButton.addEventListener('click', function() {
    yourname.value = '';
    address.value = '';
  }, false);
  

/* References

https://codepen.io/oneezy/pen/GQmoQY
https://stackoverflow.com/questions/36178718/search-html5-localstorage-values
https://medium.com/swlh/using-local-storage-with-javascript-cb3713ca56c4
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

*/


