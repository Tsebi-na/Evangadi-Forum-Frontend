import { useNavigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Home/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import { useEffect, useState, createContext } from "react";
import axios from "./axiosConfig";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import NewQuestion from "./pages/Question/NewQuestion.js";
import AllQuestions from "./pages/AllQuestions/Allquestion.js";
import SingleQuestion from "./pages/SingleQuestion/SingleQuestion.js";
export const AppState = createContext();

function App() {
  const [user, setuser] = useState({});
  // console.log(user);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const headerToken =  {
    headers: {
      Authorization: "Bearer " + token,
    },
  }

  useEffect(() => {
    async function checkUser() {
      try {
        const { data } = await axios.get("/users/check", {...headerToken});

        setuser(data);
        // console.log(data);
      } catch (error) {
        console.log(error.response);
        navigate("/");
      }
    }

    if (token) {
      checkUser();
    } else {
      navigate("/");
    }
  }, [token, navigate]);

  const logout = () => {
    setuser({});
    localStorage.removeItem("token");
  };

  console.log(user);

  return (
    <AppState.Provider value={{ user, setuser,headerToken }}>
      <Header logout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/question" element={<NewQuestion />} />
        <Route path="/all-questions" element={<AllQuestions />} />
        <Route path="/Answer/:questionid" element={<SingleQuestion />} />
      </Routes>

      <Footer />
    </AppState.Provider>
  );
}

export default App;