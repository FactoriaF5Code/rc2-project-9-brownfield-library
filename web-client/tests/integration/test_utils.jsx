import { MemoryRouter } from 'react-router-dom';
import { BookDataProvider } from '../../src/middleware/context/BookData';
import { render } from '@testing-library/react';

export const renderWithContext = (ui) => {
    return render(
        <MemoryRouter>
            <BookDataProvider>{ui}</BookDataProvider>
        </MemoryRouter>
    );
}
