import { Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

export default function About() {
  const { t } = useTranslation()
  return (
    <Container sx={{ py: 10, textAlign: 'center' }}>
      <Typography variant="h3">{t('hero_title')}aaa</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>{t('hero_subtitle')}</Typography>
      <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="gif" style={{ width: '300px', marginTop: 30 }} />
    </Container>
  )
}
