import styles from "./album-header.module.scss";
import { Button, Select } from "components/common";
import { useMemo } from "react";
const AlbumHeader = ({ showUploadModal, onChangeLimit, limit }) => {
  const limits = useMemo(() => {
    return [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "25",
        value: 25,
      },
      {
        text: "50",
        value: 50,
      },
      {
        text: "100",
        value: 100,
      },
      {
        text: "250",
        value: 250,
      },
      {
        text: "500",
        value: 500,
      },
    ];
  }, []);
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Photos</h1>
      <Button icon="cloud-upload" text="Upload" onClick={showUploadModal} />
      <span className={styles.separator}></span>
      <Select value={limit} options={limits} onChange={onChangeLimit} />
    </header>
  );
};

export default AlbumHeader;
