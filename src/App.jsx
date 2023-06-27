import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import RootLayout from "./layouts/RootLayout"

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout /> 
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
