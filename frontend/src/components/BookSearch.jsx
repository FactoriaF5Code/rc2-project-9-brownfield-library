import { useState } from "react";
import { searchBook } from "../services/BookService";
import { BookResult } from "./BookResult";

export const BookSearch = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const search = () => {
        searchBook(query)
            .then(body => setResults(body.results));
    }

    return (
        <section>
            <menu>
                <input
                    type="search"
                    placeholder="Busca libros por título"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                />
                <button onClick={search}>Buscar</button>
            </menu>
            <main>
                {results.map((r,key) => <BookResult key={key} {...r} />)}
            </main>
        </section>
    );
}
