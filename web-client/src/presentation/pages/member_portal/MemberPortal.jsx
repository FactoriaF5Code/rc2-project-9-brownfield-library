import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { MemberHeader } from '../../components/Header/MemberHeader';
import "../curator_portal/CuratorPortal.css";

export const MemberPortal = () => {
  const location = useLocation();
  const msg = location.state?.msg;

  return (
    <>
      <MemberHeader />
      {msg && <div className="toastMessage">{msg}</div>}
      <main>
        <Outlet />
      </main>
    </>
  )

}
