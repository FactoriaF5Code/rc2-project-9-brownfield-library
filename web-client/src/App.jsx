import './App.css'
import { AppRouter } from './middleware/router/AppRouter';
import { BookDataProvider } from './middleware/context/BookData';
import { AuthenticationProvider } from './middleware/context/AuthenticationContext';

function App() {

  return (
    <>
      <AuthenticationProvider>
        <BookDataProvider>
            <AppRouter />
        </BookDataProvider>
      </AuthenticationProvider>
    </>
  )
}

export default App
