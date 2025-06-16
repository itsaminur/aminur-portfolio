import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@mui/material';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Container sx={{ py: 10 }}>
      <Typography variant="h4">{t('about_heading')}pp</Typography>
      <Typography sx={{ mt: 2 }}>{t('about_text')}</Typography>
    </Container>
  );
}
