import DashboardLayout from '@/components/Dashboard'
import '@/styles/globals.css'
import { Dashboard } from '@mui/icons-material'

export default function App({ Component, pageProps }) {
  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  )
}
