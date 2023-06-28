import React, { useEffect, useState } from "react";
import RampCardTable from "../../components/organisms/RampCardTable";
import { Grid } from "semantic-ui-react";
import Typography from "../../components/atoms/Typography";
import Button from "../../components/atoms/Button";
import { Box } from "@mui/system";
import { styled } from "@mui/material";
import QuickbooksCategoryPopup from "../../components/organisms/quickbooksCategoryPopup";
import MerchantRuleCard from "../../components/organisms/merchantRuleCard";
import { GridColDef } from "@mui/x-data-grid";
import theme from "../../theme";
import DropDown from "../../components/atoms/DropDown";
import {
  ACCOUNTINGPAGEDATA,
  CREATE_CATEGORY_RULE,
  MERCHANT_RULE_MENU,
} from "../../utils/constants";
import CreateCategoryRule from "../../components/organisms/CreateCategoryRule/index";
import {
  updateRampCardsWithMerchantName,
  getTransactionCountByMerchant,
  getMerchantRuleCount,
  fetchAllTransactions,
  deleteTransaction,
  getCategoryRuleCount,
} from "../../components/apis/Api";
import { RenderTransactions } from "./renderer/RenderTransactions";

const WrapperBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  margin: "30px 40px",
});

const TableGride = styled(Grid)({
  margin: "0px 40px",
});

interface SelectedValues {
  [key: number]: string;
}

const AccountingPage = () => {
  const [transactions, setTransactions] = useState([]);

  const [selectedValues, setSelectedValues] = useState<SelectedValues>();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await fetchAllTransactions();
        setTransactions(response);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchMerchantRuleCount = async () => {
      try {
        const response = await getMerchantRuleCount();
        setMerchantRulesCount(response);
      } catch (error) {
        console.log(error);
      }
    };
    const fetchCategoryRuleCount = async () => {
      try {
        const response = await getCategoryRuleCount();
        setCategoryRulesCount(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactions();
    fetchMerchantRuleCount();
    fetchCategoryRuleCount();
  }, []);

  useEffect(() => {
    const initialSelectedValues = transactions.reduce((acc, card) => {
      acc[card.id.toString()] = card.quickbookCategory;
      return acc;
    }, {});
    setSelectedValues(initialSelectedValues);
  }, [transactions]);

  const datetypetoFormat = (dateStringText: any) => {
    const dateString = dateStringText;
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  const COLUMNS: GridColDef[] = [
    {
      field: "merchantName",
      headerName: "TRANSACTIONS",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderCell: RenderTransactions,
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
    {
      field: "amount",
      headerName: "AMOUNT",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      align: "right",
      renderCell: (params) => (
        <Typography variant="body2" color={theme.palette.other.highEmphasis}>
          {params.value}
        </Typography>
      ),
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
    {
      field: "date",
      headerName: "DATE",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2" color={theme.palette.other.highEmphasis}>
          {datetypetoFormat(params.value)}
        </Typography>
      ),
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
    {
      field: "user",
      headerName: "USER",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Grid container direction="column" rowGap={0.1}>
          <Grid item>
            <Typography
              variant="body2"
              color={theme.palette.other.highEmphasis}
            >
              {params.row.userName}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body3"
              color={theme.palette.other.mediumEmphasis}
            >
              {params.row.virtualName}
            </Typography>
          </Grid>
        </Grid>
      ),
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
    {
      field: "quickbooks",
      headerName: "QUICKBOOKS CATEGORY",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderCell: (params) => {
        const value = selectedValues[params.row.id] || "";
        return (
          <DropDown
            options={MERCHANT_RULE_MENU}
            value={value}
            placeHolder={"Choose One"}
            onChange={(event) => handleChange(event, params.row)}
            styles={{
              borderRadius: "8px",
              height: "28px",
              width: "284px",
              padding: "0.5rem",
              "&:hover": {
                borderColor: "#FFFFFF",
              },
            }}
          />
        );
      },
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.colDef.headerName}
        </Typography>
      ),
    },
    {
      field: "receipt",
      headerName: "RECEIPT",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2" color={theme.palette.other.highEmphasis}>
          {params.value}
        </Typography>
      ),
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
    {
      field: "memo",
      headerName: "MEMO",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderCell: (params) => (
        <Typography variant="body2" color={theme.palette.other.highEmphasis}>
          {params.value}
        </Typography>
      ),
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
    {
      field: "sync",
      headerName: "SYNC",
      headerClassName: "header-styling",
      flex: 1,
      sortable: false,
      renderCell: () => (
        <Button
          variant="outlined"
          sx={{
            width: "6.5rem",
            minWidth: "6.5rem",
            height: "2rem",
            padding: "3px 8px 5px",
            textTransform: "none",
            border: "1px solid rgba(60, 66, 87, 0.12)",
            boxShadow:
              "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
            borderRadius: "4px",
          }}
        >
          <Typography
            variant="body2"
            children="Make ready"
            color={theme.palette.other.mediumEmphasis}
          />
        </Button>
      ),
      renderHeader: (params) => (
        <Typography variant="caption1" color={theme.palette.other.highEmphasis}>
          {params.field.toUpperCase()}
        </Typography>
      ),
    },
  ];

  const [value, setValue] = React.useState("");
  const [popup, setPopup] = React.useState(false);
  const [marchentPopup, setMarchentPopup] = React.useState(false);
  const [stastics, setStastics] = React.useState(ACCOUNTINGPAGEDATA);
  const [selectedMerchantName, setSelectedMerchantName] = React.useState("");
  const [transactionsByMerchant, setTransactionsByMerchant] =
    useState<number>();
  const [merchantRulesCount, setMerchantRulesCount] = useState<number>();
  const [categoryRulesCount, setCategoryRulesCount] = useState<number>();
  useEffect(() => {
    const fetchTransactionCountByMerchant = async () => {
      try {
        const response = await getTransactionCountByMerchant(
          selectedMerchantName
        );
        setTransactionsByMerchant(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTransactionCountByMerchant();
  }, [selectedMerchantName]);

  const handleChange = (event: any, row: any) => {
    setSelectedValues({
      ...selectedValues,
      [row.id]: event?.target?.value,
    });
    setPopup((prev) => !prev);
    setSelectedMerchantName(row.merchantName);
    setOpenMerchantRule(event.target.value);
  };

  const handleSetPopup = () => {
    setPopup((prev) => !prev);
  };

  const handleMerchentSetPopup = () => {
    setMarchentPopup((prev) => !prev);
  };

  const [openCategoryRule, setOpenCategoryRule] = useState(false);
  const [openMerchantRule, setOpenMerchantRule] = useState("");

  const handleOpenRule = () => {
    setOpenCategoryRule(!openCategoryRule);
  };

  const handleCloseRule = () => {
    setOpenCategoryRule(false);
  };

  const handleMerchantRuleCard = (event: any) => {
    setOpenMerchantRule(event.target.value);
  };

  const handleCreateMerchantRule = () => {
    {
      const fetchData = async () => {
        try {
          await updateRampCardsWithMerchantName(
            selectedMerchantName,
            openMerchantRule
          );
          setReload(true);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
      handleMerchentSetPopup();
    }
  };
  const [id, setId] = useState<number>();
  const [deletable, setDeletable] = useState<boolean>(false);
  const [reload, setReload] = useState(false);
  const handleSelectionChange = (ids: any[]) => {
    setDeletable(ids.length > 0);
    const selectedRowsData = ids.map((id) =>
      transactions.find((row: { id: any }) => row.id === id)
    );
    setId(selectedRowsData[0]?.id);
  };
  const handleDelete = async () => {
    await deleteTransaction(id);
    setReload(true);
  };

  useEffect(() => {
    if (reload) {
      const fetchTransactions = async () => {
        try {
          const response = await fetchAllTransactions();
          setTransactions(response);
        } catch (error) {
          console.log(error);
        }
      };
      const fetchMerchantRuleCount = async () => {
        try {
          const response = await getMerchantRuleCount();
          setMerchantRulesCount(response);
        } catch (error) {
          console.log(error);
        }
      };
      const fetchCategoryRuleCount = async () => {
        try {
          const response = await getCategoryRuleCount();
          setCategoryRulesCount(response);
        } catch (error) {
          console.log(error);
        }
      };
      fetchTransactions();
      fetchMerchantRuleCount();
      fetchCategoryRuleCount();
      setReload(false);
    }
  }, [reload]);

  return (
    <>
      <Grid container>
        <WrapperBox>
          <Box>
            <Typography children="Ramp cards" variant="h1" />
          </Box>
          <Box>
            <Button
              variant="outlined"
              sx={{
                width: "94px",
                minWidth: "96px",
                height: "2rem",
                padding: "3px 8px 5px",
                textTransform: "none",
                border: "1px solid rgba(60, 66, 87, 0.12)",
                boxShadow:
                  "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
              }}
            >
              <Typography
                variant="body2"
                children="Sync history"
                color={theme.palette.other.mediumEmphasis}
              />
            </Button>
            <Button
              variant="outlined"
              sx={{
                width: "68px",
                minWidth: "68px",
                height: "2rem",
                padding: "3px 8px 5px",
                textTransform: "none",
                border: "1px solid rgba(60, 66, 87, 0.12)",
                boxShadow:
                  "0px 2px 5px rgba(60, 66, 87, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.08), inset 0px -1px 1px rgba(0, 0, 0, 0.12)",
                borderRadius: "4px",
                marginLeft: "12px",
              }}
            >
              <Typography
                variant="body2"
                children="Settings"
                color={theme.palette.other.mediumEmphasis}
              />
            </Button>
            <Button
              sx={{
                width: "146px",
                minWidth: "146px",
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
                marginLeft: "12px",
              }}
              variant="contained"
              onClick={handleOpenRule}
            >
              <Typography
                variant="body3"
                color={theme.palette.structural[50]}
                children={CREATE_CATEGORY_RULE}
              />
            </Button>
          </Box>
        </WrapperBox>
        <Box sx={{ display: "flex", margin: "40px" }}>
          <Box sx={{ marginRight: "30px" }}>
            <Typography children={stastics[0].name} variant="body2" />
            <Typography children={stastics[0].count} variant="body2" />
          </Box>
          <Box sx={{ marginRight: "30px" }}>
            <Typography children={stastics[1].name} variant="body2" />
            <Typography children={merchantRulesCount} variant="body2" />
          </Box>
          <Box sx={{ marginRight: "30px" }}>
            <Typography children={stastics[2].name} variant="body2" />
            <Typography children={categoryRulesCount} variant="body2" />
          </Box>
          <Box sx={{ marginRight: "30px" }}>
            <Typography children={stastics[3].name} variant="body2" />
            <Typography children={stastics[3].count} variant="body2" />
          </Box>
          <Box sx={{ marginRight: "30px" }}>
            <Typography children={stastics[4].name} variant="body2" />
            <Typography children={stastics[4].count} variant="body2" />
          </Box>
        </Box>
        <TableGride item>
          <RampCardTable
            value={value}
            onChange={(e) => setValue(e.target.value)}
            data={transactions.filter((row) =>
              row.merchantName.toLowerCase().includes(value.toLowerCase())
            )}
            columnData={COLUMNS}
            handleDelete={handleDelete}
            handleSelectionChange={handleSelectionChange}
            deletable={deletable}
          />
        </TableGride>
      </Grid>
      <CreateCategoryRule
        handleCancelClick={handleCloseRule}
        handleCreateClick={handleOpenRule}
        open={openCategoryRule}
        setOpenCategoryRule={setOpenCategoryRule}
        setCategoryRulesCount={setCategoryRulesCount}
        categoryRulesCount={categoryRulesCount}
      />
      <MerchantRuleCard
        title={"Create merchant rule"}
        transaction={selectedMerchantName}
        unsyncedTrans={transactionsByMerchant}
        options={[]}
        selectedOption={openMerchantRule}
        onDropDownChange={handleMerchantRuleCard}
        handleCancelClick={function (): void {
          handleMerchentSetPopup();
        }}
        handleCreateClick={handleCreateMerchantRule}
        open={marchentPopup}
      />
      {popup && (
        <Box
          sx={{
            position: "absolute",
            right: "2%",
            bottom: "22%",
            zIndex: "10",
          }}
        >
          <QuickbooksCategoryPopup
            category={""}
            transaction={""}
            onClick={() => {
              handleSetPopup();
              handleMerchentSetPopup();
            }}
            sx={{ backgroundColor: "red", zIndex: "10" }}
          />
        </Box>
      )}
    </>
  );
};

export default AccountingPage;
