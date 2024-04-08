import { FC, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import {
  Box,
  CircularProgress,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import color from "../util/theme";

interface ISearchBar {
  setSearchQuery: (query: string) => void;
  searchQuery: string;
  autoComplete?: any[];
  loading?: boolean;
  error?: boolean;
  setLng: React.Dispatch<React.SetStateAction<number>>;
  setLat: React.Dispatch<React.SetStateAction<number>>;
}

const SearchBar: FC<ISearchBar> = ({
  setSearchQuery,
  searchQuery,
  autoComplete,
  loading,
  setLat,
  setLng,
  error,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuOpenRef = useRef(false);

  const handleFocus = () => {
    menuOpenRef.current = true;
  };

  const handleBlur = () => {
    menuOpenRef.current = false;
  };

  return (
    <form
      style={{
        position: "relative",
      }}
    >
      <Box
        component={"div"}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          gap: "0.5em",
          borderRadius: "4em",
          border: "1px solid #d4d6d8",
          padding: "0.7em 1em",
          width: "16em",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        })}
      >
        <input
          placeholder="Search…"
          ref={inputRef}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          value={searchQuery}
          style={{
            border: "none",
            outline: "none",
            width: "100%",
            background: "transparent",
          }}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <FiSearch color={color.primary} />
      </Box>

      {menuOpenRef.current && (
        <Box  sx={(theme) =>({
          position: "absolute",
          top: "45px",
          zIndex:'99999',
          backgroundColor: "#fff",
          width: "330px",
          borderRadius: "8px",
          boxShadow: "rgba(145, 158, 171, 0.24) -40px 40px 80px -8px",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "250px",
            left: '-20px',
          },
        })}>
          <MenuList
        >
          {loading ? (
            <Box sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                height:'20vh'
            }}>
                <CircularProgress />
            </Box>
          ) : (
            autoComplete &&
            !error &&
            autoComplete.map((item) => (
              <MenuItem sx={{ whiteSpace:'normal', color:color.text, fontSize:'0.875', mb:2, cursor:'pointer', transition:'all 0.3s ease-in-out', '&:hover':{ color: color.primary}}} onClick={() =>{
                setLat(item?.center[1])
                setLng(item?.center[0])
                setSearchQuery(item.place_name)
              }} key={item.id}>{item.place_name}</MenuItem>
            ))
          )}

          {!loading && error ? (
            <Typography sx={{ textAlign: "center" }} variant="body2">
              Sorry something went wrong, please try again.
            </Typography>
          ) : (
            !error &&
            searchQuery &&
            autoComplete &&
            autoComplete.length === 0 && (
              <Typography sx={{ p: 2, textAlign: "center" }} variant="body2">
                No result match your search results, try a different term
              </Typography>
            )
          )}
        </MenuList>
        </Box>
      )}
    </form>
  );
};

export default SearchBar;
