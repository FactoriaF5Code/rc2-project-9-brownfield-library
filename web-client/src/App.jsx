import './App.css'
import { AppRouter } from './middleware/router/AppRouter';
import { BookDataProvider } from './middleware/context/BookData';
import { AuthenticationProvider } from './middleware/context/AuthenticationContext';
import { MemberDataProvider } from './middleware/context/MemberDataContext';

function App() {

  return (
    <>
      <AuthenticationProvider>
        <MemberDataProvider>
          <BookDataProvider>
            <AppRouter />
          </BookDataProvider>
        </MemberDataProvider>
      </AuthenticationProvider>
    </>
  )
}

export default App
