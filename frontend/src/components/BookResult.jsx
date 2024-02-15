import "./BookResult.css";

export const BookResult = ({title, author}) => {
  return (
    <article className="book-result">
        <h1>{title}</h1>
        <h2>{author}</h2>
    </article>
  )
}
