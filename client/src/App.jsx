
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LandingPage from "./pages/LandingPage";
function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<LandingPage />} />
           
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
