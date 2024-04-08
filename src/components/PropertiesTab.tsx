import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, Grid, Typography } from "@mui/material";
import PropertyCard from "./PropertyCard";
import { Location } from "../types/Location";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PropertiesTab(props: { data: Location[] }) {
  const { data } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (e: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
        sx={{
          borderBottom: "1px solid #eaebeb",
          position: "sticky",
          top: '-18px',
          backgroundColor: "#ffffff",
          zIndex: 10000,
          transition: 'all 0.3s ease-in-out'
        }}
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="My Properties" {...a11yProps(1)} />
        <Tab label="Recommendations" {...a11yProps(2)} />
      </Tabs>
      <Box sx={{ overflowY: "auto", maxHeight: "calc(100vh - 48px)" }}>
        <CustomTabPanel value={value} index={0}>
          <Typography
            sx={{
              color: "#555d61",
            }}
            variant="body2"
          >
            {data.length} properties in your area
          </Typography>
          <Grid container gap={2} mt={2}>
            {data.map((item) => (
              <PropertyCard key={item.id} location={item} />
            ))}
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
              flexDirection: "column",
            }}
          >
            <img src="/houses-in-hand.webp" alt="Light House" />
            <Typography variant="h6">You don’t have any properties.</Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555d61",
                maxWidth: "450px",
                textAlign: "center",
                mt: 2,
                mb: 2,
              }}
            >
              When you favorite a property or submit a request, they'll be right
              here so you can access them easily.
            </Typography>
            <Button
              variant="contained"
              sx={{ borderRadius: "4em", textTransform: "capitalize" }}
            >
              Log in to access to your properties
            </Button>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "500px",
              flexDirection: "column",
            }}
          >
            <img src="/contact-lightkeeper.svg" alt="Light House" />
            <Typography variant="h6">Get help from an expert!</Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555d61",
                maxWidth: "550px",
                textAlign: "center",
                mt: 2,
                mb: 2,
              }}
            >
              Locators help you research and move in with confidence
            </Typography>
            <Button
              variant="contained"
              sx={{
                borderRadius: "4em",
                textTransform: "capitalize",
                backgroundColor: "#ffd89a",
                color: (theme) => theme.palette.text.primary,
                "&:hover": {
                  backgroundColor: "#ffd89a",
                },
              }}
            >
              Log in to get recommendations
            </Button>
          </Box>
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
