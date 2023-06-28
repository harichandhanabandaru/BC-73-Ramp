import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { Box } from "@mui/system";
import { styled } from "@mui/material";
import { DRAFTS } from "../../utils/constants";
import ReimburseCardTable from "../../components/organisms/ReimburseCardTable";
import { fetchAllDraftRows } from "../../components/apis/Api";
import ReimbursementPageHeader from "../../components/molecules/ReimbursementPageHeader";
import { GridColDef } from "@mui/x-data-grid";
import theme from "../../theme";
import Icon from "../../components/atoms/Icon";
import { Button, Typography } from "@mui/material";
import Glyph from "../../../public/assets/icons/glyph.svg";
import { RenderEmployee } from "../../components/organisms/ReimburseCardTable/renderer/RenderEmployee";
import InvoiceIcon from "../../../public/assets/icons/invoiceicon.svg";
import { deleteDraft } from "../../components/apis/Api";
interface ReimbursementDraftPageProps {
  handleOpenNewBill: () => void;
  setDraftRows: React.Dispatch<React.SetStateAction<any[]>>;
  draftRows: any[];
}

const TableGride = styled(Grid)({
  margin: "0px 40px",
});

const CustomBox = styled(Box)({
  display: "flex",
});
interface Draft {
  id: number;
  employees: string;
  amount: string;
  due_date: string;
  invoice_date: string;
  invoice_no: string;
  invoice: any;
  account_no: string;
  next_step: string;
  joining_date?: string;
}
const StyledButton = styled(Button)({
  height: "2rem",
  width: "6.5rem",
  border: "1px solid rgba(60, 66, 87, 0.12)",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
  textTransform: "none",
  boxShadow:
    "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
});

const ReimbursementDraftPage = (props: ReimbursementDraftPageProps) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const rampCardData = await fetchAllDraftRows();
        props.setDraftRows(rampCardData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [value, setValue] = React.useState("");
  const [id, setId] = useState<number>();
  const [draftObj, setDraftObj] = useState<Draft>();
  const [showAprovalButtons, setShowAprovalButtons] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(false);
  const onRowsSelectionHandler = (ids: any[]) => {
    setShowAprovalButtons(ids.length > 0);
    const selectedRowsData = ids.map((id) =>
      props.draftRows.find((row: { id: any }) => row.id === id)
    );
    setId(selectedRowsData[0]?.id);
    setDraftObj(selectedRowsData[0]);
  };

  const handleDelete = () => {
    deleteDraft(id);
    setReload(true);
  };

  useEffect(() => {
    if (reload) {
      const fetchData = async () => {
        try {
          const rampCardData = await fetchAllDraftRows();
          props.setDraftRows(rampCardData);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
      setReload(false);
    }
  }, [reload]);

  const COLUMNS: GridColDef[] = [
    {
      field: "employees",
      headerName: "EMPLOYEES",
      headerClassName: "header-styling",
      sortable: false,
      flex: 1,
      renderCell: RenderEmployee,
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.text.primary}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
    {
      field: "amount",
      headerName: "AMOUNT",
      editable: true,
      flex: 1,
      headerClassName: "header-styling",
      sortable: false,
      align: "right",
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
    {
      field: "due_date",
      headerName: "DUE DATE",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.colDef.headerName}
        </Typography>
      ),
    },
    {
      field: "invoice_date",
      headerName: "INVOICE DATE",
      flex: 1,
      headerClassName: "header-styling",
      sortable: false,
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.colDef.headerName}
        </Typography>
      ),
    },
    {
      field: "invoice_no",
      headerName: "INVOICE NO.",
      flex: 1,
      headerClassName: "header-styling",
      sortable: false,
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.colDef.headerName}
        </Typography>
      ),
    },
    {
      field: "invoice",
      headerName: "INVOICE",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
      renderCell: (params) => <img src={InvoiceIcon} />,
    },
    {
      field: "account_no",
      headerName: "ACCOUNT NO.",
      flex: 1,
      headerClassName: "header-styling",
      sortable: false,
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.colDef.headerName}
        </Typography>
      ),
    },
    {
      field: "next_step",
      headerName: "NEXT STEP",
      sortable: false,
      renderCell: () => <StyledButton children="Review" variant="outlined" />,
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.text.primary}>
          {params.colDef.headerName}
        </Typography>
      ),
    },
    {
      field: "icon",
      headerName: "",
      headerClassName: "header-styling",
      width: 184,
      sortable: false,
      renderCell: (params) => <Icon alt="icon" src={Glyph} />,
    },
  ];
  return (
    <>
      <Grid container>
        <ReimbursementPageHeader
          handleOpenNewBill={props.handleOpenNewBill}
          heading={DRAFTS}
        />
        <TableGride item>
          <ReimburseCardTable
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data={props.draftRows.filter((row: { employees: string }) =>
              row.employees.toLowerCase().includes(value.toLowerCase())
            )}
            showAprovalButtons={showAprovalButtons}
            handleDelete={handleDelete}
            onRowsSelectionHandler={onRowsSelectionHandler}
            columnData={COLUMNS}
          />
        </TableGride>
      </Grid>
    </>
  );
};

export default ReimbursementDraftPage;
