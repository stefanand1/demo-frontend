import {
  Box,
  Menu,
  IconButton,
  Typography,
  Button,
  Switch,
  Checkbox,
} from "@mui/material";
import { FC, useState } from "react";
import BedIcon from "../icons/BedIcon";
import color from "../util/theme";
import PetIcons from "../icons/PetIcons";
import ParkingIcon from "../icons/ParkingIcon";
import data from "../data/dummy";
import FilterIcon from "../icons/FilterIcon";
import PriceInputBox from "./PriceInputBox";

interface IFilter {
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: FC<IFilter> = ({
  maxPrice,
  setMaxPrice,
  minPrice,
  setMinPrice,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={(theme) => ({
        border: `1px solid #d4d6d8`,
        padding: "0.5em 1em",
        borderRadius: "4em",
        [theme.breakpoints.down("md")]: {
          marginLeft: "2em",
        },
      })}
    >
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <FilterIcon />
        <Typography
          variant="body2"
          sx={(theme) => ({
            color: theme.palette.text.primary,
            [theme.breakpoints.down("lg")]: {
              display: "none",
            },
          })}
        >
          Filters
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
        PaperProps={{
          sx: (theme) => ({
            width: "100%",
            maxWidth: "400px",
            borderRadius: "8px",
            boxShadow: "rgba(145, 158, 171, 0.24) -40px 40px 80px -8px",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
            [theme.breakpoints.down("md")]: {
              maxWidth: "100%",
              left: "0px !important",
              maxHeight: "100vh",
              top: "25px !important",
            },
            "& .MuiList-root": {
              paddingTop: 0,
              paddingBottom: 0,
            },
          }),
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box sx={(theme) => ({
            display:'none',
            p:2,
            [theme.breakpoints.down("md")]: {
              display: "block",
            },
          })}>
            <PriceInputBox
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </Box>
          <Box
            sx={{
              p: 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1em",
                }}
                variant="body2"
              >
                <BedIcon />
                Beds
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.3em",
                }}
              >
                {["Studio", "1", "2", "3+"].map((item) => (
                  <IconButton
                    key={item}
                    sx={{
                      border: "1px solid #ccc",
                      padding: ".125rem .625rem",
                      borderRadius: "1.5em",
                      fontSize: "0.9em",
                      transition: "all 0.3s ease-in-out",
                      "&:hover": {
                        border: `1px solid ${color.primary}`,
                        color: color.primary,
                      },
                    }}
                  >
                    {item}
                  </IconButton>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1em",
                }}
                variant="body2"
              >
                <PetIcons />
                Pets
              </Typography>
              <Switch />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 1,
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1em",
                }}
                variant="body2"
              >
                <ParkingIcon />
                Parking
              </Typography>
              <Switch />
            </Box>
            {data.map((item) => (
              <Box sx={{ mt: 2 }} key={item.label}>
                <Typography
                  variant="body2"
                  sx={{
                    color: (theme) => theme.palette.text.primary,
                    fontSize: "1em",
                  }}
                >
                  {item.label}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {item.data.map((newItem) => (
                    <Box
                      key={newItem.label}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "50%",
                      }}
                    >
                      <Checkbox />
                      <Typography
                        sx={{ color: "#555d61", fontSize: ".875rem" }}
                        variant="body2"
                      >
                        {newItem.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              position: "sticky",
              bottom: "0",
              backgroundColor: (theme) => theme.palette.common.white,
              p: 2,
              boxShadow: "#fff 0px -2px 4px",
              borderRadius: "1em",
            }}
          >
            <Button fullWidth variant="contained" onClick={handleCloseUserMenu}>
              View 10 Properties
            </Button>
            <Button
              sx={{ mt: 1 }}
              fullWidth
              variant="text"
              onClick={handleCloseUserMenu}
            >
              Reset Filter
            </Button>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
};

export default Filter;
