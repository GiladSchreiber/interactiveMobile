import classes from "./Arrows.module.scss";
import { useState } from "react";
import Line from "./Line";

function Arrows() {
  let [mousePos, setMousePos] = useState([]);

  function touch(e) {
    setMousePos([e.touches[0].clientX, e.touches[0].clientY]);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  var directions = [];
  for (var i = 0; i < 80; i++) {
    directions.push(<Line angle={Math.random() * 360} mousePos={mousePos} />);
  }
  return (
    <div className={classes.wrapper} onTouchMove={(e) => touch(e)}>
      {directions}
    </div>
  );
}

export default Arrows;
