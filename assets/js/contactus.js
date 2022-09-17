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
  saveLocalStorage: function () {
    localStorage.setItem('item', JSON.stringify(this.grabInfo()));
  },

  //load function
  loadLocalStorage: function () {
    var savestuff = JSON.parse(localStorage.getItem('item'));
    if (savestuff) {
      yourname.value = savestuff.yourname;
      email.value = savestuff.email;
    }
  },
  //clear function

  clearLocalStorage: function () {
    localStorage.removeItem('item');
  },
  
  grabInfo: function () {
    return {
      yourname: yourname.value,
      email: email.value
      //The functions operate based on whether the use pushes the save, load, or clear button
    }
  }
};

//This part adds an event listener to the buttons to call the functions to clear, save, load or reset info
saveIt.addEventListener('click', function () {
  saveLocal.saveLocalStorage();
}, false);

loadIt.addEventListener('click', function () {
  saveLocal.loadLocalStorage();
}, false);

clearIt.addEventListener('click', function () {
  saveLocal.clearLocalStorage();
}, false);


resetIt.addEventListener('click', function () {
  yourname.value = '';
  email.value = '';
}, false);

// resetButton.addEventListener('click', function () {
//   yourname.value = '';
//   address.value = '';
// }, false);