import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/user/:userId" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
  </BrowserRouter>
  );
}

export default App;
