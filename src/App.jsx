import React from 'react'
import Header from './componets/Header'
import About from './componets/About'
import Projects from './componets/projects'
import Testimonials from './componets/Testmonies'
import Contact from './componets/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './componets/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
    <ToastContainer />
     <Header />
     <About />
     <Projects />
     <Testimonials />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
