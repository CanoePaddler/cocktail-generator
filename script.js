
// variable for entire form
var formEl = document.querySelector('#form');

// function will send user to searchresults.html or display modal
function formSubmit(event) {
    event.preventDefault();

    //   variable for user input in form
    var cocktailInput = document.querySelector('#user-input').value;

    // variable for modal and modal close button
    var modal = document.querySelector(".modal")
    var closeBtn = document.querySelector(".close-btn")

    // if user submits form with no input, modal will display
    if (!cocktailInput) {
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

    //sends user to searchreults.html with user input parameter
    var resultsUrl = './searchresults.html?s=' + cocktailInput;
    location.assign(resultsUrl);
}

// when user submits form, function formSubmit is called
formEl.addEventListener('submit', formSubmit);



  //----------------------------------------//

  