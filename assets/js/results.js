
var resetButton = document.getElementById("reset");
var giphyPrint = document.getElementById("giphy-here")
var formEl = document.querySelector('#form');

// Get the search params out of the URL
function parameter() {
  var searchParam = document.location.search.split('&');
  console.log(document.location.search)
  console.log(searchParam)

  // Save word user typed as var query
  var query = searchParam[0].split('=').pop();
  console.log(query)

  // Call giphyApi with query as argument
  giphyApi(query)
}


// Here is the logic for the Giphy API
function giphyApi(query) {

  //Send a request to Giphy's server for the info we want
  var myApi = "4SGZMcOUobdN4nX6cFWdyX3pDbRi5Akr"
  var apiAddress = "https://api.giphy.com/v1/gifs/search?q=" + query + "&rating=g&api_key=" + myApi

  //Then we get the data lump back and use json to turn into something we can use
  fetch(apiAddress)
    .then(function (data) {
      return data.json()
    })

    //Next we grab the specific info we want from the fetch, which is the gif, and append it into the DOM
    .then(function (json) {
      console.log(json.data[0].images.fixed_height.url)
      var giphyLocation = json.data[0].images.fixed_height.url
      var img = document.createElement("img")
      img.setAttribute("src", giphyLocation)
      giphyPrint.append(img)

      // Calls dictionaryApi with query as the argument
      dictionaryApi(query);
    })
}


// Logic for the merriam-webster dictionary api
function dictionaryApi(query) {

  // api key and end point saved as variables
  var apiKey = "8dd6dd73-b3ce-433c-8b39-431c51190aa8"
  var websterApi = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + query + "?key=" + apiKey
  console.log(websterApi)

  // Fetch request sent to end point, data returns and is converted to json
  fetch(websterApi)
    .then(response => response.json())

    // Get word and it's definition from returned data and add them to the DOM
    .then(function (apiData) {
      console.log(apiData)
      let heading = document.getElementById('cocktail-header')
      let result = document.getElementById('result')
      let desc = document.getElementById('desc')

      heading.innerHTML = apiData[0].meta?.id;
      result.innerHTML = "Definition: "
      desc.innerHTML = "&#x2022; " + apiData[0].shortdef[0]
      let card = document.querySelector('.card')
      card.style.display = "block"
    })

    // Will let us know if there are any errors
    .catch(err => console.error(err));
}


// function grabs user input for search bar on searchresults.html or displays modal
function resultFormSubmit(event) {
  event.preventDefault();

  //   variable for user input in form
  var userInput = document.querySelector('#user-input').value;

  // variable for modal and modal close button
  var modal = document.querySelector(".modal")
  var closeBtn = document.querySelector(".close-btn")

  // if user submits form with no input, modal will display
  if (!userInput) {
      modal.style.display = "block"

      // close button will hide modal
      closeBtn.onclick = function(){
          modal.style.display = "none"
        }
      // modal will not display unless if statement is true
      window.onclick = function(e){
      if(e.target == modal){
          modal.style.display = "none"
      }
      }
      return;
  }

  
  // Call giphyApi with userInput as argument
  giphyApi(userInput)

}

// Calls function to run when page is opened
parameter();

// when user submits form, function resultFormSubmit is called
formEl.addEventListener('submit', resultFormSubmit);


