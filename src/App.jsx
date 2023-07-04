import { Route, Routes, Link, BrowserRouter, Outlet } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Book from './pages/Book'
import RootLayout from "./layouts/RootLayout"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/services" element={<Service />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/book" element={<Book />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
