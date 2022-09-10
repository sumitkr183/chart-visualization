import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { cropImageNow } from "../global/cropAction";

const CropImages = (props) => {
  const [previewImage, setPreviewImage] = useState(false);
  const [crop, setCrop] = useState({
    unit: "50%",
    x: 25,
    y: 25,
    width: 50,
    height: 50,
  });

  const handleCropImage = async () => {
    const response = await cropImageNow(props?.image, crop);

    if (response) setPreviewImage(response);
  };
  return (
    <>
      {!previewImage ? (
        <>
          <ReactCrop crop={crop} onChange={(c) => setCrop(c)}>
            <img src={props?.image} alt="screenshot" width={800} height={400} />
          </ReactCrop>
          <button onClick={handleCropImage}>Crop Now</button>
        </>
      ) : (
        <img src={previewImage} width="auto" height="auto" alt="screenshot" />
      )}
    </>
  );
};

export default CropImages;
