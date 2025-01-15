import 'react'
import Hero from './components/Hero'
import About from './components/About'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <Hero />
      <About />
    </main>
  )
}

export default App