import { AppBar, Toolbar, Button, IconButton } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function Navbar({ toggleTheme }) {
  const { i18n } = useTranslation()

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en')
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Button href="#home" color="inherit">Home</Button>
        <Button href="#about" color="inherit">About</Button>
        <Button href="#projects" color="inherit">Projects</Button>
        <Button href="#contact" color="inherit">Contact</Button>
        <IconButton onClick={toggleTheme} color="inherit">🌓</IconButton>
        <Button onClick={switchLang} color="inherit">{i18n.language === 'en' ? 'বাংলা' : 'EN'}</Button>
      </Toolbar>
    </AppBar>
  )
}
