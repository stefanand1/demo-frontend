import { Box, Button, IconButton, Typography } from "@mui/material";
import SearchBar from "./Searchbar";
import { FC, useState } from "react";
import { FaBars } from "react-icons/fa";
import PriceFilter from "./PriceFilter";
import Filter from "./Filter";
import { CiHeart } from "react-icons/ci";
import MobileNavigation from "./Drawer";

interface IAppBar {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setLng: React.Dispatch<React.SetStateAction<number>>;
  setLat: React.Dispatch<React.SetStateAction<number>>;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
  autoComplete?: any[],
  loading?:boolean,
  error?:boolean
}

const Appbar: FC<IAppBar> = ({
  searchQuery,
  setSearchQuery,
  minPrice,
  setMaxPrice,
  maxPrice,
  autoComplete,
  setMinPrice,
  loading,
  error,
  setLng,
  setLat
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box
      component="header"
      sx={{
        borderBottom: "1px solid #eaebeb",
      }}
    >
      <Box
        component="nav"
        sx={{
          px: 4,
          py: 1.5,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: "1.5em",
            [theme.breakpoints.down("md")]: {
              width: "100%",
            },
          })}
        >
          <Box
            sx={(theme) => ({
              "& .menu_bar": {
                display: "none",
                [theme.breakpoints.down("md")]: {
                  display: "block",
                },
              },
              [theme.breakpoints.down("lg")]: {
                "& .brand-main": {
                  display: "none",
                },
                "& .brand-small": {
                  display: "block",
                },
              },
              [theme.breakpoints.up("lg")]: {
                "& .brand-small": {
                  display: "none",
                },
              },
              [theme.breakpoints.down("md")]: {
                "& .brand-small": {
                  display: "none",
                },
              },
            })}
          >
            <img src="/logo.svg" alt="Light House" className="brand-main" />
            <img
              src="/mini-logo.svg"
              alt="Light House"
              className="brand-small"
            />
            <IconButton onClick={() => setOpen(!open)} className="menu_bar">
              <FaBars />
            </IconButton>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              gap: "1em",
              alignItems: "center",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                "& form": {
                  width: "100%",
                },
              },
            })}
          >
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              autoComplete={autoComplete}
              loading={loading}
              error={error}
              setLng={setLng}
              setLat={setLat}
            />
            <PriceFilter
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
            <Filter
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
            <Box
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                gap: "0.4em",
                cursor: "pointer",
                [theme.breakpoints.down("md")]: {
                  display: "none",
                },
              })}
            >
              <CiHeart size={24} />
              <Typography variant="body2">Save</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: "1.2em",
            [theme.breakpoints.down("md")]: {
              display: "none",
            },
          })}
        >
          <Typography
            sx={{ fontSize: "1em", cursor: "pointer" }}
            variant="body2"
          >
            How it works
          </Typography>
          <Typography
            sx={{ fontSize: "1em", cursor: "pointer" }}
            variant="body2"
          >
            About Us
          </Typography>
          <Button
            sx={{
              color: (theme) => theme.palette.text.primary,
              textTransform: "capitalize",
              border: "1px solid #ccc",
              borderRadius: "4em",
            }}
          >
            Sign in / Sign up
          </Button>
        </Box>
      </Box>
      <MobileNavigation open={open} handleOpen={() => setOpen(!open)} />
    </Box>
  );
};

export default Appbar;
