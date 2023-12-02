import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import MyCalendar from "./components/calender/MYCalendar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/MyCalendar" element={<MyCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
