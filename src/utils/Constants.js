export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const IMG_CDN_URL_780 = "https://image.tmdb.org/t/p/w780/"

export const SUPPORTED_LANG = [
  {indentifier : 'en' , language : "english"},
  {indentifier : 'hin' , language : "hindi"},
  {indentifier : 'spanish' , language : "spanish"}

];

export const OPEN_API_KEY = process.env.REACT_APP_OPEN_API_KEY