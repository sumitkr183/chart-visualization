export const cropImageNow = async (image, crop) => {
  try {
    var imageObj = new Image();
    imageObj.src = image;

    const canvas = document.createElement("canvas");
    const scaleX = imageObj.naturalWidth / imageObj.width;
    const scaleY = imageObj.naturalHeight / imageObj.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      imageObj,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return canvas.toDataURL("image/jpeg", 1);
  } catch (e) {
    return false;
  }
};
