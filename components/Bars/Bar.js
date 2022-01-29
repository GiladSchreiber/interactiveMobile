import classes from "./Bar.module.scss";
import { useEffect, useState } from "react";

function Bar({ top, scroll, index }) {
  const [left, setLeft] = useState(0);
  const [currentTop, setCurrentTop] = useState(top);
  useEffect(() => {
    setLeft(Math.floor(Math.random() * 100));
    setCurrentTop(top + 100 * index);
  }, []);
  return (
    <div
      className={classes.bar}
      style={{ top: Math.max(index * 10, currentTop - scroll), left: left }}
    />
  );
}

export default Bar;
