import { Routes, Route } from "react-router-dom";
import { Home, About, Services, Events, Products, Contact, Error404 } from "./pages";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="services" element={<Services /> } />
        </Route>
        <Route path="/events" element={<Events />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}
