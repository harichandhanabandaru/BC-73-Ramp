import { AppBar, Box, Dialog, Divider, Grid, Modal } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import NewBillCard from "../../components/organisms/NewBillCard";
import UploadFile from "../../components/organisms/UploadFile";
import Cross from "../../../public/assets/icons/cross.svg";
import Icon from "../../components/atoms/Icon";
import Typography from "../../components/atoms/Typography";
import Invoice from "../../../public/assets/icons/bank.svg";
import CrossSymbal from "../../../public/assets/icons/crosssymbal.svg";
import ReviewBill from "../../components/organisms/ReviewBillCard";
import SkipPrefillingCard from "../../components/organisms/SkipPrefillingCard";
import Info from "../../../public/assets/icons/info.svg";
import { BILL_MANAGEMENT_SERVER_URL } from "../../utils/constants";
import { fetchAllDraftRows } from "../../components/apis/Api";
import { pdfjs } from "react-pdf";
import axios, { AxiosResponse } from "axios";

interface NewBillProps {
  open: boolean;
  onClose: () => void;
  setDraftRows: React.Dispatch<React.SetStateAction<any[]>>;
}
interface Draft {
  employees: string;
  amount: string;
  due_date: string;
  invoice_date: string;
  invoice_no: string;
  account_no: number;
}

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const NewBill = (props: NewBillProps) => {
  const [files, setFiles] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [showLoader, setShowLoader] = useState(true);
  const [isReview, setIsReview] = useState(false);
  const fileType = ["application/pdf"];
  const [open, setOpen] = useState(true);

  const [amount, setAmount] = useState<string[]>([]);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, [files]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleAmountChange = (value: string, index: number) => {
    if (index < 0) {
      console.error("Invalid index:", index);
      return;
    }

    setAmount((prevAmount) => {
      if (index >= prevAmount.length) {
        return [...prevAmount, value];
      }

      const updatedCustomJob = [...prevAmount];
      updatedCustomJob[index] = value;
      return updatedCustomJob;
    });
  };

  const handleInvoiceNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvoiceNumber(event.target.value);
  };

  const handleContactChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContact(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };
  const [invoiceDate, setInvoiceDate] = useState("");
  const [billDueDate, setBillDueDate] = useState("");
  const [memo, setMemo] = useState("");
  const [quickbookDescription, setQuickbookDescription] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [classValue, setClassValue] = useState<string[]>([]);
  const [customJob, setCustomJob] = useState<string[]>([]);
  const [paymentType, setPaymentType] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [senderName, setSenderName] = useState("");
  const [account, setAccount] = useState("");

  const handleDrop = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.target.files?.[0];
    if (!showLoader && file && fileType.includes(file.type)) {
      setPdfFile(event.target.files?.[0]);
      pdfFile1 = event.target.files?.[0];
      setNumPages(1);
      handleDocumentLoadSuccess({ numPages });

      setFiles(file);
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [extractedText, setExtractedText] = useState<string>("");
  let pdfFile1: File | null;

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    event.preventDefault();
    if (!showLoader && file && fileType.includes(file.type)) {
      setPdfFile(event.target.files?.[0]);
      pdfFile1 = event.target.files?.[0];
      setNumPages(1);
      handleDocumentLoadSuccess({ numPages });
      setFiles(file);
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  const handleDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    extractTextFromPDF();
  };

  const extractTextFromPDF = async () => {
    if (!pdfFile1) {
      return;
    }

    const fileData = await pdfFile1.arrayBuffer();
    const pdfText = await pdfjs.getDocument(fileData).promise;
    const extractedText = await extractTextFromPages(pdfText);

    setExtractedText(extractedText);

    const response: AxiosResponse<any> = await axios.post(
      BILL_MANAGEMENT_SERVER_URL + "/pdf/textFromFile",
      {
        file: extractedText.replace(/\n/g, " "),
      }
    );
    setContact(response.data.contact ?? "");
    setInvoiceNumber(response.data.invoiceNumber ?? "2528");
    setLocation(response.data.location);
    setAmount([response.data.amount]);
    setInvoiceDate(response.data.invoiceDate);
    setBillDueDate(response.data.billDueDate);
    setCategory([response.data.category]);
    setClassValue([response.data.classValue]);
    setCustomJob([response.data.customJob]);
    setPaymentType("");
    setPrice(response.data.amount);
    setName(response.data.name.match(/^\w+/)?.[0] || "");
    setDate(response.data.invoiceDate);
    setSenderName("James Smith");
    setAccount("9501956750");
  };

  const extractTextFromPages = async (pdf: pdfjs.PDFDocumentProxy) => {
    let text = "";
    const totalPages = pdf.numPages;

    for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const content = await page.getTextContent();
      content.items.forEach((textItem: any) => {
        text += textItem.str + "\n";
      });
    }

    return text;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInvoiceDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInvoiceDate(event.target.value);
  };

  const handleBillDueDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBillDueDate(event.target.value);
  };

  const handleMemo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMemo(event.target.value);
  };

  const handleQuickbookDescription = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setQuickbookDescription(event.target.value);
  };

  const handleCategory = (value: string, index: number) => {
    if (index < 0) {
      console.error("Invalid index:", index);
      return;
    }

    setCategory((prevCategory) => {
      if (index >= prevCategory.length) {
        return [...prevCategory, value];
      }

      const updatedCustomJob = [...prevCategory];
      updatedCustomJob[index] = value;
      return updatedCustomJob;
    });
  };

  const handleClass = (value: string, index: number) => {
    if (index < 0) {
      console.error("Invalid index:", index);
      return;
    }

    setClassValue((prevClassValue) => {
      if (index >= prevClassValue.length) {
        return [...prevClassValue, value];
      }

      const updatedCustomJob = [...prevClassValue];
      updatedCustomJob[index] = value;
      return updatedCustomJob;
    });
  };

  const handleCustomJob = (value: string, index: number) => {
    if (index < 0) {
      console.error("Invalid index:", index);
      return;
    }

    setCustomJob((prevCustomJob) => {
      if (index >= prevCustomJob.length) {
        return [...prevCustomJob, value];
      }

      const updatedCustomJob = [...prevCustomJob];
      updatedCustomJob[index] = value;
      return updatedCustomJob;
    });
  };

  const handlePaymentType = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentType(event.target.value);
  };

  useEffect(() => {
    const fetchDraftRows = async () => {
      const rampCardData = await fetchAllDraftRows();
      props.setDraftRows(rampCardData);
    };

    fetchDraftRows();
  }, []);

  const createBill = async () => {
    Array.from({ length: amount.length }).map(
      async (_, index) =>
        await axios.post(
          BILL_MANAGEMENT_SERVER_URL + "/bills/saveBillEmployeeFile",
          {
            inVoiceDate: new Date(invoiceDate),
            inVoiceNumber: invoiceNumber,
            dueDate: new Date(billDueDate),
            amount: amount[index],
            accountNumber: account,
            status: "Pending",
            createdDate: new Date(date),
            updatedDate: new Date(date),
            employeeId: "EMP" + contact,
            name: name,
            email: contact,
            contact: 123123123,
            joiningDate: new Date(invoiceDate),
            createdEmployeeDate: "2023-05-15T10:30:00",
            updatedEmployeeDate: "2023-05-15T10:30:00",
            type: "PDF file",
            fileName: "File1",
            data: null,
            createdFileDate: "2023-05-15T10:30:00",
            updatedFileDate: "2023-05-15T10:30:00",
          }
        )
    );
    const rampCardData = await fetchAllDraftRows();
    props.setDraftRows(rampCardData);

    const account_no = Math.floor(1000000 + Math.random() * 9000000);
    props.onClose();
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
          {isReview ? (
            <ReviewBill
              price={price}
              name={name}
              date={date}
              senderName={senderName}
              account={account}
              handleBill={createBill}
              paymentType={paymentType}
            />
          ) : (
            <NewBillCard
              price={"25005"}
              name={name}
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
              handleInvoiceDate={handleInvoiceDate}
              handleBillDueDate={handleBillDueDate}
              handleMemo={handleMemo}
              handleQuickbookDescription={handleQuickbookDescription}
              handleCategory={handleCategory}
              category={category}
              handleClass={handleClass}
              classValue={classValue}
              handleCustomJob={handleCustomJob}
              customJob={customJob}
              handlePaymentType={handlePaymentType}
              paymentType={paymentType}
              handleInvoiceNumberChange={handleInvoiceNumberChange}
              handleLocationChange={handleLocationChange}
              handleAmountChange={handleAmountChange}
              amount={amount}
              invoiceNumber={invoiceNumber}
              location={location}
              contact={contact}
              handleContactChange={handleContactChange}
              invoiceDate={invoiceDate}
              billDueDate={billDueDate}
              setName={setName}
            />
          )}
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                left: "5%",
                top: "40%",
                zIndex: "10",
              }}
            >
              <SkipPrefillingCard
                title={"Save time with uploading invoice"}
                icon={Info}
              />
            </Box>
          </Modal>
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
