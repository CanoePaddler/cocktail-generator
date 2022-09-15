var wordEl = document.getElementById("wordhere")
var randomWord = ""


function getRandomWord() {

	fetch('https://random-word-api.herokuapp.com/word')
		.then(response => response.json())
		.then(function (data) {
			console.log(data)

			randomWord = data[0]
			console.log(randomWord)

			var websterApiKeyAutumn = "8dd6dd73-b3ce-433c-8b39-431c51190aa8"
			var websterUrlRandom = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + randomWord + "?key=" + websterApiKeyAutumn
			console.log(websterUrlRandom)

			fetch(websterUrlRandom)
				.then(response => response.json())
				.then(function (apiData) {
					console.log(apiData)
					
					if (randomWord !== apiData[0].meta?.id) {
						getRandomWord();
					} else {
						wordEl.textContent = '';
						printWordOfDay(apiData);
					};

				})

				.catch(err => console.error(err));

		});

};
function printWordOfDay(wodApiData) {
	console.log(randomWord)
	console.log(wodApiData[0].meta?.id)

	

	// need to stop this function and run randomWord again if title contains any characters that are not letter (:1 or :2 etc.)
	// } else if (wodApiData[0].meta.id !== ) {
	// 	randomWord();
	// }

	// make first letter capital only?
	var title = document.createElement("h2");
	title.textContent = wodApiData[0].meta?.id;
	console.log(title)
	console.log(typeof title)
	wordEl.append(title);

	var syllable = document.createElement("h4")
	syllable.textContent = wodApiData[0].hwi.hw
	wordEl.append(syllable)

	for (var i = 0; i < wodApiData[0].shortdef.length; i++) {
		var define = document.createElement("p")
		define.textContent = "Definition: " + wodApiData[0].shortdef[i];
		wordEl.append(define)
		console.log("value of i: ", i)
		console.log(define.textContent)
	};

};

getRandomWord();