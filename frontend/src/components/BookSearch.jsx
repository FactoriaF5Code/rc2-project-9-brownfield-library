import { useState } from "react";

export const BookSearch = () => {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const search = () => {
        fetch(`http://localhost:8080/api/books?q=${query}`)
            .then(response => response.json())
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
                { results.map( r => <p>{r.title}</p>)}
            </main>
        </section>

    );
}
