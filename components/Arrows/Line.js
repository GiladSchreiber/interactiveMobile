import classes from "./Line.module.scss";
import { useEffect, useRef, useState } from "react";

function Line({ angle, mousePos }) {
  const arrowRef = useRef();
  const [actualAngle, setActualAngle] = useState(angle);
  useEffect(() => {
    let rect = arrowRef.current.getBoundingClientRect();
    setActualAngle(
      mousePos
        ? Math.atan2(mousePos[1] - (rect.y + 50), mousePos[0] - (rect.x + 50))
        : angle
    );
  }, [mousePos]);

  return (
    <div className={classes.directionWrapper} ref={arrowRef}>
      <div
        className={classes.arrow}
        style={{ transform: "rotate(" + actualAngle + "rad)" }}
      ></div>
    </div>
  );
}

export default Line;
