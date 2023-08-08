import { useState } from "react";

export default function LoginPage() {
  const [inputValue, setInputValue] = useState("");

  const handeSubmit = (event) => {
    event.preventDefault();
    alert(`bonjour ${inputValue}`);
    setInputValue("");
  };

  const handeChange = (event) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div>
      <h1>bienvenue chez nous !</h1>
      <h3>Connectez vous</h3>
      <form action="action" onSubmit={handeSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handeChange}
          required
          placeholder="Entrez votre prénom..."
        />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}
