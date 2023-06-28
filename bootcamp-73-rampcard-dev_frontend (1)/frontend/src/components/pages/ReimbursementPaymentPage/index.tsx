import React from "react";
import { Grid } from "semantic-ui-react";
import { styled } from "@mui/material";
import { PAYMENTS } from "../../../utils/constants";
import { REIMBURSEMENTPAYMENTDATA } from "../../../utils/constants";
import ReimbursePaymentCardTable from "../../organisms/ReimbursePaymentCardTable";
import ReimbursementPageHeader from "../../molecules/ReimbursementPageHeader";

interface ReimbursementPaymentPageProps {
  handleOpenNewBill: () => void;
}

const TableGride = styled(Grid)({
  margin: "0px 40px",
});

const ReimbursementPaymentPage = (props: ReimbursementPaymentPageProps) => {
  return (
    <>
      <Grid container>
        <ReimbursementPageHeader
          handleOpenNewBill={props.handleOpenNewBill}
          heading={PAYMENTS}
        />

        <TableGride item>
          <ReimbursePaymentCardTable data={REIMBURSEMENTPAYMENTDATA} />
        </TableGride>
      </Grid>
    </>
  );
};

export default ReimbursementPaymentPage;
