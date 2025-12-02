import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Transformations from './components/Transformations'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Stats from './components/Stats'

function App() {
  return (
    <div>
      <Header />
      <main id="home">
        <Hero />
        <section id="about" aria-labelledby="about-title" className="section">
          <About />
        </section>
        <section id="services" aria-labelledby="services-title" className="section">
          <Services />
        </section>
        <section className="section" aria-label="Stats">
          <Stats />
        </section>
        <section id="transformations" aria-labelledby="transformations-title" className="section">
          <Transformations />
        </section>
        <section id="pricing" aria-labelledby="pricing-title" className="section">
          <Pricing />
        </section>
        <section id="testimonials" aria-labelledby="testimonials-title" className="section">
          <Testimonials />
        </section>
        <section id="how" aria-labelledby="how-title" className="section">
          <HowItWorks />
        </section>
        <section id="faq" aria-labelledby="faq-title" className="section">
          <FAQ />
        </section>
        <section id="contact" aria-labelledby="contact-title" className="section">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
