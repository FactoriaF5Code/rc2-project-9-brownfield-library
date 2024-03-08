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


export async function fill(labelText, text) {
    await userEvent.type(screen.getByLabelText(labelText), text)
}