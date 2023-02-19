import { Box } from "@mui/material";
import Header from "./shared/components/Header/Header";
import Home from "./pages/Home";

const App = () => {


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Home />
    </Box>
  );
};

export default App;
