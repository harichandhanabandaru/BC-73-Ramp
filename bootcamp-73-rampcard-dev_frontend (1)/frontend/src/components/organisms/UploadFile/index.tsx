import React, { useEffect, useRef, useState } from "react";
import Upload from "../../../../public/assets/icons/upload.svg";
import Typography from "../../atoms/Typography";
import { Grid } from "@mui/material";
import Loader from "../../atoms/Loader";
import loaderImg from "../../../../public/assets/icons/loaderIcon.svg";

interface UploadProps {
  height: string;
  width: string;
  files: any;
  pdfUrl: any;
  showLoader: boolean;
  handleDragOver: (event: any) => void;
  handleDrop: (event: any) => void;
  handleFileUpload: (event: any) => void;
}

const UploadFile = (props: UploadProps) => {
  const inputRef = useRef<any>(null);

  const {
    files,
    pdfUrl,
    showLoader,
    handleDragOver,
    handleDrop,
    handleFileUpload,
  } = props;

  return (
    <div
      data-testid="uploadFile"
      style={{
        width: props.width,
        height: props.height,
        border: "1px solid #0196ED",
      }}
    >
      {!files && (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => inputRef?.current?.click()}
          style={{
            width: props.width,
            height: props.height,
            cursor: "pointer",
            // border: "1px solid #0196ED",
          }}
        >
          <input
            type={"file"}
            onChange={handleFileUpload}
            ref={inputRef}
            hidden
          />
          <Grid
            container
            direction="column"
            rowGap={"18px"}
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Grid item>
              <img
                src={Upload}
                alt="upload icon"
                style={{ textAlign: "center" }}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="caption2"
                children={"Drop your invoice or click here to upload"}
                color={"#687385"}
              />
            </Grid>
          </Grid>
        </div>
      )}
      {files &&
        pdfUrl &&
        (showLoader ? (
          <Loader src={loaderImg} alt={"loader"} height={props.height} />
        ) : (
          <>
            {/* <object
              width={"100%"}
              height={"750px"}
              data={pdfUrl + "#toolbar=0"}
              type="application/pdf"
            /> */}
            <embed
              src={pdfUrl + "#toolbar=0"}
              type="application/pdf"
              width={"100%"}
              height={"750px"}
              data-testid="PDFViewer"
              style={{ height: `${props.height}`, width: `${props.width}` }}
            />
          </>
        ))}
    </div>
  );
};
export default UploadFile;
