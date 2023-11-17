import styles from "./Header.module.css";
import React from "react";
import { useAuth } from "../AuthContext";

const Header = () => {
  const { isAuthenticated, toggleAuthentication } = useAuth();

  return (
    <header>
      <div className={`container ${styles.headerContainer}`}>
        {isAuthenticated ? (
          <>
            <h3>Hello, user!</h3>
            <button onClick={toggleAuthentication}>Logout</button>
          </>
        ) : (
          <>
            <h3>Please, login!</h3>
            <button onClick={toggleAuthentication}>Login</button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
