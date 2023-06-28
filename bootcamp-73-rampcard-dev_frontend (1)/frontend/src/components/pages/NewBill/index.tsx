import { AppBar, Dialog, Divider, Grid, Toolbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewBillCard from "../../organisms/NewBillCard";
import UploadFile from "../../organisms/UploadFile";
import Cross from "../../../../public/assets/icons/cross.svg";
import Icon from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import Invoice from "../../../../public/assets/icons/bank.svg";
import CrossSymbal from "../../../../public/assets/icons/crosssymbal.svg";
import ReviewBill from "../../organisms/ReviewBillCard";
import SkipPrefillingCard from "../../organisms/SkipPrefillingCard";
import Info from "../../../../public/assets/icons/info.svg";

interface NewBillProps {
  open: boolean;
  onClose: () => void;
}

const NewBill = (props: NewBillProps) => {
  const [files, setFiles] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [isReview, setIsReview] = useState(false);
  const [skipPrefilling, setSkipPrefilling] = useState(true);
  const fileType = ["application/pdf"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, [files]);

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && fileType.includes(file.type)) {
      setFiles(file);
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  const handleFileUpload = (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file && fileType.includes(file.type)) {
      setFiles(file);
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  return (
    <Dialog fullScreen open={props.open} onClose={props.onClose}>
      <AppBar
        sx={{ position: "relative" }}
        style={{ color: "white", backgroundColor: "white" }}
      >
        <Grid
          container
          direction={"row"}
          height={"4.25rem"}
          columnGap={"1rem"}
          alignItems="center"
          paddingLeft={"1.2rem"}
        >
          <Icon alt={"cross"} src={Cross} onClick={props.onClose} />
          <Divider orientation="vertical" style={{ height: "1.3rem" }} />
          <Typography
            children={"Get started"}
            variant="body2"
            color={"#404452"}
          />
        </Grid>
      </AppBar>
      <Grid
        container
        height={"100%"}
        width={"100%"}
        display={"flex"}
        direction={"row"}
        style={{ backgroundColor: "#F5F5F5" }}
        padding={"2.5rem 0rem 0rem 0rem"}
        alignContent={"space-around"}
      >
        <Grid
          item
          display={"inline-block"}
          width={"50%"}
          height={"100%"}
          paddingLeft={"27%"}
          alignSelf="flex-end"
        >
          {/* {
            skipPrefilling && <SkipPrefillingCard title={"Save time with uploading invoice"} icon={Info}/>
          } */}
          {isReview ? (
            <ReviewBill
              price={"2864.5"}
              name={"Julie Mendez"}
              date={"August 31 2022"}
              senderName={"James Smith"}
              account={"477,776,213.09"}
              handleBill={props.onClose}
            />
          ) : (
            <NewBillCard
              price={"25005"}
              name={"Julie"}
              senderName={"Harry"}
              account={"2533,15,23.06"}
              handleBill={() => {
                setIsReview(!isReview);
              }}
              subtitle={"No previous payment to this vendor."}
              billable={"Billable"}
              altmessage={"image"}
              src={Invoice}
              crosssrc={CrossSymbal}
              isReviewDisabled={!(files && pdfUrl && !showLoader)}
            />
          )}
        </Grid>
        <Grid
          item
          display={"inline-block"}
          width={"432px"}
          height={"550px"}
          alignSelf="flex-start"
        >
          <UploadFile
            files={files}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
            handleFileUpload={handleFileUpload}
            pdfUrl={pdfUrl}
            showLoader={showLoader}
            height={"100%"}
            width={"100%"}
          />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default NewBill;
