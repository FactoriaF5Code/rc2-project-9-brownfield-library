import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { MemberHeader } from '../../components/Header/MemberHeader';

export const MemberPortal = () => {
  const location = useLocation();
  const msg = location.state?.msg;

  return (
    <>
      <MemberHeader />
      {msg && <span>{msg}</span>}
      <main>
        <Outlet />
      </main>
    </>
  )

}
