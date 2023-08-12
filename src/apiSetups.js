export const GeoDBCitiesUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const GeoDBCitiesOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_GEODB_CITIES_KEY,
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

