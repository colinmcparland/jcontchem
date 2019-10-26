import React, { FC, useState } from "react";
import { Document, Page } from "react-pdf";
import { RouteComponentProps } from "react-router";

interface SingleDocumentProps extends Partial<RouteComponentProps> {
  name?: string;
}

export const SingleDocument: FC<SingleDocumentProps> = () => {
  const [currentNumPages, setCurrentNumPages] = useState<number>(0);
  const [currentPage] = useState<number>(0);
  // const docName = props.match ? props.match.params : "";

  return (
    <div>
      <Document
        file={"http://admin.jcontchem.com/wp-content/uploads/2019/10/ctp.pdf"}
        onLoadSuccess={(data: { numPages: number }): void =>
          setCurrentNumPages(data.numPages)
        }
      >
        <Page pageNumber={currentPage} />
      </Document>
      <p>
        Page {currentPage} of {currentNumPages}
      </p>
    </div>
  );
};
