import { Grid } from "@mui/material";
import Navbar from "../../molecules/Navbar";
import React, { useState } from "react";
import Header from "../../molecules/Header";
import { HEADER, OPTIONS } from "../../../utils/constants";
import Profile from "../../../../public/assets/icons/profile.svg";
import theme from "../../../theme";
import ReimbursementDraftPage from "../../../pages/ReimbursementDraftPage";
import ReimbursementPaymentPage from "../../../pages/ReimbursementPaymentPage";
import AccountingPage from "../../../pages/AccountingPage";
import LandingPage from "../../../pages/LandingPage";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ChipSetDropDown from "../../molecules/ChipSetDropDown";
import NewBill from "../../../pages/NewBill";
import RampCategoryCreateCard from "../../organisms/RampCategoryCreateCard";

const HeaderNav = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedItem, setSelectedItem] = useState(0);

  const handleChange = (
    index: number,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setValue(index);
    if (index === value) {
      setAnchorEl(event.currentTarget);
    }
  };
  const [openRampCard, setOpenRampCard] = React.useState(false);

  const handleRampCard = () => {
    setOpenRampCard(!openRampCard);
  };

  const handleMenuItemClick = (item: any) => {
    setSelectedItem(item);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openNewBill, setOpenNewBill] = useState(false);

  const handleOpenNewBill = () => {
    setOpenNewBill(!openNewBill);
  };

  const handleCloseNewBill = () => {
    setOpenNewBill(false);
  };
  const [draftRows, setDraftRows] = useState([]);
  return (
    <>
      <Grid container data-testid="header-nav">
        <Grid item xs={12} px={1}>
          <Navbar
            avatar={Profile}
            text="Setup guide"
            alt="icon"
            icon={<EastOutlinedIcon />}
            backgroundColor={theme.palette.structural[100]}
            color={theme.palette.primary[500]}
            setRampCard={setOpenRampCard}
          />
        </Grid>
        <Grid item xs={12} px={5} py="0.625rem">
          <Header
            data={HEADER}
            index={value}
            icon={<ExpandMoreOutlinedIcon />}
            handleChange={handleChange}
            value={value}
          />
        </Grid>
      </Grid>
      {value === 6 && selectedItem === 0 && (
        <ReimbursementDraftPage
          handleOpenNewBill={handleOpenNewBill}
          draftRows={draftRows}
          setDraftRows={setDraftRows}
        />
      )}
      {value === 6 && selectedItem === 1 && (
        <ReimbursementPaymentPage handleOpenNewBill={handleOpenNewBill} />
      )}
      {value === 7 && <AccountingPage />}
      {value !== 6 && value !== 7 && <LandingPage />}
      <RampCategoryCreateCard
        cancelbtntext={"Cancel"}
        submitbtntext={"Create rule"}
        addbtntext={"Add rule"}
        open={openRampCard}
        handleOpen={handleRampCard}
        setOpen={setOpenRampCard}
      />
      {value === 6 && (
        <ChipSetDropDown
          anchorEl={anchorEl}
          handleClose={handleClose}
          handleMenuItemClick={handleMenuItemClick}
          selectedItem={selectedItem}
          options={OPTIONS}
        />
      )}
      {openNewBill && (
        <NewBill
          open={openNewBill}
          onClose={handleCloseNewBill}
          setDraftRows={setDraftRows}
        />
      )}
    </>
  );
};

export default HeaderNav;
