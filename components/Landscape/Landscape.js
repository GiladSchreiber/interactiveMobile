import classes from "./Landscape.module.scss";
import { useState, useEffect } from "react";

function Landscape() {
  const [offset, setOffset] = useState(0);
  const [prevY, setPrevY] = useState(0);

  function touchStart(event) {
    setPrevY(event.touches[0].pageY);
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  function touchMove(event) {
    setOffset(Math.max(offset - (prevY - event.touches[0].pageY) / 20.0, 0));
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }
  return (
    <div
      className={classes.wrapper}
      onTouchMove={(e) => touchMove(e)}
      onTouchStart={(e) => touchStart(e)}
    >
      <svg width="100%" height="100%">
        <polyline
          style={{
            transform: "translateY(30%) scaleX(0.9)",
            strokeDashoffset: 3000 + offset,
          }}
          className={classes.line}
          points="520 254.52 462 254.52 437 159.52 408 159.52 408 250.52 425 251.52 406 85.52 380 84.52 361 132.52 360 205.52 371 205.52 369 166.52 320 168.52 321 243.52 345 244.52 332 129.52 303 100.52 304 40.52 245 42.52 247 209.52 259 209.52 260 2.52 199 0.52 202 161.52 159 161.52 159 211.52 175 211.52 176 71.52 116 71.52 108 241.52 130 242.52 130 131.52 78 130.52 70 255.52 0 255.52"
        />
      </svg>
    </div>
  );
}

export default Landscape;
