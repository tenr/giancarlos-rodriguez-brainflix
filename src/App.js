import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Upload from "./pages/Upload/Upload";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
