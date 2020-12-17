import styles from "./upload-image-modal.module.scss";
import { Modal, Button, Image } from "components/common";
import { SelectAlbum } from "components/album";
import { useEffect, useRef, useState } from "react";

const UploadImageModal = ({ visible, onClose, fetchImage, uploadImages }) => {
  const [files, setFiles] = useState(null);
  const [album, setAlbum] = useState("");
  const fileRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setFiles(null);
      setAlbum("");
    }
  }, [visible]);

  const handleDragNDropOnClick = () => {
    fileRef.current.click();
  };

  const handleDragNDropOnChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.target.files);
    setFiles(files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    const dt = e.dataTransfer;
    const files = Array.from(dt.files);
    setFiles(files);
  }

  const handleUploadOnClick = async () => {
    if (!files) {
      alert("Select photo to proceed");
      return;
    }
    if (!album) {
      alert("Select album to proceed");
      return;
    }
    const formData = new FormData();
    formData.append("album", album);
    files.forEach((file) => {
      formData.append("documents", file);
    });
    await uploadImages(formData);
    onClose();
    fetchImage();
  };

  const handleAlbumOnChange = (value) => {
    setAlbum(value);
  };

  return (
    <Modal
      title="Upload photos"
      className={styles.uploadImageModal}
      visible={visible}
      onClose={onClose}
    >
      <div
        className={styles.dragNDrop}
        onClick={handleDragNDropOnClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <form className="my-form">
          <p>Drag 'n' drop some files here, or click to select files</p>
          <input
            type="file"
            className={styles.file}
            onChange={handleDragNDropOnChange}
            multiple
            accept="image/*"
            ref={fileRef}
          />
        </form>
      </div>

      <div className={styles.filesSelected}>
        {!files ? (
          <p>No files selected...</p>
        ) : (
          files.map((file, index) => {
            return (
              <Image
                key={`preview-${index}`}
                className={styles.preview}
                src={URL.createObjectURL(file)}
              />
            );
          })
        )}
      </div>
      <footer className={styles.footer}>
        <SelectAlbum value={album} onChange={handleAlbumOnChange} />
        <Button
          icon="cloud-upload"
          text="Upload"
          name="upload"
          onClick={handleUploadOnClick}
        />
      </footer>
    </Modal>
  );
};

export default UploadImageModal;
