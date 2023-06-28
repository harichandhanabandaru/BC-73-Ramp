import React from "react";
import { Grid } from "semantic-ui-react";
import { Box } from "@mui/system";
import { styled } from "@mui/material";
import { DRAFTS } from "../../../utils/constants";
import ReimburseCardTable from "../../organisms/ReimburseCardTable";
import { REIMBURSEMENDATA } from "../../../utils/constants";
import ReimbursementPageHeader from "../../molecules/ReimbursementPageHeader";

interface ReimbursementDraftPageProps {
  handleOpenNewBill: () => void;
}

const TableGride = styled(Grid)({
  margin: "0px 40px",
});

const CustomBox = styled(Box)({
  display: "flex",
});

const ReimbursementDraftPage = (props: ReimbursementDraftPageProps) => {
  return (
    <>
      <Grid container>
        <ReimbursementPageHeader
          handleOpenNewBill={props.handleOpenNewBill}
          heading={DRAFTS}
        />
        <TableGride item>
          <ReimburseCardTable data={REIMBURSEMENDATA} />
        </TableGride>
      </Grid>
    </>
  );
};

export default ReimbursementDraftPage;
