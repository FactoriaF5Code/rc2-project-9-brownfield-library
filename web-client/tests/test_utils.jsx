<<<<<<< HEAD
import { MemoryRouter } from "react-router-dom";
import { BookDataProvider } from "../src/middleware/context/BookData";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { MemberDataProvider } from "../src/middleware/context/MemberDataContext";

export const renderWithContext = (ui) => {
  return render(
    <MemoryRouter>
      <MemberDataProvider>
        <BookDataProvider>{ui}</BookDataProvider>
      </MemberDataProvider>
    </MemoryRouter>
  );
};
// export const renderMemberWithContext = (ui) => {
//   return render(
//     <MemoryRouter>
//       <MemberDataProvider>{ui}</MemberDataProvider>
//     </MemoryRouter>
//   );
// };
=======
import { MemoryRouter } from 'react-router-dom';
import { BookDataProvider } from '../src/middleware/context/BookData';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { AuthenticationProvider } from '../src/middleware/context/AuthenticationContext';

export const renderWithContext = (ui) => {
    return render(
        <MemoryRouter>
            <AuthenticationProvider>
                <BookDataProvider>{ui}</BookDataProvider>
            </AuthenticationProvider>
        </MemoryRouter>
    );
}

>>>>>>> main

export async function fill(labelText, text) {
  await userEvent.type(screen.getByLabelText(labelText), text);
}
