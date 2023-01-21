import React from "react";

export const MyDownloadPage: React.FC = () => {
  const download = () => {
    console.log("Hello World");
  };

  return (
    <>
      <button onClick={() => download()}>Download</button>
    </>
  );
};
