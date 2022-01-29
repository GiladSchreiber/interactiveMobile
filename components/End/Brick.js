import classes from "./Brick.module.scss";
import { useEffect, useRef, useState } from "react";

function Brick({ width, mousePos }) {
  const brickRef = useRef();
  const [opacity, setOpacity] = useState(1);
  useEffect(() => {
    let rect = brickRef.current.getBoundingClientRect();
    let dist = Math.sqrt(
      Math.pow(rect.x - mousePos[0], 2) + Math.pow(rect.y - mousePos[1], 2)
    );
    let currentOpacity = Math.min(dist / 150.0, 1);
    setOpacity(currentOpacity < 0.3 ? 0 : currentOpacity);
  }, [mousePos]);

  return (
    <div
      className={classes.brickWrapper}
      ref={brickRef}
      style={{ width: width, opacity: opacity }}
    />
  );
}

export default Brick;
