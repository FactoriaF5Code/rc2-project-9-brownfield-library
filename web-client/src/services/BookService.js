export function searchBook(query) {
    return fetch(`http://localhost:8080/api/books?q=${query}`)
        .then(response => response.json())
}