import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Category from './pages/Category'
import Service from './pages/Service'
import Book from './pages/Book'
import RootLayout from "./layouts/RootLayout"

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout /> 
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<About />}/>
        <Route path="/" element={<Category />}/>
        <Route path="/" element={<Service />}/>
        <Route path="/" element={<Book />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
