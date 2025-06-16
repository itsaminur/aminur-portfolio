import { useState, useMemo } from 'react'
import { ThemeProvider, createTheme, CssBaseline, Toolbar } from '@mui/material'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './i18n'

function App() {
  const [mode, setMode] = useState('light')
  const theme = useMemo(() => createTheme({ palette: { mode } }), [mode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar toggleTheme={() => setMode(prev => prev === 'light' ? 'dark' : 'light')} />
      <Toolbar id="home" /> {/* navbar offset */}
      <Hero />
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </ThemeProvider>
  )
}

export default App
