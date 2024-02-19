import { useState } from "react";
import { searchBook } from "../services/BookService";
import { BookResult } from "./BookResult";
import "./BookSearch.css";

export const BookSearch = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const search = () => {
        searchBook(query)
            .then(body => setResults(body.results));
    }

    const clear = () => {
        setResults([]);
        setQuery("");
    }

    return (
        <section>
            <menu>
                <input
                    type="search"
                    placeholder="Pepinillos en vinagre"
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                />
                <button onClick={search}>Buscar</button>
                {results.length > 0 &&
                    <span className="clearButton" onClick={clear} >
                        Limpiar resultado
                    </span>}
            </menu>
            <main>
                {results.map((r, key) => <BookResult key={key} {...r} />)}
            </main>
        </section>
    );
}
