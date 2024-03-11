import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useBookDataContext } from "../../../middleware/context/BookData";
import AsyncSelect from 'react-select/async';
import { useMemberDataContext } from "../../../middleware/context/MemberDataContext";
import { useNavigate } from "react-router-dom";

export const EditLoan = () => {
    const id = uuidv4();
    const [memberId, setMemberId] = useState(null);
    const [bookId, setBookId] = useState(null);
    const [readyToSubmit, setReadyToSubmit] = useState(false);

    useEffect(() => {
        setReadyToSubmit(memberId !== null && bookId !== null);
    }, [memberId, bookId])

    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const { searchBooks } = useBookDataContext();
    const { availableBooks} = useBookDataContext();
    const { searchMembers } = useMemberDataContext();
    const { createLoan } = useBookDataContext();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createLoan({
                id: id,
                bookId: bookId,
                memberId: memberId
            });
            console.log("Book created and response is " + response);
            navigate("/curators", { state: { msg: response } });
        } catch (err) {
            setError(err);
        }
    }

    const loadBookOptions = (input) =>
        availableBooks(input)
            .then(results => results.map(b => ({
                label: `${b.title} (${b.author})`,
                value: b.id
            })));

    const loadMemberOptions = (input) =>
        searchMembers(input)
            .then(results => {
                console.log("results are " + results);
                return results.map(m => ({
                    label: `${m.lastName}, ${m.firstName} (${m.id})`,
                    value: m.id
                }))
            });

    return (
        <div className="Form">
            <h2 className="Form__title">Register new loan</h2>
            <form className="formContainer" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={id} />
                <label htmlFor="book">Book</label>
                <AsyncSelect id="book"
                    name="book"
                    cacheOptions
                    loadOptions={loadBookOptions}
                    onChange={(o) => setBookId(o.value)} />
                <label htmlFor="member">Member</label>
                <AsyncSelect
                    id="member"
                    name="member"
                    loadOptions={loadMemberOptions}
                    onChange={o => setMemberId(o.value)}
                />

                <button className="formContainer__button" type="submit" disabled={!readyToSubmit}>
                    Save
                </button>
                {error && <p>{`An error occurred: ${error}`}</p>}
            </form>
        </div>
    );
};
