import { fetchWeatherApi } from 'openmeteo';

interface WeatherRequest {
    startDate: string,
    endDate: string,
}

export async function fetchWeatherData({ startDate, endDate }: WeatherRequest) {
const params = {
	"latitude": 52.52,
	"longitude": 13.41,
	"hourly": ["temperature_2m",
    "apparent_temperature", 
    "precipitation", "rain", 
    "showers",
    "snowfall", 
    "wind_speed_10m", 
    "wind_speed_80m",
    "wind_speed_120m", 
    "wind_speed_180m"],
    "start_date": startDate,
    "end_date": endDate
};

const url = "https://api.open-meteo.com/v1/dwd-icon";

try {
const responses = await fetchWeatherApi(url, params);

// Helper function to form time ranges
const range = (start: number, stop: number, step: number) =>
	Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const utcOffsetSeconds = response.utcOffsetSeconds();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const latitude = response.latitude();
const longitude = response.longitude();

const hourly = response.hourly()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {

	hourly: {
		time: range(Number(hourly.time()), Number(hourly.timeEnd()), hourly.interval()).map(
			(t) => new Date((t + utcOffsetSeconds) * 1000)
		),
		temperature2m: hourly.variables(0)!.valuesArray()!,
		apparentTemperature: hourly.variables(1)!.valuesArray()!,
		precipitation: hourly.variables(2)!.valuesArray()!,
		rain: hourly.variables(3)!.valuesArray()!,
		showers: hourly.variables(4)!.valuesArray()!,
		snowfall: hourly.variables(5)!.valuesArray()!,
		windSpeed10m: hourly.variables(6)!.valuesArray()!,
		windSpeed80m: hourly.variables(7)!.valuesArray()!,
		windSpeed120m: hourly.variables(8)!.valuesArray()!,
		windSpeed180m: hourly.variables(9)!.valuesArray()!,
	},
};

    return weatherData;

	
} catch (error) {
	console.error('Erro ao buscar dados meteorológicos:', error);
}

};


// `weatherData` now contains a simple structure with arrays for datetime and weather data
// for (let i = 0; i < weatherData.hourly.time.length; i++) {
// 	console.log(
// 		weatherData.hourly.time[i].toISOString(),
// 		weatherData.hourly.temperature2m[i],
// 		weatherData.hourly.apparentTemperature[i],
// 		weatherData.hourly.precipitation[i],
// 		weatherData.hourly.rain[i],
// 		weatherData.hourly.showers[i],
// 		weatherData.hourly.snowfall[i],
// 		weatherData.hourly.windSpeed10m[i],
// 		weatherData.hourly.windSpeed80m[i],
// 		weatherData.hourly.windSpeed120m[i],
// 		weatherData.hourly.windSpeed180m[i]
// 	);
	
// }