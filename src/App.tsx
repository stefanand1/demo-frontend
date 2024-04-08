import { Box } from "@mui/material";
import Appbar from "./components/Appbar";
import Home from "./views/Home";
import { useEffect, useState } from "react";
import FullScreenLoader from "./components/loader/FullScreenLoader";
import { Location } from "./types/Location";

function App() {
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [lng, setLng] = useState(-96.7970);
  const [lat, setLat] = useState(32.7767);
  const [zoom, setZoom] = useState(9);
  const [autoComplete, setAutoComplete] = useState([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataLoading, setDataLoading] = useState<boolean>(false);
  const [data, setData] = useState<Location[]>([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places`;
        const token = `pk.eyJ1IjoibWFwYm94dGVzdHNlcmpzIiwiYSI6ImNsdW5jNHF3ZTFjaGkyaWw1c2dwZm56enAifQ.dhf9Hx1Zl7Sj-Br-teRAiQ`;
        const { features } = await fetch(
          `${url}/${searchQuery}.json?access_token=${token}&types=place`
        ).then((res) => res.json());
        setAutoComplete(features);
        setLoading(false)
      } catch (error) {
        setError(true);
        setLoading(false)
      }
    })();
  }, [searchQuery]);


  useEffect(() => {
    
    const token = "6498725685918ae4ad10f9b06ba29f24a2661e1b96a98b9b9a99bf56fdc788ff10cb753e78b07fb17b6556e4b01369535b35a2dc73850aa3c4c7f578dc4f05b7068b17f5b29ee28d750e394bc706d8fa9bf731bf3f78e097784c2494391ba761187e6f74aae34007b1c0dbcb346b69e933630bed639272a02225fc51e1db0f94"
   
       const apiUrl = 'https://inspiring-charity-a9eeb54a10.strapiapp.com/api/properties?populate=images';
   
       setDataLoading(true);
       fetch(apiUrl, {
         headers: {
           'Authorization': `Bearer ${token}`, 
           'Content-Type': 'application/json',
         },
       })
         .then(response => {
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
          
           return response.json();
         })
         .then(data => {
           // Process the data received from the server
           const { data:locations } = data;
           setData(locations);
            setDataLoading(false);
           
         })
         .catch(error => {
           // Handle any errors that occurred during the fetch
           console.error('There was a problem with the fetch operation:', error);
            setDataLoading(false);
         });
       
     }, [])

 
  

  return (
    <Box component="section">
      <Appbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        autoComplete={autoComplete}
        loading={loading}
        error={error}
        setLng={setLng}
        setLat={setLat}
      />
     { dataLoading ? <FullScreenLoader /> : <Home data={data} lat={lat} lng={lng} zoom={zoom} />} 
    </Box>
  );
}

export default App;
