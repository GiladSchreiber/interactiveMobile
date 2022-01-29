import classes from "./Trail.module.scss";
import { useState } from "react";
import Brick from "./Brick";
function Trail() {
  let [mousePos, setMousePos] = useState([]);
  let bricks = [];
  for (let i = 0; i < 400; i++) {
    bricks.push(<Brick mousePos={mousePos} />);
  }
  function touch(e) {
    setMousePos([e.touches[0].clientX, e.touches[0].clientY]);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
  return (
    <div className={classes.wrapper} onTouchMove={(e) => touch(e)}>
      {bricks}
    </div>
  );
}

export default Trail;
