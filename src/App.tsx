import React from "react";
import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Header from "./shared/components/Header/Header";
import Home from "./pages/Home";

const PostDetails = React.lazy(() => import("./pages/PostDetails/PostDetails"));

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ flexGrow: 1 }}>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/posts/:id"
            element={
              <React.Suspense>
                <PostDetails />
              </React.Suspense>
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
