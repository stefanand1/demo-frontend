import { Box, TextField } from "@mui/material";
import color from "../util/theme";
import { FC } from "react";

const styles = {
  input: {
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #d4d6d8",
    marginTop: "0.4em",
    "& input": {
      padding: "9.5px 14px",
    },
  },
  label: {
    color: color.text,
    fontSize: "1rem",
    fontWeight: 500,
    lineHeight: 1.75,
  },
};

interface IPriceInput {
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
}

const PriceInputBox: FC<IPriceInput> = ({
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "1em",
      }}
    >
      <Box
        sx={{
          width: "7em",
        }}
      >
        <label style={styles.label} htmlFor="minPrice">
          Min Price
        </label>
        <TextField
          sx={styles.input}
          type="text"
          id="minPrice"
          placeholder="$0/mo"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          width: "7em",
        }}
      >
        <label style={styles.label} htmlFor="maxPrice">
          Max Price
        </label>
        <TextField
          sx={styles.input}
          type="text"
          id="maxPrice"
          placeholder="$10000/mo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default PriceInputBox;
