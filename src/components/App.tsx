import { useState } from "react";

import classes from "./App.module.scss";
import "./New.scss";
import { Link, Outlet } from "react-router-dom";

import avatarPng from "@/assets/avatar.png";
import avatarJpg from "@/assets/avatar.jpg";
import Image from "@/assets/app-image.svg";

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };



  // if (__PLATFORM__ === 'desktop') {
  //   return <h1>КОМПУДАХТЕР!!!</h1>
  // }
  return (
    <div>
      <h1>{__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt="" />
        <img width={100} height={100} src={avatarJpg} alt="" />
      </div>
      <div>
        asfasfasfasf asfasfasfasf1111 asfasfasfasf1111213213sd
        <Image color={"red"} width={300} height={300} />
      </div>
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
