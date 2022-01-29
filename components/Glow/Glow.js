import classes from "./Glow.module.scss";
import { useState } from "react";
function Glow() {
  let [mousePos, setMousePos] = useState([100, 50]);
  function touch(e) {
    setMousePos([e.touches[0].clientX, e.touches[0].clientY]);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
  return (
    <div
      className={classes.wrapper}
      onTouchMove={(e) => touch(e)}
      style={{
        backgroundImage:
          "radial-gradient(farthest-corner at " +
          mousePos[0] +
          "px " +
          mousePos[1] +
          "px,#8d3264 0%,  #293f54 100%)",
      }}
    />
  );
}

export default Glow;
