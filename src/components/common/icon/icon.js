import styles from "./icon.module.scss";
import classnames from "classnames";

const Icon = ({ name, className, onClick = null }) => {
  const icon = name && `icon-${name}`;
  return (
    <i
      className={classnames(styles.icon, className, icon, {
        [`${styles.clickable}`]: onClick,
      })}
      onClick={onClick}
    ></i>
  );
};

export default Icon;
