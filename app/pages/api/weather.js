// import fetch from 'node-fetch';

// const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=toronto%2Cca&days=3';
// const options = {
//     method: 'GET',
//     headers: {
//         'x-rapidapi-key': 'bec3babc6dmsh6be1666edc7c34fp133bc8jsn2f49f7e68272',
//         'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
//     }
// };

// async function getWeatherData(url, options) {
//     try {
//         const response = await fetch(url, options);
//         if (!response.ok) {
//             const errorText = await response.text();
//             throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
//         }
//         const result = await response.json();
//         console.log(result);
//         return { success: true, data: result };
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//         return { success: false, error: error.message };
//     }
// }

// export default async function handler(req, res) {
//   const result = await getWeatherData(url, options);
//   if(result.success){
//     res.status(200).json(result.data);
//   } else {
//     res.status(500).json({error: result.error});
//   }
// }

export async function GET(request) {
  // Your external API call logic here
  const res = await fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=toronto%2Cca&days=3', {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'bec3babc6dmsh6be1666edc7c34fp133bc8jsn2f49f7e68272',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  });
  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}