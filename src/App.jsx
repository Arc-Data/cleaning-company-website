import { Route, Routes, Link, BrowserRouter, Outlet } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import ServiceDetail from "./pages/ServiceDetail"
import RootLayout from "./layouts/RootLayout"
import Contact from "./pages/Contact"
import Admin from "./pages/Admin"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Service />}/>
          <Route path="/services/:id" element={<ServiceDetail />}/>
          <Route path="/contact" element={<Contact />}/>
          {/* <Route path="/admin" element={<Admin />}/> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
