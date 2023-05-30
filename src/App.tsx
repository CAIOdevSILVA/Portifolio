import { Header, Hero, About, Projects, Contact, Footer } from "./components/index"

function App() {
  return (
    <main className="w-full h-full bg-zinc-900">
      <div className="h-screen flex flex-col bg-hero-background bg-cover bg-no-repeat bg-center z-20">
        <Header />
        <Hero/>
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
