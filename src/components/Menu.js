import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState, useRef } from "react";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const OptionMenu = ({ data, stateFunc }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [valueDec, setValueDec] = useState(0);
  const [valueCurr, setValueCurr] = useState("USD");
  const open = Boolean(anchorEl);
  const decimalPoint = useRef(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    // console.log(event.currentTarget.value);
  };
  const handleClose = (event, value) => {
    setAnchorEl(null);
    stateFunc(value);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {data.buttonHead}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        // onClose={(e) => handleClose(e)}
      >
        <MenuItem
          ref={decimalPoint}
          onClick={(e) => handleClose(e, data.value1, stateFunc)}
          disableRipple
        >
          {data.value1}
        </MenuItem>
        <MenuItem
          onClick={(e) => handleClose(e, data.value2, stateFunc)}
          disableRipple
        >
          {data.value2}
        </MenuItem>
        <MenuItem
          onClick={(e) => handleClose(e, data.value3, stateFunc)}
          disableRipple
        >
          {data.value3}
        </MenuItem>
      </StyledMenu>
    </div>
  );
};

export default OptionMenu;
