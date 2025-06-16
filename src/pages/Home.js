import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h3">{t('hero_title')}</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>{t('hero_subtitle')}</Typography>
      <img
        src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
        alt="developer gif"
        style={{ width: '300px', marginTop: '20px' }}
      />
    </Container>
  );
}
