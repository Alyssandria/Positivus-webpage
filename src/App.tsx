import { Routes, Route } from "react-router";
import { Header } from "@/components/Header";
import { Layout } from "@/pages/Home/Layout";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
const App = () => {
  return (
    <>
      <Header />
      <main className="space-y-6">
        <Routes>
          <Route index element={<Layout />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </main>
    </>
  )
}


export default App;
