import { Select } from "components/common";
import { useMemo } from "react";

const SelectAlbum = ({ onChange, value }) => {
  const options = useMemo(() => {
    return [
      {
        text: "Select album",
        value: "",
      },
      {
        text: "Travel",
        value: "travel",
      },
      {
        text: "Personal",
        value: "personal",
      },
      {
        text: "Food",
        value: "food",
      },
      {
        text: "Nature",
        value: "nature",
      },
      {
        text: "Other",
        value: "other",
      },
    ];
  }, []);
  return <Select value={value} options={options} onChange={onChange} />;
};

export default SelectAlbum;
