import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./components/Chart";
import CopyToClipboard from "./components/CopyToClipboard";
import Header from "./components/Header";
import Selfie from "./components/Selfie";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Chart />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/take-a-selfie" element={<Selfie />} />
        <Route path="/copy-to-clipboard" element={<CopyToClipboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
