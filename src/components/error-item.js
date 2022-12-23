import styles from "./error-item.module.css";
import icon from "../images/11d@2x.png";

export const ErrorItem = (item) => {
  return (
    <div>
      <div className={styles["error"]}>{item.errorMessage}</div>
      <img src={icon} className={styles["icon"]} alt="thunder clouds icon" />
    </div>
  );
};
