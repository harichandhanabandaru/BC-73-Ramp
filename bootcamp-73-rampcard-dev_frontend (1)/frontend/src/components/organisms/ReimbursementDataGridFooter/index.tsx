import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import { Item } from "semantic-ui-react";
import theme from "../../../theme";
import { useGridApiContext } from "@mui/x-data-grid";
import { REIMBURSEMENDATA } from "../../../utils/constants";

export interface Props {
  maxResults: number;
  startIndex?: number;
  setStartIndex?: React.Dispatch<React.SetStateAction<number>>;
  data?: typeof REIMBURSEMENDATA;
}

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "12px 16px",
  alignItems: "center",
});

const StyledButton = styled(Button)({
  height: "2rem",
  width: "4.4rem",
  border: "1px solid rgba(60, 66, 87, 0.12)",
  borderRadius: "4px",
  color: theme.palette.text.secondary,
});

const ReimbursementDataGridFooter = (props: Props) => {
  const apiRef = useGridApiContext();
  const maxResults = props.maxResults;
  const pageSize = 6;
  apiRef.current.setPageSize(pageSize);
  const isNextDisabled =
    (props.startIndex || 0) + pageSize >= (props.data?.length || 0);
  const isPrevDisabled = (props.startIndex || 0) - pageSize < 0;
  return (
    <StyledBox data-testid="datagrid-footer">
      <Item>{`${maxResults} results`}</Item>
      <Stack direction="row" alignItems="center" gap={1}>
        <Item>
          <StyledButton
            children="Previous"
            variant="outlined"
            onClick={() =>
              props.setStartIndex(Math.max(0, props.startIndex - pageSize))
            }
            disabled={isPrevDisabled}
          />
        </Item>
        <Item>
          <StyledButton
            children="Next"
            variant="outlined"
            onClick={() =>
              props.setStartIndex(
                Math.min(props.startIndex + pageSize, props.data?.length || 0)
              )
            }
            disabled={isNextDisabled}
          />
        </Item>
      </Stack>
    </StyledBox>
  );
};

export default ReimbursementDataGridFooter;
