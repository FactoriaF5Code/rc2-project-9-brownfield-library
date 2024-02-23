import { useEffect, useState } from 'react';
import { useBookDataContext } from '../../../middleware/context/BookData';
const BookSmartSelector = ({ onSelection }) => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const { searchBooks } = useBookDataContext();

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (query && query.length > 4) {
                setLoading(true);
                searchBooks(query)
                    .then(results => {
                        setLoading(false);
                        setBooks(results);
                    })
            } else {
                setBooks([]);
            }
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query, searchBooks]);

    return (
        <div>
            <input
                list="books"
                type="text"
                placeholder="Book Title..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            {loading && <div>Loading...</div>}
            <datalist id="books">
                {books.length > 0 &&
                    books.map((book) => (
                        <option
                            key={book.id}
                            value={book.title}
                            onSelect={() => console.log(book.id)}>
                            {book.title}
                        </option>
                    ))
                }
            </datalist>
        </div>
    );
};

export default BookSmartSelector;
