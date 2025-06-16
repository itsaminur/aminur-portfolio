import { AppBar, Toolbar, Button, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ toggleTheme }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const switchLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'bn' : 'en');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
        <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
        <Button color="inherit" onClick={() => navigate('/projects')}>Projects</Button>
        <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
        <IconButton onClick={toggleTheme} color="inherit">🌓</IconButton>
        <Button onClick={switchLang} color="inherit">{i18n.language === 'en' ? 'বাংলা' : 'EN'}</Button>
      </Toolbar>
    </AppBar>
  );
}
