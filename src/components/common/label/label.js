import styles from "./label.scss";
import classnames from "classnames";
const Label = ({ text, className }) => {
  return <label className={classnames(styles.label, className)}>{text}</label>;
};

export default Label;
