import { MemoryRouter } from 'react-router-dom';
import { BookDataProvider } from '../src/middleware/context/BookData';
import { render,screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

export const renderWithContext = (ui) => {
    return render(
        <MemoryRouter>
            <BookDataProvider>{ui}</BookDataProvider>
        </MemoryRouter>
    );
}


export async function fill(labelText, text) {
    await userEvent.type(screen.getByLabelText(labelText), text)
}