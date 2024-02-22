import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./NewBookForm.css";
import { useBookDataContext } from "../../../middleware/context/BookData";
import { useNavigate } from "react-router-dom";

export const NewBookForm = () => {
  const newBookDefaultValues = {
    isbn: { type: "text", label: "ISBN" },
    title: { type: "text", label: "Title" },
    author: { type: "text", label: "Author" },
    year: { type: "text", label: "Year" }
  };

  const initialValues = {
    id: uuidv4(),
    title: "",
    author: "",
    year: "",
    isbn: ""
  }

  const { createBook } = useBookDataContext();

  const navigate = useNavigate()

  const [newBook, setNewBook] = useState(initialValues);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createBook(newBook); 
      console.log("Book created and response is " + response);
      navigate("/curators/books", { state: { msg: response } });
    } catch (err) {
      setError(err);
    }
  }

  return (
    <div className="Form">
      <h2 className="Form__title">Añadir libro al catálogo</h2>
      <form className="formContainer" onSubmit={handleSubmit}>
        <input type="hidden" name="id" value={newBook.id} />
        {Object.entries(newBookDefaultValues).map(([name, value], key) =>
          <label key={key} htmlFor={name}>
            {value.label}
            <input
              required
              name={name}
              id={name}
              type={value.type} value={newBook[name]} onChange={handleChange} />
          </label>
        )}
        <button className="formContainer__button" type="submit">
          Save
        </button>
        {error && <p>{`An error occurred: ${error}`}</p>}
      </form>
    </div>
  );
};
