import { Box, Grid, GridProps, IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { Location } from "../types/Location";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";


interface IPropertyCard extends GridProps {
  location: Location
}

const PropertyCard: FC<IPropertyCard> = ({ location, ...props }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const imageSources = location.attributes.images.data.map(
    (image) => `${image.attributes.url}`
  );

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageSources.length - 1 : prevIndex - 1
    );
  };

  return (
    <Grid
      sx={{
        border: "1px solid #eaebeb",
        borderRadius: "0.6em",
        position: "relative",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          "& .property_left": {
            visibility: "visible",
            opacity: 1,
          },
          "& .property_right": {
            visibility: "visible",
            opacity: 1,
          },
        },
        "& img": {
          width: "100%",
          height: "162px",
          objectFit: "cover",
          objectPosition: "top",
          borderTopLeftRadius: "0.6em",
          borderTopRightRadius: "0.6em",
        },
      }}
      item
      xs={12}
      sm={5.5}
      {...props}
    >
      <img
        src={imageSources[currentImageIndex]}
        alt="Property"
      />
      <Box
        sx={{ p: 2, backgroundColor: (theme) => theme.palette.common.white }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: "1em",
            fontWeight: 400,
          }}
        >
          {location.attributes.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "0.8em",
            fontWeight: 400,
            color: "#71767a",
          }}
        >
          Studio - {location.attributes.bedCount} Beds
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1.125rem",
            fontWeight: 500,
          }}
        >
          ${location.attributes.estMinMonthlyPay} - ${location.attributes.estMaxMonthlyPay}/mo
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between'
          }}
        >
          <Typography
            sx={{
              color: "#2f845f",
              fontSize: "0.8em",
            }}
            variant="body2"
          >
            Rebate/Free Move Eligible
          </Typography>
          <IconButton>
            <CiHeart />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        mt: 1,

      }}>
        <IconButton sx={{
          backgroundColor: (theme) => theme.palette.common.white,
          width: "40px",
          height: "40px",
          position: 'absolute',
          top: '20%',
          left: '5%',
          color: (theme) => theme.palette.primary.main,
          transition: "all 0.3s ease-in-out",
          visibility: "hidden",
          opacity: 0,
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: (theme) => theme.palette.common.white,
          },
        }} className="property_left" onClick={handlePreviousImage}>
          <MdKeyboardArrowLeft />
        </IconButton>
        <IconButton className="property_right" sx={{
          backgroundColor: (theme) => theme.palette.common.white,
          width: "40px",
          height: "40px",
          position: 'absolute',
          top: '20%',
          transition: "all 0.3s ease-in-out",
          visibility: "hidden",
          opacity: 0,
          right: '5%',
          color: (theme) => theme.palette.primary.main,
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: (theme) => theme.palette.common.white,
          },
        }}  onClick={handleNextImage}>
          <MdKeyboardArrowRight />
        </IconButton>
      </Box>
    </Grid>
  );
};

export default PropertyCard;
