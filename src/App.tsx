import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Components/rotes/AppRoutes";
import NavBar from "./Components/NavBar";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <NavBar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;