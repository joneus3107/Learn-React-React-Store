import CssBaseline from '@mui/material/CssBaseline';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import routes from "./routes.jsx";

const router = createBrowserRouter(routes);

function App() {

  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  )
}

export default App
