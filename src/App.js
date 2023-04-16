import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Upload from "./pages/Upload/Upload";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/video/:id" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
}

export default App;
