import React from "react";
import Profile from "../../../../public/assets/icons/profile.svg";
import {
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu as MuiMenu,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Typography from "../Typography";
import Settings from "../../../../public/assets/icons/settings.svg";
import LogOut from "../../../../public/assets/icons/logOut.svg";
import Icon from "../Icon";

export interface Props {
  options: { label: string; value: string }[];
  onClick?: () => void;
  handleOpenCategoryRampCard?: () => void;
  setRampCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = (props: Props) => {
  const { options, onClick } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        data-testid="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Icon alt={"profile"} src={Profile} />
      </IconButton>
      <MuiMenu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        data-testid="menu"
        onClick={onClick}
      >
        <MenuItem
          value={options[0].value}
          onClick={handleClose}
          disableRipple
          data-testid="menu-item"
        >
          <Typography
            variant="caption1"
            children={options[0].label}
            color={"#687385"}
            fontSize={"12px"}
          ></Typography>
        </MenuItem>
        <MenuItem
          value={options[1].value}
          data-testid="menu-click"
          onClick={() => props.setRampCard(true)}
          disableRipple
        >
          <Typography
            variant="body2"
            children={options[1].label}
            color={"#404452"}
            fontSize={"14px"}
          ></Typography>
        </MenuItem>
        <MenuItem value={options[2].value} onClick={handleClose} disableRipple>
          <Typography
            variant="body2"
            children={options[2].label}
            color={"#404452"}
            fontSize={"14px"}
          ></Typography>
        </MenuItem>
        <MenuItem value={options[3].value} onClick={handleClose} disableRipple>
          <Typography
            variant="body2"
            children={options[3].label}
            color={"#404452"}
            fontSize={"14px"}
          ></Typography>
        </MenuItem>
        <Divider sx={{ margin: "8px" }} />
        <MenuItem value={options[4].value} onClick={handleClose} disableRipple>
          <ListItemIcon style={{minWidth:'23px'}}>
            <Icon alt={"settings"} src={Settings} />
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="body2"
              children={options[4].label}
              color={"#404452"}
              fontSize={"14px"}
            ></Typography>
          </ListItemText>
        </MenuItem>
        <MenuItem value={options[5].value} onClick={handleClose} disableRipple>
          <ListItemIcon style={{minWidth:'23px'}}>    
            <Icon alt={"log out"} src={LogOut}/>
          </ListItemIcon>
          <ListItemText>
            <Typography
              variant="body2"
              children={options[5].label}
              color={"#404452"}
              fontSize={"14px"}
            ></Typography>
          </ListItemText>
        </MenuItem>
      </MuiMenu>
    </>
  );
};

export default Menu;
