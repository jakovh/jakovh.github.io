import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary h-[55rem] sm:h-[100%]">
        <div className="bg-hero-pattrn bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        {/* <div className="relative z-0"> */}
          <Contact />
          {/* <StarsCanvas /> */}
        {/* </div> */}
      </div>
    </BrowserRouter>
  )
}

export default App
