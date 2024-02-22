/* eslint-disable react/prop-types */
import { RHome } from "../../presentation/pages/Home/RHome"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewBook } from '../../presentation/pages/NewBook/NewBook';
import { CoverPage } from '../../presentation/pages/CoverPage/CoverPage';

export const AppRouter = () => {
  return (

    <BrowserRouter>
      <Routes>
        {/* home / book search */}
        <Route path="/" element={<CoverPage />} />
        <Route path="/curators/home" element={<RHome />} />
        <Route path="/members/home" element={<RHome />} />
        <Route path="/books/new" element={<NewBook />} />
        {/* member search */}
        {/* add member */}
        {/* add book */}
        {/* add book */}
        {/* <Route path='/*'
          element={<Home 
            searchTerm={searchTerm}
            setSearchResults={setSearchResults}
            activeButton={activeButton}
            handleButtonChange={handleButtonChange}
            setSearchTerm={setSearchTerm}
            searchResults={searchResults}
          />} /> */}
        {/* <Route path="/prestamo/:idBooks"element={<Lending />} />
        <Route path='/prestamo-ok/:idBooks' element={<LendingOk />} />
        <Route path='/nuevo-socio' element={<NewMember />} />
        <Route path='/nuevo-socio-ok/:idMembers' element={<NewMemberOk />} />
        <Route path='/devolucion-ok/:idBooks' element={<ReturnOk />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
