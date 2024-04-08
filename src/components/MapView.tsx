import { useEffect, useState, FC, useRef } from "react";
import Map, { Marker, NavigationControl, ViewStateChangeEvent } from "react-map-gl";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import PropertyCard from "./PropertyCard";
import { Location } from "../types/Location";

function formatValue(value: number): string {
  if (value >= 1000) {
    return '$' + (value / 1000).toFixed(1) + 'k';
  } else {
    return '$' + value.toString();
  }
}


interface IMapView {
  lat: number;
  lng: number;
  zoom: number;
  data: Location[]
}

const accessToken =
  "pk.eyJ1IjoibWFwYm94dGVzdHNlcmpzIiwiYSI6ImNsdW5jNHF3ZTFjaGkyaWw1c2dwZm56enAifQ.dhf9Hx1Zl7Sj-Br-teRAiQ";

const MapView: FC<IMapView> = ({ lat, lng, zoom, data }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedProperty, setSelectedProperty] = useState<Location>();
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lng,
    zoom: zoom,
  });


  function handleModal(item: Location) {
    setShowPopup(!showPopup)
    setSelectedProperty(item)
  }

  function handleZoom(e: ViewStateChangeEvent) {
    setViewport((prevViewport) => ({
      ...prevViewport,
      latitude: e.viewState.latitude,
      longitude: e.viewState.longitude,
      zoom: e.viewState.zoom,
    }));
  }

  useEffect(() => {
    setViewport((prevViewport) => ({
      ...prevViewport,
      latitude: lat,
      longitude: lng,
      zoom: zoom,
    }));
  }, [lat, lng, zoom]);

  const popupRef = useRef<mapboxgl.Popup>();

  useEffect(() => {
    popupRef.current?.trackPointer();
  }, [popupRef.current]);


  return (
    <Map
      {...viewport}
      mapboxAccessToken={accessToken}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ height: "90dvh" }}
      onZoom={handleZoom}
      onZoomEnd={handleZoom}
      onDrag={handleZoom}
    >
      <Marker longitude={lng} latitude={lat} anchor="bottom">
        {
          data.map((item) => (
            <IconButton
              key={item.id}
              sx={{
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  "& .text_group": {
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.common.white,
                    transform: "scale(1.1)",
                  },
                  "& .img_group": {
                    transform: "scale(1.6)",
                  },
                  "& .group_name": {
                    visibility: "visible",
                    opacity: 1,
                  },
                },
              }}
              onClick={() => handleModal(item)}
            >
              <Typography
                sx={{
                  px: 1,
                  py: 0.3,
                  mb: 2.2,
                  position: "relative",
                  borderRadius: "3em",
                  backgroundColor: (theme) => theme.palette.common.white,
                  color: (theme) => theme.palette.common.black,
                  fontWeight: 500,
                  textTransform: "capitalize",
                  visibility: "hidden",
                  opacity: 0,
                }}
                variant="body2"
                className="group_name"
              >
                {item.attributes.title}
              </Typography>
              <Box
                sx={{
                  border: (theme) => `1px solid ${theme.palette.common.white}`,
                  transition: "all 0.3s ease-in-out",
                  p: 0.2,
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  position: "relative",
                  zIndex: 99,
                  "&:hover": {
                    border: (theme) => `1px solid ${theme.palette.primary.main}`,
                  },
                  "& img": {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  },
                }}
                className="img_group"
              >
                <img
                  src={`${item.attributes.images.data[0].attributes.url}`}
                  alt="Light House"
                />
              </Box>
              <Typography
                sx={{
                  p: 0.5,
                  width: "50px",
                  position: "relative",
                  borderRadius: "3em",
                  backgroundColor: (theme) => theme.palette.common.white,
                  color: (theme) => theme.palette.common.black,
                  fontWeight: 500,
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.common.white,
                  },
                }}
                variant="body2"
                className="text_group"
              >
                {formatValue(Number(item.attributes.estMinMonthlyPay))}
              </Typography>
            </IconButton>
          ))
        }
      </Marker>
      <Modal sx={{
        "& .MuiBackdrop-root.MuiModal-backdrop": {
          backgroundColor: "#00000000 !important",
        },
      }} open={showPopup} onClose={handleModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            bottom: "5%",
            left: "3%",
            width: '280px'
          }}
        >
         {selectedProperty &&  <PropertyCard location={selectedProperty} sm={12} />}
        </Box>
      </Modal>
      <NavigationControl showCompass={false} />
    </Map>
  );
};

export default MapView;
