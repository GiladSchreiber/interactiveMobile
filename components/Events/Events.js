import classes from "./Events.module.scss";
import { useState, useEffect } from "react";

function Events() {
  let [eventType, setEventType] = useState("no event");
  const [prevY, setPrevY] = useState(0);

  function touchStart(event) {
    setPrevY(event.touches[0].pageY);
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  function touchMove(event) {
    let len = event.touches.size();
    setEventType(len > 1 ? len + " touches move" : "touch move");
    if (prevY - event.touches[0].pageY > 50) {
      setEventType("scroll");
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    event.stopPropagation();
  }

  return (
    <div
      className={classes.eventsWrapper}
      onClick={() => setEventType("tap")}
      onTouchMove={(e) => setEventType("touch move")}
      onTouchEnd={() => setEventType("touch end")}
    >
      <div className={classes.title}>WE WATCH YOU</div>
      <div className={classes.eventTitle}>{eventType + "\ndetected"}</div>
    </div>
  );
}

export default Events;
