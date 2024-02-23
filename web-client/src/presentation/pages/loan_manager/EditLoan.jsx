import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import BookSmartSelector from "../../components/BookSmartSelector/BookSmartSelector";


export const EditLoan = () => {
    const loanId = uuidv4();
    const [memberId, setMemberId] = useState("");
    const [bookId, setBookId] = useState("");
    const [readyToSubmit, setReadyToSubmit] = useState(false);

    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault;
    }

    return (
        <div className="Form">
            <h2 className="Form__title">Register new member</h2>
            <form className="formContainer" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={loanId} />
                <BookSmartSelector onSelection={(x) => console.log("selected " + x) }/>

                <button className="formContainer__button" type="submit" disabled={!readyToSubmit}>
                    Save
                </button>
                {error && <p>{`An error occurred: ${error}`}</p>}
            </form>
        </div>
    );
};
