import classes from "./Gradient.module.scss";
import { useState } from "react";

function Gradient() {
  const [offset, setOffset] = useState(0);
  const [prevY, setPrevY] = useState(0);

  function touchStart(event) {
    setPrevY(event.touches[0].pageY);
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  function touchMove(event) {
    setOffset(Math.max(offset - (prevY - event.touches[0].pageY) / 10.0), 0);
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  let portion = (offset / 10) % 200;
  return (
    <div
      className={classes.wrapper}
      onTouchMove={(e) => touchMove(e)}
      onTouchStart={(e) => touchStart(e)}
      style={{
        background:
          "linear-gradient(to left, #293f54 0%, #8d3264 " +
          (portion < 100 ? portion : 100 - (portion - 100)) +
          "%, #293f54 100%",
      }}
    ></div>
  );
}

export default Gradient;
