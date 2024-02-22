import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useMemberDataContext } from "../../../middleware/context/MemberDataContext";


export const EditMember = () => {
    const newBookDefaultValues = {
        firstName: { type: "text", label: "Name" },
        lastName: { type: "text", label: "Last Name" },
        address: { type: "text", label: "Address" },
        email: { type: "email", label: "Email" },
        phone: { type: "number", label: "Phone" }
    };

    const initialValues = {
        id: uuidv4(),
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
    }

    const { createMember } = useMemberDataContext();

    const navigate = useNavigate()

    const [newMember, setNewMember] = useState(initialValues);
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewMember({ ...newMember, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await createMember(newMember);
            navigate("/curators/members", { state: { msg: response } });
        } catch (err) {
            setError(err);
        }
    }

    return (
        <div className="Form">
            <h2 className="Form__title">Register new member</h2>
            <form className="formContainer" onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={newMember.id} />
                {Object.entries(newBookDefaultValues).map(([name, value], key) =>
                    <label key={key} htmlFor={name}>
                        {value.label}
                        <input
                            required
                            name={name}
                            id={name}
                            type={value.type} value={newMember[name]} onChange={handleChange} />
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
