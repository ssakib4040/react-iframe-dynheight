// src/IframeGenerator.tsx

import React, { useState } from "react";

const IframeGenerator: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [iframeHeight, setIframeHeight] = useState<number>(0);

  const handleHtmlChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlContent(e.target.value);
  };

  const handleGenerateIframe = () => {
    // Create a temporary div element to calculate the content size
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    // Set the iframe height based on the content size
    setIframeHeight(tempDiv.offsetHeight);

    // Clean up the temporary div
    tempDiv.remove();
  };

  return (
    <div>
      <textarea
        placeholder="Enter HTML content..."
        rows={5}
        cols={50}
        value={htmlContent}
        onChange={handleHtmlChange}
      />
      <button onClick={handleGenerateIframe}>Generate Iframe</button>
      {iframeHeight > 0 && (
        <iframe
          title="Dynamic Iframe"
          srcDoc={htmlContent}
          style={{ height: `${iframeHeight}px`, width: "100%" }}
        />
      )}
    </div>
  );
};

export default IframeGenerator;
