import { Post, Put, Delete } from "./api";

export const getImageList = async (params) => {
  return await Post("photos/list", params);
};

export const uploadImages = async (formData) => {
  return await Put("photos", formData, {
    header: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteImage = async ({ album, name }) => {
  return await Delete(`photos/${album}/${name}`);
};
