import { Hero } from "./components/Hero"
import { Services } from "./components/services/Services"
import { CaseStudy } from "./components/usecases/CaseStudy"

export const Layout = () => {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudy />
    </>
  )
}
