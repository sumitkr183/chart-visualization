import React, { useState } from "react";

const CopyToClipboard = () => {
  const [copy, setCopy] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(inputValue);

    setCopy(true);

    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="copy__wrapper">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={() => handleCopy()} disabled={copy}>
        {copy ? "Copied" : "Copy To Clipboard"}
      </button>
    </div>
  );
};

export default CopyToClipboard;
