import React, { useState } from "react";
import RampCardTable from "../../organisms/RampCardTable";
import { Grid } from "semantic-ui-react";
import Typography from "../../../components/atoms/Typography";
import Button from "../../../components/atoms/Button";
import { Box } from "@mui/system";
import { styled } from "@mui/material";
import {
  ROWS,
  ACCOUNTINGPAGEDATA,
  CREATE_CATEGORY_RULE,
} from "../../../utils/constants";
import { COLUMNS } from "../../../components/organisms/RampCardTable/index.stories";
import CreateCategoryRule from "../../organisms/CreateCategoryRule/index";

const WrapperBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "30px 40px",
});

const CustomButton = styled(Button)({
  padding: "0px 0.625rem",
  marginLeft: "0.625rem",
});

const TableGride = styled(Grid)({
  margin: "0px 40px",
});

const AccountingPage = () => {
  const [value, setValue] = React.useState("");
  const [openCategoryRule, setOpenCategoryRule] = useState(false);

  const handleOpenRule = () => {
    setOpenCategoryRule(!openCategoryRule);
  };

  const handleCloseRule = () => {
    setOpenCategoryRule(false);
  };

  return (
    <>
      <Grid container>
        <WrapperBox>
          <Box>
            <Typography children="Ramp cards" variant="h4" />
          </Box>
          <Box>
            <CustomButton children="Sync history" variant="outlined" />
            <CustomButton children="Settings" variant="outlined" />
            <CustomButton
              children={CREATE_CATEGORY_RULE}
              variant="contained"
              onClick={handleOpenRule}
            />
          </Box>
        </WrapperBox>
        <Box sx={{ display: "flex", margin: "40px" }}>
          {ACCOUNTINGPAGEDATA.map((item) => (
            <Box sx={{ marginRight: "30px" }}>
              <Typography children={item.name} variant="body2" />
              <Typography children={item.count} variant="body2" />
            </Box>
          ))}
        </Box>
        <TableGride item>
          <RampCardTable
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data={ROWS.filter((row) =>
              row.transactions[0].toLowerCase().includes(value.toLowerCase())
            )}
            columnData={COLUMNS}
          />
        </TableGride>
      </Grid>
      <CreateCategoryRule
        handleCancelClick={handleCloseRule}
        handleCreateClick={handleOpenRule}
        open={openCategoryRule}
        setOpenCategoryRule={setOpenCategoryRule}
      />
    </>
  );
};

export default AccountingPage;
