import styles from "./zip-form.module.css";

//ZIP input form with state handled in App.

export const ZipForm = (props) => {
  return (
    <div className={styles["form-wrapper"]}>
      <div className={styles["form-container"]}>
        <form>
          <label>
            Enter ZIP Code
            <input
              onChange={props.onChange}
              value={props.value}
              type="text"
              maxLength="5"
              name="zip"
            />
          </label>
          <input
            className={styles["button"]}
            onClick={props.onClick}
            type="submit"
            value="Check Weather"
          />
        </form>
      </div>
    </div>
  );
};
