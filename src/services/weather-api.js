import { locationURL, weatherURL } from "./api-info";
import { v4 } from "uuid";

const errorHandler = (apiResponse) => {
  if (apiResponse.status === 429) {
    return "Daily weather data request limit reached. Contact site admin for more info.";
  } else {
    return "There was a problem getting weather data. Contact site admin for more info.";
  }
};

export const fetchWeatherData = async (zip) => {
  const dailyData = [];

  //Convert ZIP code to lattitude & longitude
  //data for submission to weather API.
  const response = await fetch(locationURL(zip));
  if (!response.ok) {
    throw Error(errorHandler(response));
  }

  const data = await response.json();
  const locationData = { latt: data.lat, long: data.lon };

  // Get weather data for next 8 days,
  // and return as an array
  const response2 = await fetch(
    weatherURL(locationData.latt, locationData.long)
  );
  if (!response2.ok) {
    throw Error(errorHandler(response2));
  }

  const data2 = await response2.json();

  let location = data.name;

  //Build an array of of daily weather data.

  for (const stat of data2.daily) {
    let date = new Date(stat.dt * 1000);

    let dayStats = {
      key: v4(),
      location: location,
      dayOfWeek: date.toLocaleString(window.navigator.language, {
        weekday: "short",
      }),
      weatherId: stat.weather[0].id,
      temp: stat.temp.day.toFixed(0),
      month: date.toLocaleString(window.navigator.language, {
        month: "short",
      }),
      date: date.getDate(),
      weather: stat.weather[0].main,
      desc: stat.weather[0].description,
      icon: stat.weather[0].icon,
      low: stat.temp.min.toFixed(0),
      rainChance: (parseFloat(stat.pop) * 100).toFixed(0) + "%",
    };

    dailyData.push(dayStats);
  }

  return dailyData;
};
