const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dc12f9da20mshd08979321ef28a0p11113bjsna30b93f68298',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

fetch('https://wordsapiv1.p.rapidapi.com/words/?random=true', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

function printWordOfDay() {
    
}