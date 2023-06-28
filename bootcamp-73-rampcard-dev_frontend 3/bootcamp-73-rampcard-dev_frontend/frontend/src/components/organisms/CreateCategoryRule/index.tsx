import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogProps,
  DialogTitle,
  Divider,
  Grid,
  Snackbar,
  SnackbarContent,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button";
import CategoryRule from "../../molecules/CategoryRule";
import {
  ACTIVE_RULES,
  CANCEL,
  CATEGORY_RULES,
  CATEGORY_RULES_DESC,
  CREATE_CATEGORY_RULE,
  CREATE_RULE,
  QUICKBOOKS_CATEGORY,
  QUICK_BOOKS_CATEGORY,
  RECENT_CATEGORY,
  SEE_ALL_CATEGORY,
  WHAT_ARE_CATEGORY_RULES,
  WHAT_ARE_CATEGORY_RULES_DESC,
} from "../../../utils/constants";
import theme from "../../../theme";
import {
  createMapping,
  fetchAllMappings,
  fetchAllRampCategories,
} from "../../apis/Api";

export interface CreateCategoryRuleProps extends DialogProps {
  handleCancelClick: () => void;
  handleCreateClick: () => void;
  setOpenCategoryRule: React.Dispatch<React.SetStateAction<boolean>>;
  setCategoryRulesCount: React.Dispatch<React.SetStateAction<number>>;
  categoryRulesCount: number;
}
interface SelectedValues {
  [key: string]: string;
}

const CreateCategoryRule = (props: CreateCategoryRuleProps) => {
  const [quickbookCategories, setQuickbookCategories] =
    useState<SelectedValues>();
  const [snackbar, setSnackbar] = useState(false);

  const handleChange = (event: any, key: string) => {
    setQuickbookCategories({
      ...quickbookCategories,
      [key]: event?.target?.value,
    });
  };

  const handleOpenSnackbar = () => {
    setSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(false);
  };

  const handleSubmit = () => {
    Object.entries(quickbookCategories).forEach(([key, value]) => {
      if (value) {
        createMapping(key, value);
        props.setCategoryRulesCount(props.categoryRulesCount + 1);
      }
    });
    props.handleCreateClick();
    handleOpenSnackbar();
  };

  const [mappings, setMappings] = useState([]);
  const [rampCategories, setRampCategories] = useState([]);
  useEffect(() => {
    const fetchMappingData = async () => {
      try {
        const mappingsResponse = await fetchAllMappings();
        setMappings(mappingsResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMappingData();
  }, []);

  useEffect(() => {
    const fetchRampCategories = async () => {
      try {
        const rampCategoriesResponse = await fetchAllRampCategories();

        setRampCategories(rampCategoriesResponse);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRampCategories();
  }, [mappings]);

  useEffect(() => {
    const filteredRampCategories = rampCategories.filter((category) => {
      return !mappings.some(
        (mappedCategory) => mappedCategory.rampCategory === category.name
      );
    });
    const newQuickbookCategories = Object.fromEntries(
      filteredRampCategories.map((rc) => [rc.name, ""])
    );
    setQuickbookCategories(newQuickbookCategories);
  }, [rampCategories]);

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        sx={{ position: "absolute" }}
        data-testid="CreateCategory"
      >
        <DialogTitle>
          <Typography
            children={CREATE_CATEGORY_RULE}
            variant={"body2"}
            color={theme.palette.other.highEmphasis}
            fontWeight={600}
          />
        </DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container direction={"column"}>
              <Grid item>
                <Typography
                  variant="body2"
                  color={theme.palette.other.highEmphasis}
                  fontWeight={600}
                  children={CATEGORY_RULES}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body3"
                  color={theme.palette.other.highEmphasis}
                  fontWeight={400}
                  children={CATEGORY_RULES_DESC}
                />
              </Grid>
              <Grid item paddingTop={"24px"}>
                <Typography
                  variant="body2"
                  color={theme.palette.other.highEmphasis}
                  fontWeight={600}
                  children={ACTIVE_RULES}
                />
                <Grid
                  container
                  direction={"column"}
                  rowGap={"16px"}
                  paddingTop={"12px"}
                >
                  {mappings &&
                    mappings.map((obj) => {
                      return (
                        <CategoryRule
                          textValue={obj.rampCategory}
                          textFieldPlaceholder={obj.rampCategory}
                          dropDownPlaceholder={QUICKBOOKS_CATEGORY}
                          options={QUICK_BOOKS_CATEGORY}
                          dropDownValue={obj.quickbookCategory}
                          onChange={() => {}}
                        />
                      );
                    })}
                </Grid>
              </Grid>
              <Grid item paddingTop={"24px"}>
                <Typography
                  variant="body2"
                  color={"#1A1B25"}
                  fontWeight={600}
                  children={RECENT_CATEGORY}
                />
                <Grid
                  container
                  direction={"column"}
                  rowGap={"16px"}
                  paddingTop={"12px"}
                >
                  {rampCategories &&
                    rampCategories
                      .filter((rc) => {
                        return !mappings.some(
                          (m) => m.rampCategory === rc.name
                        );
                      })
                      .map((obj) => {
                        return (
                          <CategoryRule
                            textValue={obj.name}
                            textFieldPlaceholder={obj.name}
                            dropDownPlaceholder={QUICKBOOKS_CATEGORY}
                            options={QUICK_BOOKS_CATEGORY}
                            onChange={(event) => handleChange(event, obj.name)}
                            dropDownValue={quickbookCategories[obj.name]}
                          />
                        );
                      })}
                </Grid>
              </Grid>
              <Grid item paddingTop={"24px"}>
                <Typography
                  variant="body2"
                  color={theme.palette.other.highEmphasis}
                  fontWeight={600}
                  children={WHAT_ARE_CATEGORY_RULES}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body3"
                  color={theme.palette.other.highEmphasis}
                  fontWeight={400}
                  children={WHAT_ARE_CATEGORY_RULES_DESC}
                />
              </Grid>
              <Grid item paddingTop={"12px"}>
                <Button
                  sx={{
                    width: "130px",
                    minWidth: "130px",
                    height: "2rem",
                    padding: "3px 8px 5px",
                    textTransform: "none",
                    boxShadow:
                      "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
                    borderRadius: "4px",
                    border: "1px solid rgba(60, 66, 87, 0.12)",
                  }}
                  variant="outlined"
                >
                  <Typography
                    variant="body2"
                    color={theme.palette.other.mediumEmphasis}
                    children={SEE_ALL_CATEGORY}
                  />
                </Button>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions>
          <Button
            sx={{
              width: "58px",
              minWidth: "58px",
              height: "2rem",
              padding: "3px 8px 5px",
              textTransform: "none",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              border: "1px solid rgba(60, 66, 87, 0.12)",
            }}
            variant="outlined"
            onClick={props.handleCancelClick}
          >
            <Typography
              variant="body2"
              color={theme.palette.other.mediumEmphasis}
              children={CANCEL}
            />
          </Button>
          <Button
            sx={{
              width: "86px",
              minWidth: "86px",
              height: "2rem",
              padding: "3px 8px 5px",
              textTransform: "none",
              boxShadow:
                "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
              borderRadius: "4px",
              border: `1px solid ${theme.palette.primary["500"]}`,
              "&:disabled": {
                backgroundColor: theme.palette.primary["500"],
                opacity: "0.5",
                color: "#FFFFFF",
              },
            }}
            variant="contained"
            onClick={handleSubmit}
          >
            <Typography
              variant="body3"
              color={theme.palette.structural[50]}
              children={CREATE_RULE}
            />
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContent message="Rule created successfully!" />
      </Snackbar>
    </>
  );
};
export default CreateCategoryRule;
