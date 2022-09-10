import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import CropImages from "./CropImages";

const videoConstraints = {
  width: 800,
  height: 400,
  facingMode: "user",
};

let imageSrc = false;

const Selfie = () => {
  const [mediaStatus, setMediaStatus] = useState({
    error: false,
    success: false,
  });
  const [showSelfie, setShowSelfie] = useState(true);
  const [isCrop, setIsCrop] = useState(false);

  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    imageSrc = webcamRef.current.getScreenshot();
    setShowSelfie(false);
  }, [webcamRef]);

  const handleError = (error) => {
    setMediaStatus({ error: error.message, success: false });
  };

  const handleReceivedMedia = () => {
    setMediaStatus({ error: false, success: true });
  };

  const handleResetMedia = (status) => {
    setShowSelfie(status);
    setMediaStatus({ error: false, success: false });
  };

  return (
    <>
      {!mediaStatus.error && !mediaStatus.success && (
        <h1 className="wait">Please wait serving media...</h1>
      )}
      {mediaStatus.error && <h1 className="error">{mediaStatus.error}</h1>}
      <div className="selfie__wrapper">
        {showSelfie ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={800}
            videoConstraints={videoConstraints}
            onUserMediaError={handleError}
            onUserMedia={handleReceivedMedia}
          />
        ) : isCrop ? (
          <CropImages image={imageSrc} />
        ) : (
          <img src={imageSrc} alt="screenshot" width={800} height={400} />
        )}
        {mediaStatus.success && showSelfie && (
          <button onClick={capture}>Capture photo</button>
        )}

        {!showSelfie && (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button onClick={() => handleResetMedia(true)}>Reset</button>
            <button onClick={() => setIsCrop(!isCrop)}>
              {isCrop ? "Back" : "Crop"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Selfie;
