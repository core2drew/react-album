import styles from "./image.scss";
import classnames from "classnames";

const Image = ({ className, ...props }) => {
  return (
    <img
      {...props}
      alt={props.alt || "image"}
      className={classnames(styles.image, className)}
    />
  );
};

export default Image;
