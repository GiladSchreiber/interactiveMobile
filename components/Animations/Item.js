import { useRef, useEffect } from "react";
import classes from "./Item.module.scss";

function Item({ header, bottom, top, show, animation, isFirst }) {
  let itemRef = useRef();
  let headerRef = useRef();
  useEffect(() => {
    if (animation) {
      if (isFirst) {
        headerRef.current.style.opacity = 0;
        itemRef.current.style.transform = "translateY(-" + top + ")";
        itemRef.current.style.opacity = header == "ABOUT ME" ? 1 : 0;
        itemRef.current.style.width = header == "ABOUT ME" ? "0px" : "80%";
      } else if (!show) {
        setTimeout(() => {
          headerRef.current.style.opacity = 0;
        }, 600);
        setTimeout(() => {
          itemRef.current.style.transform = "translateY(-" + top + ")";
        }, 1000);
        setTimeout(() => {
          itemRef.current.style.opacity = header == "ABOUT ME" ? 1 : 0;
          itemRef.current.style.width = header == "ABOUT ME" ? "0px" : "80%";
        }, 1600);
      } else {
        setTimeout(() => {
          itemRef.current.style.width = "80%";
        }, 600);
        setTimeout(() => {
          itemRef.current.style.opacity = 1;
          itemRef.current.style.transform = "translateY(0)";
        }, 1000);
        setTimeout(() => {
          headerRef.current.style.opacity = 1;
        }, 1600);
      }
    }
  }, [show]);
  return (
    <div
      className={classes.itemWrapper}
      style={{ bottom: bottom }}
      ref={itemRef}
    >
      <div className={classes.header} ref={headerRef}>
        {header}
      </div>
    </div>
  );
}

export default Item;
