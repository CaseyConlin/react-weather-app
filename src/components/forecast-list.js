import styles from "./forecast-list.module.css";
import { ReactComponent as Umbrella } from "../images/umbrella-solid.svg";
import { ReactComponent as HighTemp } from "../images/temperature-full-solid.svg";
import { ReactComponent as LowTemp } from "../images/temperature-empty-solid.svg";

export const ForecastList = ({ items }) => {
  // Map over weather API repsonse data to build
  // responsive elements.
  return items.slice(1).map((item) => (
    <div className={styles["forecast-day"]} key={item.key}>
      <div className={styles["forecast-image-container"]}>
        <img
          className={styles["forecast-image"]}
          src={"http://openweathermap.org/img/wn/" + item.icon + "@2x.png"}
          alt={item.weather + " icon"}
        />
      </div>
      <br />

      <div className={styles["forecast-details"]}>
        <div className={styles["time-date"]}>
          <div className={styles["week-day"]}>{item.dayOfWeek}</div>
          <div className={styles["date"]}>
            {item.month} {item.date}
          </div>
        </div>

        <div className={styles["temps-container"]}>
          <div>
            <HighTemp className={styles["high-temp"]} />
            <span className={styles["temp"]}>
              {item.temp}
              <span className={styles["deg"]}>℉</span>
            </span>
          </div>
          <div>
            <LowTemp className={styles["low-temp"]} />
            <span className={styles["low"]}>
              {item.low}
              <span className={styles["deg"]}>℉</span>
            </span>
          </div>
        </div>
        <div className={styles["weather-condtions"]}>
          <div className={styles["description"]}>{item.desc}</div>
          <div>
            <span className={styles["umbrella"]}>
              <Umbrella className={styles["umbrella"]} />
            </span>
            <span className={styles["rain-chance"]}>{item.rainChance}</span>
          </div>
        </div>
      </div>
    </div>
  ));
};
