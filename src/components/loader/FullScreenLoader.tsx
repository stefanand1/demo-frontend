import { Box, Grid, Skeleton } from "@mui/material"
import PropertyCardLoader from "./PropertyCardLoader";

const markerStyles = [
    { top: '90%', left: '90%' },
    { top: '30%', left: '70%' },
    { top: '70%', left: '30%' },
    { top: '50%', left: '50%' },
    { top: '40%', left: '30%' },
    { top: '60%', left: '40%' },
    { top: '50%', left: '20%' },
    { top: '70%', left: '50%' },
    { top: '35%', left: '50%' },
    { top: '50%', right: '30%' },
    { top: '75%', right: '20%' },
    { top: '85%', left: '40%' },
    { top: '95%', left: '30%' },
];


const FullScreenLoader = () => {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} md={7} sx={{
                    backgroundColor: (theme) => theme.palette.grey[100],
                    p: 4,
                    height: '90dvh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative'
                }}>
                    {[...Array(20)].map((_, index) => (
                        <Skeleton
                            key={index}
                            variant="rounded"
                            width="70px"
                            height="35px"
                            sx={{
                                position: 'absolute',
                                transform: 'translate(-50%, -50%)',
                                ...markerStyles[index % markerStyles.length]
                            }}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} md={5} p={2} sx={{
                    maxHeight: "calc(100vh - 150px)",
                    overflowY: "auto",
                }}> 
                    <Grid container gap={4}>
                    {[...Array(10)].map((_, index) => (
                        <PropertyCardLoader key={index} />
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FullScreenLoader