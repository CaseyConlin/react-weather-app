import styles from "./forecast-today.module.css";
import { ReactComponent as Umbrella } from "../images/umbrella-solid.svg";
import { ReactComponent as HighTemp } from "../images/temperature-full-solid.svg";
import { ReactComponent as LowTemp } from "../images/temperature-empty-solid.svg";

export const ForecastToday = ({ item }) => {
  // Map over weather API repsonse data for
  // first element to build responsive elements
  // for today's weather.

  return (
    <div className={styles["today-container"]}>
      <div className={styles["forecast-today"]}>
        <div className={styles["location"]}>
          <h2>Weather Forecast</h2>
          <h3>{item.location}</h3>
          <h5>Today</h5>
        </div>

        <div className={styles["weather-details"]}>
          <div className={styles["image-description-container"]}>
            <div className={styles["forecast-image-container"]}>
              <img
                className={styles["forecast-image"]}
                src={
                  "https://openweathermap.org/img/wn/" + item.icon + "@2x.png"
                }
                alt={item.weather + " icon"}
              />
            </div>

            <div className={styles["weather-description"]}>
              {item.desc} <br />
            </div>
          </div>

          <div className={styles["temp-precipitation-container"]}>
            <div className={styles["temps-container"]}>
              <div>
                <HighTemp className={styles["high-temp"]} />
                <span className={styles["temp"]}>
                  High <b>{item.temp}</b>
                  <span className={styles["deg"]}>℉</span>
                </span>
              </div>
              <div>
                <LowTemp className={styles["low-temp"]} />
                <span className={styles["low"]}>
                  Low <b>{item.low}</b>
                  <span className={styles["deg"]}>℉</span>
                </span>
              </div>
            </div>

            <div className={styles["precipitation"]}>
              <span className={styles["umbrella"]}>
                <Umbrella className={styles["umbrella"]} />
              </span>
              <strong>{item.rainChance}</strong>&nbsp;Precipitation
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
