import React from "react";
import styles from "./App.module.css";

import Lists from "../lists/Lists";
import Users from "../users/Users";

const App = () => {
  return (
    <div className={styles.app}>
      <Users />
      <Lists />
    </div>
  );
};

export default App;
