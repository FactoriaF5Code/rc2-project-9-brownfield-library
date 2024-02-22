/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewBook } from '../../presentation/pages/NewBook/NewBook';
import { CoverPage } from '../../presentation/pages/CoverPage/CoverPage';
import { CuratorHome } from '../../presentation/pages/Home/CuratorHome';
import { MemberHome } from '../../presentation/pages/Home/MemberHome';
import { BookSearcher } from '../../presentation/components/Searcher/BookSearcher';
import { CuratorPortal } from '../../presentation/pages/curator_portal/CuratorPortal';
import { MemberPortal } from '../../presentation/pages/member_portal/MemberPortal';
import { BookDetailsPage } from '../../presentation/pages/book_details/BookDetailPage';

export const AppRouter = () => {
  return (
      <BrowserRouter>
        <Routes>
          {/* home / book search */}
          <Route path="/" element={<CoverPage />} />
          <Route path="/curators/" element={<CuratorPortal />}>
            <Route index element={<CuratorHome />} />
            {/* <Route path="/login" element={<CuratorLogin />} /> */}
            <Route path="/books" element={<BookSearcher />} />
            <Route path="/books/new" element={<NewBook />} />
            <Route path="/books/:id" element={<BookDetailsPage />} />
            {/* nuevo socio */}
            {/* editar socio */}
            {/* dar de baja socio */}
            {/* nuevo préstamo */}
          </Route>
          <Route path="/members/" element={<MemberPortal />}>
            <Route index element={<MemberHome />} />
            {/* <Route path="/login" element={<MemberLogin />} /> */}
            <Route path="/books" element={<BookSearcher />} />
            <Route path="/books/:id" element={<BookDetailsPage />} />
            {/* mis préstamos */}
            {/* mis reservas */}
          </Route>
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
  );
}
