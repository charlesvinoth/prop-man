import '@mantine/core/styles.css'
import '@/styles/index.css'
import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import Routes from '@/routes/index.tsx'
import { store } from '@/stores'
import theme from '@/styles/mantineTheme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  </StrictMode>,
)
