var wordEl = document.getElementById("wordhere")
var randomWord = ""

// logic for random word api and merriam-webster dictionary api
function getRandomWord() {

	// fetch request sent to end point (random word api), response converted to json
	fetch('https://random-word-api.herokuapp.com/word')
		.then(response => response.json())

		// get random word from returned data and save it as variable
		.then(function (data) {
			console.log(data)

			randomWord = data[0]
			console.log(randomWord)

			// api key and merriam-webster api end point saved as variables, random word used as parameter in end point
			var websterApiKeyAutumn = "8dd6dd73-b3ce-433c-8b39-431c51190aa8"
			var websterUrlRandom = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + randomWord + "?key=" + websterApiKeyAutumn
			console.log(websterUrlRandom)

			// fetch request sent to merriam-webster api, response converted to json
			fetch(websterUrlRandom)
				.then(response => response.json())

				// if random word variable matched word returned by merriam-webster api then getRandomWord() is called, if not the printWordOfDay will run again
				.then(function (apiData) {
					console.log(apiData)
					
					if (randomWord !== apiData[0].meta?.id) {
						getRandomWord();
					} else {
						wordEl.textContent = '';
						printWordOfDay(apiData);
					};
				})

    			// Will let us know if there are any errors
				.catch(err => console.error(err));
		});
};


// function get word, syllables, and definition from returned data and adds them to the DOM
function printWordOfDay(wodApiData) {
	console.log(randomWord)
	console.log(wodApiData[0].meta?.id)

	// get's word from returned data and adds it to DOM as h1
	var title = document.createElement("h1");
	title.textContent = wodApiData[0].meta?.id;
	title.classList.add("new-word")
	wordEl.append(title);

	// get's syllables from returned data and adds it to DOM as p
	var syllable = document.createElement("p")
	syllable.textContent = "Syllables: " + wodApiData[0].hwi.hw
	wordEl.append(syllable)

	// loops through definitions from returned data in case there is more than one and adds them to DOM as h5's
	for (var i = 0; i < wodApiData[0].shortdef.length; i++) {
		var define = document.createElement("h5")
		define.textContent = "Definition: " + wodApiData[0].shortdef[i];
		wordEl.append(define)
	};

};

// Calls function to run when page is opened
getRandomWord();