import { useState } from "react";

import classes from "./App.module.scss";
import "./New.scss";
import { Link, Outlet } from "react-router-dom";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <h1 className="hello">{count}</h1>
      <button className={classes.button} onClick={increment}>
        Inc
      </button>
      <Outlet />
    </div>
  );
};
