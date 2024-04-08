import { Box, Grid, Skeleton } from "@mui/material"
import { FaImage } from "react-icons/fa";


const PropertyCardLoader = () => {
    return (
        <Grid
            sx={{
                border: "1px solid #eaebeb",
                borderRadius: "0.6em",
            }}
            item
            xs={12}
            sm={5.5}
        >
            <Skeleton className="image_skeleton" sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                '& >*':{
                    visibility:'visible !important'
                }
            }} variant="rectangular" width="100%" height="162px">
                <FaImage color="#bbc0c0" size={30} />
            </Skeleton>
            <Box
                sx={{ p: 2, backgroundColor: (theme) => theme.palette.common.white }}
            >
                <Skeleton variant="text" width="60%" height="1em" />
                <Skeleton variant="text" width="40%" height="0.8em" />
                <Skeleton variant="text" width="30%" height="1.125rem" />
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: 'space-between'
                    }}
                >
                    <Skeleton variant="text" width="50%" height="0.8em" />
                    <Skeleton variant="circular" width={40} height={40} />
                </Box>
            </Box>
        </Grid>
    )
}

export default PropertyCardLoader