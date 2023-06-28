import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import { Item } from "semantic-ui-react";
import theme from "../../../theme";
import { useGridApiContext } from "@mui/x-data-grid";
import { REIMBURSEMENDATA } from "../../../utils/constants";
import Typography from "../../atoms/Typography";
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
  textTransform: "none",
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
      <Item>
        <Typography
          style={{ display: "inline-block" }}
          variant="body2"
          color={theme.palette.other.mediumEmphasis}
        >
          {`${maxResults}`}
        </Typography>
        <Typography
          style={{ display: "inline-block" }}
          variant="body3"
          marginLeft={0.5}
          color={theme.palette.other.mediumEmphasis}
        >
          {` results`}
        </Typography>
      </Item>
      <Stack direction="row" alignItems="center" gap={1}>
        <Item>
          <Button
            sx={{
              width: "4.4375rem",
              minWidth: "4.4375rem",
              height: "2rem",
              padding: "3px 8px 5px",
              textTransform: "none",
              border: "1px solid rgba(60, 66, 87, 0.12)",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
            variant="outlined"
            onClick={() =>
              props.setStartIndex(Math.max(0, props.startIndex - pageSize))
            }
            disabled={isPrevDisabled}
          >
            <Typography
              variant="body2"
              color={theme.palette.other.merchantRuleText}
            >
              {"Previous"}
            </Typography>
          </Button>
        </Item>
        <Item>
          <Button
            sx={{
              width: "3rem",
              minWidth: "3rem",
              height: "2rem",
              padding: "3px 8px 5px",
              textTransform: "none",
              border: "1px solid rgba(60, 66, 87, 0.12)",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
            }}
            variant="outlined"
            onClick={() =>
              props.setStartIndex(
                Math.min(props.startIndex + pageSize, props.data?.length || 0)
              )
            }
            disabled={isNextDisabled}
          >
            <Typography
              variant="body2"
              color={theme.palette.other.merchantRuleText}
            >
              {"Next"}
            </Typography>
          </Button>
        </Item>
      </Stack>
    </StyledBox>
  );
};

export default ReimbursementDataGridFooter;
