
function giphyApi() {
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