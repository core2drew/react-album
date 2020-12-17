import styles from "./checkbox.module.scss";
import classnames from "classnames";
import { Icon } from "components/common";
const Checkbox = ({ value = false, className }) => {
  return (
    <div className={classnames(styles.checkbox, className)}>
      {value && <Icon className={styles.icon} name="checkmark" />}
    </div>
  );
};

export default Checkbox;
