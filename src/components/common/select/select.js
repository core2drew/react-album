import styles from "./select.scss";
import classnames from "classnames";

const Select = ({ options = [], className, onChange, value }) => {
  const handleOnChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <select
      className={classnames(styles.select, className)}
      onChange={handleOnChange}
      value={value}
    >
      {options.map(({ text, value }, index) => (
        <option key={`select-option-${index}`} value={value}>
          {text}
        </option>
      ))}
    </select>
  );
};

export default Select;
