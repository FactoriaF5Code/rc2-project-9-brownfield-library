import './App.css'
import { AppRouter } from './middleware/router/AppRouter';
import { DataMembersProvider } from "./middleware/context/DataMembers";
import { BookDataProvider } from './middleware/context/BookData';

function App() {

  return (
    <>
      <BookDataProvider>
        <DataMembersProvider>
          <AppRouter />
        </DataMembersProvider>
      </BookDataProvider>
    </>
  )
}

export default App
