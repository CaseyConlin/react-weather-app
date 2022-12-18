const APIkey = "cc9b4cb68f4e7cfdf2bb40a6975fc5db";

export const fetchLocation = (zip) => {
  return (
    "http://api.openweathermap.org/geo/1.0/zip?zip=" +
    zip +
    ",US&appid=" +
    APIkey
  );
};

export const fetchWeather = (lat, long) => {
  return (
    "https://api.openweathermap.org/data/3.0/onecall?lat=" +
    lat +
    "&lon=" +
    long +
    "&units=imperial&appid=" +
    APIkey
  );
};
