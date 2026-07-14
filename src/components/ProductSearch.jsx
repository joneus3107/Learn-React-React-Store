import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FTextField } from "./form";

function ProductSearch() {
  return (
    <FTextField
      name="searchQuery"
      sx={{ width: 300 }}
      size="small"
      slotProps={{
        input: {
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}
      }}
    />
  );
}

export default ProductSearch;