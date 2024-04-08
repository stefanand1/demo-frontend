import { Grid, IconButton, useMediaQuery } from "@mui/material";
import MapView from "../components/MapView";
import PropertiesView from "../components/PropertiesView";
import { FC, useState, useEffect } from "react";
import { FaList } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { Location } from "../types/Location";

interface IHome {
  lng:number;
  lat:number;
  zoom:number;
  data: Location[];
}

const Home: FC<IHome> = ({ lat, lng, zoom, data }) => {
  const [isMapView, setIsMapView] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const mdDown = useMediaQuery((theme: any) => theme.breakpoints.down("md"));

  useEffect(() => {
    setIsSmallScreen(mdDown);
  }, [mdDown]);

  const toggleView = () => {
    setIsMapView((prevIsMapView) => !prevIsMapView);
  };

  const showMapView = mdDown ? isMapView : true;

  return (
    <Grid container>
      <Grid item xs={12} md={7}>
        {showMapView ? <MapView data={data} lat={lat} lng={lng} zoom={zoom} /> : <PropertiesView data={data} />}
      </Grid>
      <Grid item xs={12} md={5}>
        {mdDown ? (
          <IconButton
            onClick={toggleView}
            sx={() => ({
              position: "absolute",
              bottom: "10%",
              right: "40%",
              display: "flex",
              width: "100px",
              borderRadius: "10px",
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "1em",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5em",
              "&:hover": {
                backgroundColor: "#000",
                color: "#fff",
              },
            })}
          >
            {isMapView ? "List" : "Map"}
            {isMapView ? <FaList /> : <CiMap />}
          </IconButton>
        ) : (
          <PropertiesView data={data} />
        )}
      </Grid>
    </Grid>
  );
};

export default Home;
