import { useState } from "react";
import classes from "./Triggers.module.scss";

function Triggers() {
  let [transition, setTransition] = useState(false);
  return (
    <div className={classes.triggersWrapper}>
      <div className={classes.examplesWrapper}>
        <div
          className={`${classes.baseForm} ${classes.opacity}`}
          style={{ top: 0, transitionDuration: transition ? "0.6s" : "0s" }}
        />
        <div
          className={`${classes.baseForm} ${classes.width}`}
          style={{ transitionDuration: transition ? "0.6s" : "0s" }}
        />
        <div
          className={`${classes.baseForm} ${classes.color}`}
          style={{ transitionDuration: transition ? "0.6s" : "0s" }}
        />
        <div className={`${classes.baseForm2}`}>
          <div
            className={`${classes.cover} ${classes.opacity}`}
            style={{ transitionDuration: transition ? "0.6s" : "0s" }}
          />
          <div
            className={`${classes.image}`}
            style={{
              maskImage: "url(/interactiveMobile/assets/ltIcon.png)",
              WebkitMaskImage: "url(/interactiveMobile/assets/ltIcon.png)",
            }}
          />
        </div>
        <div
          className={`${classes.baseForm} ${classes.outline}`}
          style={{ transitionDuration: transition ? "0.6s" : "0s" }}
        />
        <div
          className={`${classes.baseForm} ${classes.rotate}`}
          style={{ transitionDuration: transition ? "0.6s" : "0s" }}
        />
        <div
          className={`${classes.baseForm} ${classes.circle}`}
          style={{ transitionDuration: transition ? "0.6s" : "0s" }}
        />
        <div
          className={`${classes.baseForm} ${classes.move}`}
          style={{ transitionDuration: transition ? "0.6s" : "0s" }}
        />
      </div>
      <div
        className={classes.toggleWrapper}
        onClick={() => setTransition(!transition)}
        style={{ backgroundColor: transition ? "#8d3264" : "#293f54" }}
      >
        <div className={classes.toggleText}>transition</div>
        <div
          className={classes.toggleCircle}
          style={{ right: transition ? 0 : "60%" }}
        ></div>
      </div>
    </div>
  );
}

export default Triggers;
