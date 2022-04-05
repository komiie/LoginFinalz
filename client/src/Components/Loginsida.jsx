import React from "react";
import { useNavigate } from "react-router-dom";

function Loginsida() {
  const redirect = useNavigate();
  const logout = () => {
    console.log("logout?");
    localStorage.removeItem("isLoggedIn");
    redirect("/");
  };
  return (
    <div>
      {localStorage.isLoggedIn ? (
        <div>
          <p>Logged in</p>
          <button onClick={logout} type="submit">
            Logga ut
          </button>
        </div>
      ) : (
        <div>
          <p>You need to log in to access this page</p>
          <button onClick={() => redirect("/")} type="submit">Go to home</button>
        </div>
      )}
    </div>
  );
}

export default Loginsida;
