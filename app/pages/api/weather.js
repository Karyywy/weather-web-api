const url = 'https://weatherapi-com.p.rapidapi.com/future.json?q=Toronto&dt=2025-02-20';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'bec3babc6dmsh6be1666edc7c34fp133bc8jsn2f49f7e68272',
		'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function getWeatherData(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
const errorText = await response.text();
            throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
        }
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

export default async function handler(req, res) {
  const data = await getWeatherData(url, options);
  if(data){
    res.status(200).json(data);
  } else {
    res.status(500).json({error: 'Error fetching weather data'});
  }
}