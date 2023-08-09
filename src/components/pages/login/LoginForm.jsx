import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [userName, setuserName] = useState("");
  const navigate = useNavigate();
  const handeSubmit = (event) => {
    event.preventDefault();
    setuserName("");
    navigate(`order/${userName}`);
  };

  const handeChange = (event) => {
    console.log(event.target.value);
    setuserName(event.target.value);
  };
  return (
    <div>
      <h1>bienvenue chez nous !</h1>
      <h3>Connectez vous</h3>
      <form action="action" onSubmit={handeSubmit}>
        <input
          type="text"
          value={userName}
          onChange={handeChange}
          required
          placeholder="Entrez votre prénom..."
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
