import styles from "./blocker.module.scss";
import classnames from "classnames";

const Blocker = ({ children, visible, className }) => {
  return (
    <div
      className={classnames(styles.container, className, {
        [`${styles.visible}`]: visible,
      })}
    >
      {children}
    </div>
  );
};

export default Blocker;
