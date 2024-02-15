import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallBack } from './components/error/error_fall_back'
import { BrowserRouter } from 'react-router-dom'
import SocialMediaRouter from './components/routes/social_media_router'

function App() {

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallBack} >
        <BrowserRouter>
          <SocialMediaRouter />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default App
