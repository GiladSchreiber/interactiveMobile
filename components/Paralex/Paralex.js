import classes from "./Paralex.module.scss";
import { useState, useRef, useEffect } from "react";
import Block from "./Block";

function Paralex() {
  const [offset, setOffset] = useState(0);
  const [blocks, setBlocks] = useState([]);
  const paralexRef = useRef();

  const [prevY, setPrevY] = useState(0);

  function touchStart(event) {
    setPrevY(event.touches[0].pageY);
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  function touchMove(event) {
    setOffset(offset - (prevY - event.touches[0].pageY) / 20.0);
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  useEffect(() => {
    let blocks = [];
    for (let i = 0; i < 100; i++) {
      blocks.push(
        <Block
          scroll={offset}
          center={paralexRef.current.getBoundingClientRect().width / 2.0}
        />
      );
    }
    setBlocks(blocks);
  }, [offset]);

  return (
    <div
      className={classes.wrapper}
      ref={paralexRef}
      onTouchMove={(e) => touchMove(e)}
      onTouchStart={(e) => touchStart(e)}
    >
      {blocks}
    </div>
  );
}

export default Paralex;
