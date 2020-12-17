import styles from "./album-images.module.scss";
import { Image, Icon } from "components/common";
import classnames from "classnames";

const AlbumImages = ({ images, handleDelete }) => {
  return (
    <div className={styles.albumImages}>
      {images.map(({ id, name, album, raw }, index) => {
        return (
          <div
            className={classnames(styles.albumImage)}
            key={`album-image-${index}`}
          >
            <div className={styles.actions}>
              <Icon
                className={styles.delete}
                name="trash"
                onClick={() => handleDelete({ name, album })}
              />
            </div>
            <div className={styles.image}>
              <Image src={raw} />
            </div>
            <p className={styles.imageName}>{name}</p>
            <small>{album}</small>
          </div>
        );
      })}
    </div>
  );
};
export default AlbumImages;
