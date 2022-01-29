import classes from "./End.module.scss";
import Brick from "./Brick";
import { useState } from "react";

function End() {
  let [mousePos, setMousePos] = useState([]);
  function touch(e) {
    setMousePos([e.touches[0].clientX, e.touches[0].clientY]);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
  let bricks = [];
  for (let i = 0; i < 1400; i++) {
    bricks.push(
      <Brick width={i % 3 == 0 ? "20px" : "40px"} mousePos={mousePos} />
    );
  }
  return (
    <div className={classes.endWrapper} onTouchMove={(e) => touch(e)}>
      <div className={classes.message}>BREAK THE WALL</div>
      {bricks}
    </div>
  );
}

export default End;
