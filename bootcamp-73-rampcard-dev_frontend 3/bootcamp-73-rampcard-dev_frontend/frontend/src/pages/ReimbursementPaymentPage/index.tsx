import React, { useEffect, useState } from "react";
import { Grid } from "semantic-ui-react";
import { styled } from "@mui/material";
import { PAYMENTS } from "../../utils/constants";
import ReimbursePaymentCardTable from "../../components/organisms/ReimbursePaymentCardTable";
import ReimbursementPageHeader from "../../components/molecules/ReimbursementPageHeader";
import { fetchAllPaymentRows } from "../../components/apis/Api";
interface ReimbursementPaymentPageProps {
  handleOpenNewBill: () => void;
}

const TableGride = styled(Grid)({
  margin: "0px 40px",
});

const ReimbursementPaymentPage = (props: ReimbursementPaymentPageProps) => {
  const [paymentRows, setPaymentRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rampCardData = await fetchAllPaymentRows();
        setPaymentRows(rampCardData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [value, setValue] = React.useState("");
  return (
    <>
      <Grid container>
        <ReimbursementPageHeader
          handleOpenNewBill={props.handleOpenNewBill}
          heading={PAYMENTS}
        />

        <TableGride item>
          <ReimbursePaymentCardTable
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data={paymentRows.filter((row) =>
              row.employees.toLowerCase().includes(value.toLowerCase())
            )}
          />
        </TableGride>
      </Grid>
    </>
  );
};

export default ReimbursementPaymentPage;
