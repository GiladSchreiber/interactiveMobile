import classes from "./Brick.module.scss";
import { useEffect, useRef, useState } from "react";

function Brick({ mousePos }) {
  const brickRef = useRef();
  const [letterClasses, setLetterClasses] = useState(
    `${classes.letterWrapper} ${classes.fadeOut}`
  );
  const [mouseEnter, setMouseEnter] = useState(false);
  useEffect(() => {
    let rect = brickRef.current.getBoundingClientRect();
    if (
      mousePos[0] >= rect.x &&
      mousePos[0] <= rect.x + rect.width &&
      mousePos[1] >= rect.y &&
      mousePos[1] <= rect.y + rect.height
    ) {
      setMouseEnter(true);
    } else {
      setMouseEnter(false);
    }
  }, [mousePos]);
  useEffect(() => {
    setLetterClasses(
      mouseEnter
        ? `${classes.letterWrapper} ${classes.fadeIn}`
        : `${classes.letterWrapper} ${classes.fadeOut}`
    );
  }, [mouseEnter]);

  return <div className={letterClasses} ref={brickRef} />;
}

export default Brick;
