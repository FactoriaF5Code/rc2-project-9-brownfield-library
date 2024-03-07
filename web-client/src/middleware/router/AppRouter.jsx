/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CoverPage } from '../../presentation/pages/CoverPage/CoverPage';
import { CuratorHome } from '../../presentation/pages/Home/CuratorHome';
import { MemberHome } from '../../presentation/pages/Home/MemberHome';
import { BookSearcher } from '../../presentation/components/Searcher/BookSearcher';
import { CuratorPortal } from '../../presentation/pages/curator_portal/CuratorPortal';
import { MemberPortal } from '../../presentation/pages/member_portal/MemberPortal';
import { CurrentRouterComponent } from './CurrentRouterComponent';
import CuratorLogin from '../../presentation/pages/login/CuratorLogin';
import PrivateRoute from './PrivateRoute';
import { Logout } from './Logout';
import { NewBookForm } from '../../presentation/components/NewBookForm/NewBookForm';
import { developmentModeOn } from '../context/utils';
import MemberLogin from '../../presentation/pages/login/MemberLogin';
import { MemberManager } from '../../presentation/pages/member_manager/MemberManager';
import { EditMember } from "../../presentation/pages/member_manager/EditMember";
import { EditLoan } from '../../presentation/pages/loan_manager/EditLoan';
import { MembersLoan } from "../../presentation/pages/MembersLoan/MembersLoan";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage />} />
        <Route path="/curators/" element={<CuratorPortal />}>
          <Route path="login" element={<CuratorLogin />} />
          <Route path="logout" element={<Logout />} />
          <Route element={<PrivateRoute loginPath="/curators/login" />}>
            <Route index element={<CuratorHome />} />
            <Route path="books" element={<BookSearcher />} />
            <Route path="books/new" element={<NewBookForm />} />
            <Route path="members" element={<MemberManager />} />
            <Route path="members/new" element={<EditMember />} />
            <Route path="loans/new" element={<EditLoan />} />
          </Route>
        </Route>
        <Route path="/members/" element={<MemberPortal />}>
          <Route path="login" element={<MemberLogin />} />
          <Route path="logout" element={<Logout />} />
          <Route element={<PrivateRoute loginPath="/members/login" />}>
            <Route index element={<MemberHome />} />
            <Route path="/members/books" element={<BookSearcher />} />
            <Route path="loans" element={<MembersLoan />} />
          </Route>

        </Route>
      </Routes>
      {developmentModeOn && <CurrentRouterComponent />}
    </BrowserRouter>
  );
}
