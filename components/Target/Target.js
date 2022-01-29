import classes from "./Target.module.scss";
import { useEffect, useRef, useState } from "react";
function Target() {
  let [mousePos, setMousePos] = useState([]);
  let [enterFirst, setEnterFirst] = useState(false);
  let [enterSecond, setEnterSecond] = useState(false);
  let targetRef = useRef();
  let firstHeaderRef = useRef();
  let secondHeaderRef = useRef();
  let smallerTargetRef = useRef();
  let leftHorizontalLineRef = useRef();
  let rightHorizontalLineRef = useRef();
  let bottomVerticalLineRef = useRef();
  let topVerticalLineRef = useRef();

  useEffect(() => {
    let rect = firstHeaderRef.current.getBoundingClientRect();
    if (
      mousePos[0] >= rect.x &&
      mousePos[0] <= rect.x + rect.width &&
      mousePos[1] >= rect.y &&
      mousePos[1] <= rect.y + rect.height
    ) {
      setEnterFirst(true);
    } else {
      setEnterFirst(false);
    }
  }, [mousePos]);

  useEffect(() => {
    let rect = secondHeaderRef.current.getBoundingClientRect();
    if (
      mousePos[0] >= rect.x &&
      mousePos[0] <= rect.x + rect.width &&
      mousePos[1] >= rect.y &&
      mousePos[1] <= rect.y + rect.height
    ) {
      setEnterSecond(true);
    } else {
      setEnterSecond(false);
    }
  }, [mousePos]);

  useEffect(() => {
    if (enterFirst) {
      enterFirstHeader();
    } else {
      exitFirstHeader();
    }
  }, [enterFirst]);

  useEffect(() => {
    if (enterSecond) {
      enterSecondHeader(true);
    } else {
      exitSecondHeader(false);
    }
  }, [enterSecond]);
  function enterFirstHeader() {
    targetRef.current.style.width = "50px";
    targetRef.current.style.height = "50px";
    targetRef.current.style.borderWidth = "15px";
    smallerTargetRef.current.style.width = "25px";
    smallerTargetRef.current.style.height = "25px";
  }

  function exitFirstHeader() {
    targetRef.current.style.width = "5px";
    targetRef.current.style.height = "5px";
    targetRef.current.style.borderWidth = "5px";
    smallerTargetRef.current.style.width = "0px";
    smallerTargetRef.current.style.height = "0px";
  }

  function enterSecondHeader() {
    targetRef.current.style.width = "50px";
    targetRef.current.style.height = "50px";
    leftHorizontalLineRef.current.style.opacity = 1;
    rightHorizontalLineRef.current.style.opacity = 1;
    topVerticalLineRef.current.style.opacity = 1;
    bottomVerticalLineRef.current.style.opacity = 1;
  }

  function exitSecondHeader() {
    targetRef.current.style.width = "5px";
    targetRef.current.style.height = "5px";
    leftHorizontalLineRef.current.style.opacity = 0;
    rightHorizontalLineRef.current.style.opacity = 0;
    topVerticalLineRef.current.style.opacity = 0;
    bottomVerticalLineRef.current.style.opacity = 0;
  }

  function touch(e) {
    setMousePos([e.touches[0].clientX, e.touches[0].clientY]);
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  return (
    <div className={classes.wrapper} onTouchMove={(e) => touch(e)}>
      <div
        className={classes.target}
        ref={targetRef}
        style={{
          top: mousePos[1] - 20 + "px",
          left: mousePos[0] - 18 + "px",
        }}
      />

      <div
        className={classes.smallerTarget}
        ref={smallerTargetRef}
        style={{
          top: mousePos[1] + 7 + "px",
          left: mousePos[0] + 8 + "px",
        }}
      />

      <div
        className={classes.horizontalLine}
        ref={leftHorizontalLineRef}
        style={{
          top: mousePos[1] + 10 + "px",
          left: mousePos[0] - 35 + "px",
        }}
      />

      <div
        className={classes.horizontalLine}
        ref={rightHorizontalLineRef}
        style={{
          top: mousePos[1] + 10 + "px",
          left: mousePos[0] + 30 + "px",
        }}
      />

      <div
        className={classes.verticalLine}
        ref={topVerticalLineRef}
        style={{
          top: mousePos[1] - 35 + "px",
          left: mousePos[0] + 12 + "px",
        }}
      />

      <div
        className={classes.verticalLine}
        ref={bottomVerticalLineRef}
        style={{
          top: mousePos[1] + 30 + "px",
          left: mousePos[0] + 12 + "px",
        }}
      />
      <div
        className={classes.header}
        style={{ top: "20vh" }}
        ref={firstHeaderRef}
      >
        WHAT'S YOUR GOAL?
      </div>
      <div
        className={classes.header}
        ref={secondHeaderRef}
        style={{ top: "40vh" }}
      >
        AIM FOR IT
      </div>
    </div>
  );
}

export default Target;
