import { Box, Divider, Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import { FC } from "react";
import HowItWorkIcon from "../icons/HowItWorkIcon";
import AboutIcon from "../icons/AboutIcon";
import HelpIcon from "../icons/HelpIcon";
import UserIcon from "../icons/UserIcon";

interface IMobileNavigation {
  open: boolean;
  handleOpen: () => void;
}

const MobileNavigation: FC<IMobileNavigation> = ({ open, handleOpen }) => {
  return (
    <Drawer anchor="left" open={open} onClose={handleOpen}>
      <Box sx={{ px: 4, py: 2 }}>
        <img src="/logo.svg" alt="Light House" className="brand-main" />
        <Box mt={4}>
        <Typography sx={{
            display:'flex',
            alignItems:'center',
            gap:'0.5em',
            mb:2
        }} variant="body2">
            <HowItWorkIcon />
            How It Works
        </Typography>
        <Typography sx={{
            display:'flex',
            alignItems:'center',
            gap:'0.5em',
            mb:2
        }} variant="body2">
            <AboutIcon />
            About Us
        </Typography>
        <Typography sx={{
            display:'flex',
            alignItems:'center',
            gap:'0.5em',
            mb:2
        }} variant="body2">
            <HelpIcon />
            Help
        </Typography>
        <Divider />
        <Typography sx={{
            display:'flex',
            alignItems:'center',
            gap:'0.5em',
            mt:2
        }} variant="body2">
            <UserIcon />
            Sign In / Sign Up
        </Typography>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileNavigation;
