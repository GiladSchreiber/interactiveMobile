import classes from "./Block.module.scss";
import { useEffect, useState, useRef } from "react";

function Block({ scroll, center }) {
  let blockRef = useRef();
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [opacity, setOpacity] = useState(0);
  const [border, setBorder] = useState(0);
  useEffect(() => {
    setLeft(-Math.floor(Math.random() * 5000));
    setTop(Math.floor(Math.random() * 600));
    setSpeed(Math.random());
    setWidth(50 + Math.floor(Math.random() * 100));
    setHeight(20 + Math.floor(Math.random() * 100));
    setOpacity(Math.random());
  }, []);
  let actualLeft = left + scroll * speed;
  useEffect(() => {
    let borderFactor = Math.max(
      (100 - Math.abs(center - (actualLeft + width / 2.0))) / 100,
      0
    );
    setBorder(15 * borderFactor);
  }, [scroll]);
  return (
    <div
      ref={blockRef}
      className={classes.block}
      style={{
        top: top + "px",
        left: actualLeft + "px",
        width: width + "px",
        height: height + "px",
        opacity: opacity,
        outlineWidth: border,
      }}
    />
  );
}

export default Block;
