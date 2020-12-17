import styles from "./modal.module.scss";
import classnames from "classnames";
import { Icon, Blocker } from "components/common";

const Modal = ({ title, className, children, visible, onClose }) => {
  return (
    <Blocker visible={visible} className={styles.blocker}>
      <div
        className={classnames(
          styles.modal,
          {
            [`${styles.visible}`]: visible,
          },
          className
        )}
      >
        <header className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <Icon name="cross" onClick={onClose} />
        </header>
        {children}
      </div>
    </Blocker>
  );
};
export default Modal;
