import {
  Box,
  Menu,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FC, useState } from "react";
import PriceInputBox from "./PriceInputBox";

interface IPriceFilter{
    minPrice: string;
    setMinPrice: React.Dispatch<React.SetStateAction<string>>;
    maxPrice: string;
    setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
}



const PriceFilter:FC<IPriceFilter> = ({ minPrice, maxPrice, setMaxPrice, setMinPrice}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={(theme) =>({
          border: `1px solid #d4d6d8`,
          padding: "0.5em 1em",
          borderRadius: "4em",
          [theme.breakpoints.down("lg")]: {
            display: "none",
          },
      })}
    >
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <MdOutlineAttachMoney size={24} />
        <Typography
          variant="body2"
          sx={{ color: (theme) => theme.palette.text.primary }}
        >
          $0 - $10000
        </Typography>
      </IconButton>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorEl)}
        onClose={handleCloseUserMenu}
      >
        <Box sx={{ p: 2, width:'250px' }}>
          <PriceInputBox minPrice={minPrice} setMaxPrice={setMaxPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} />
          <Button
            sx={(theme) =>(
              { 
                mt: 2,
                borderRadius:'4em',
                [theme.breakpoints.down('md')]: {
                  display: 'none'
              }
              }
            )}
            fullWidth
            variant="contained"
            onClick={handleCloseUserMenu}
          >
            View 10 Properties
          </Button>
        </Box>
      </Menu>
    </Box>
  );
};

export default PriceFilter;
