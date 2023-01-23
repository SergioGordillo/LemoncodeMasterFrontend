import React from "react";

import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

export const MyDownloadPage: React.FC = () => {
  const download = () => {
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "example.docx");
    });
  };

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [new TextRun("Hello World")],
          }),
        ],
      },
    ],
  });

  return (
    <>
      <button onClick={() => download()}>Download</button>
    </>
  );
};
