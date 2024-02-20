import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataMembers } from "../../context/DataMembers";
import "./FormMembers.css";

export const FormMembers = () => {
  const { postMembers } = useDataMembers();
  const [newMember, setNewMember] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleNewMember = async () => {
    try {
      const idMembers = await postMembers(newMember);
      setNewMember({
        name: "",
        lastName: "",
        email: "",
        phone: "",
      });

      navigate(`/nuevo-socio-ok/${idMembers}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="Form">
      <h2 className="Form__title">Crear nuevo usuario</h2>
      <form className="formContainer">
        <section className="formContainer__up">
          <label htmlFor="formName">NOMBRE</label>
          <input
            className="formContainer__input-name"
            type="text"
            id="formName"
            name="name"
            placeholder="Nombre"
            value={newMember.name}
            onChange={(e) =>
              setNewMember({ ...newMember, name: e.target.value })
            }
            required
          />

          <label htmlFor="formLastname">APELLIDOS</label>
          <input
            className="formContainer__input-Lastname"
            type="text"
            id="formLastname"
            name="lastName"
            placeholder="Apellidos"
            value={newMember.lastName}
            onChange={(e) =>
              setNewMember({ ...newMember, lastName: e.target.value })
            }
            required
          />
        </section>

        <section className="formContainer__down">
          <div>
            <label htmlFor="formPhone">TELÉFONO</label>
            <input
              className="formContainer__input-phone"
              type="tel"
              id="formPhone"
              name="phone"
              placeholder="63352..."
              value={newMember.phone}
              onChange={(e) =>
                setNewMember({ ...newMember, phone: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="formEmail">CORREO ELECTRÓNICO</label>
            <input
              className="formContainer__input-email"
              type="email"
              id="formEmail"
              name="email"
              placeholder="correo@correo.es"
              value={newMember.email}
              onChange={(e) =>
                setNewMember({ ...newMember, email: e.target.value })
              }
              required
            />
          </div>
        </section>

        <button
          className="formContainer__button"
          type="button"
          onClick={() => {
            // Verificar si falta algún campo por rellenar
            if (
              newMember.name.trim() === "" ||
              newMember.lastName.trim() === "" ||
              newMember.phone.trim() === "" ||
              newMember.email.trim() === ""
            ) {
              alert("Por favor, complete todos los campos del formulario.");
              return; // Evitar que se ejecute handleNewMember si falta algún campo por rellenar
            }
            handleNewMember(); // Llamar a handleNewMember solo si todos los campos están completos
          }}
        >
          Añadir Socio
        </button>
      </form>
    </div>
  );
};
