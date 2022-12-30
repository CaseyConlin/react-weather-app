import styles from "./forecast-wrapper.module.css";
export const ForecastWrapper = (props) => {
  return <div className={styles["forecast-container"]}>{props.children}</div>;
};
