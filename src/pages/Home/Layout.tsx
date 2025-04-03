import { Hero } from "./sections/Hero"
import { WorkProcess } from "./sections/process/WorkProcess"
import { Services } from "./sections/services/Services"
import { Teams } from "./sections/team/Team"
import { Testimonials } from "./sections/testimonials/Testimonials"
import { CaseStudy } from "./sections/usecases/CaseStudy"

export const Layout = () => {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudy />
      <WorkProcess />
      <Teams />
      <Testimonials />
    </>
  )
}
