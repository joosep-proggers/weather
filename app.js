document.addEventListener("DOMContentLoaded", cityWeather);

function weatherDataFetch( city ) {
	var key= "4e6fb3b33d4a7a69591cca21c7882ee9";
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp) {
		return resp.json()
	}) // convert data to JSON
	.then(function(data){
		console.log(data)
	})
	.catch(function(){
		// catch any errors
	});
}

function cityWeather(e) {
	weatherDataFetch( "Tallinn" );
}