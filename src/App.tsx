import { Routes, Route } from "react-router";
import { Header } from "./components/Header";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </main>
    </>
  )
}


export default App;
