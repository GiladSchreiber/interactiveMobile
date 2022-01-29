import classes from "./Bars.module.scss";
import { useState } from "react";
import Bar from "./Bar";

function Bars() {
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

  var bars = [];
  for (var i = 0; i < 100; i++) {
    bars.push(<Bar top={1000} scroll={offset} index={i} />);
  }

  return (
    <div
      className={classes.wrapper}
      onTouchMove={(e) => touchMove(e)}
      onTouchStart={(e) => touchStart(e)}
    >
      {bars}
    </div>
  );
}

export default Bars;
