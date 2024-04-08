import { Box } from "@mui/material"
import PropertiesTab from "./PropertiesTab"
import { FC } from "react"
import { Location } from "../types/Location"

interface IPropertiesView {
  data: Location[]
}

const PropertiesView:FC<IPropertiesView> = ({ data }) => {
  return (
    <Box sx={{ p:2, maxHeight: "calc(100vh - 150px)",
    overflowY: "auto",}}>
        <PropertiesTab data={data} />
    </Box>
  )
}

export default PropertiesView