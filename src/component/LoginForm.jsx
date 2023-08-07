import { useState } from "react";

export default function LoginForm() {
  const [newUserState, setNewUserState] = useState("");

  const handeSubmit = (event) => {
    event.preventDefault();
    alert("bonjour " + newUserState);
    setNewUserState("");
  };

  const handeChange = (event) => {
    console.log(event.target.value);
    setNewUserState(event.target.value);
  };
  return (
    <div>
      <h1>bienvenue chez nous !</h1>
      <h3>Connectez vous</h3>
      <form action="action" onSubmit={handeSubmit}>
        <input
          type="text"
          value={newUserState}
          onChange={handeChange}
          required
          placeholder="Entrez votre prénom..."
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
