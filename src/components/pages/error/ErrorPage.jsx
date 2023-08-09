import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      ErrorPage
      <Link to="/">
        <button>Retour à la page d'acceuil</button>
      </Link>
    </div>
  );
}
