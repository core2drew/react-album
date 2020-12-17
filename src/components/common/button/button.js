import styles from "./button.scss";
import classnames from "classnames";
import { Icon } from "components/common";

const Button = ({ text, className, children, left = true, icon, onClick }) => {
  return (
    <button className={classnames(styles.button, className)} onClick={onClick}>
      {left && <Icon name={icon} />}
      {text || children}
      {!left && <Icon name={icon} />}
    </button>
  );
};

export default Button;
