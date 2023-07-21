export default async function handler(req: any, res: any) {
  const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eltri';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'pF4CLviGInmsh18gyDSb3w9BKQX0p1v8qV7jsnhChof9JxxyAb',
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  };
  const requestOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST,
    }
  } as RequestInit;
  try {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    res.status(200).json(result.data)
  } catch (error) {
    console.error(error);
  }
  
}