import { useCallback, useEffect, useState } from "react";
import { AlbumHeader, AlbumImages, UploadImageModal } from "components/album";
import { getImageList, uploadImages, deleteImage } from "api/album";
import styles from "./album-container.module.scss";

const AlbumContainer = () => {
  const [images, setImages] = useState([
    { id: 1, name: "image 1", category: "personal" },
    { id: 2, name: "image 2", category: "personal" },
    { id: 3, name: "image 3", category: "personal" },
    { id: 4, name: "image 4", category: "personal" },
    { id: 5, name: "image 5", category: "personal" },
  ]);
  const [uploadModal, setUploadModal] = useState(false);
  const [limit, setLimit] = useState(25);

  const fetchImage = useCallback(
    async ({ skip = 0 } = {}) => {
      const { documents } = await getImageList({
        skip,
        limit,
      });
      setImages(documents);
    },
    [limit]
  );

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  const handleShowModal = () => {
    setUploadModal(true);
  };

  const handleHideModal = () => {
    setUploadModal(false);
  };

  const handleOnChangeLimit = (limit) => {
    setLimit(limit);
  };

  const handleDelete = async (data) => {
    await deleteImage(data);
    fetchImage();
  };

  return (
    <div className={styles.container}>
      <AlbumHeader
        showUploadModal={handleShowModal}
        limit={limit}
        onChangeLimit={handleOnChangeLimit}
      />
      <AlbumImages images={images} handleDelete={handleDelete} />
      <UploadImageModal
        visible={uploadModal}
        onClose={handleHideModal}
        fetchImage={fetchImage}
        uploadImages={uploadImages}
      />
    </div>
  );
};

export default AlbumContainer;
