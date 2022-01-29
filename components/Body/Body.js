import classes from "./Body.module.scss";
import { useState } from "react";
import Arrow from "./Arrow";
import Events from "../Events/Events";
import Triggers from "../Triggers/Triggers";
import MobileStatic from "../Animations/MobileStatic";
import Mobile from "../Animations/Mobile";
import Trail from "../Trail/Trail";
import Arrows from "../Arrows/Arrows";
import Glow from "../Glow/Glow";
import Target from "../Target/Target";
import Bars from "../Bars/Bars";
import Gradient from "../Gradient/Gradient";
import Landscape from "../Landscape/Landscape";
import Paralex from "../Paralex/Paralex";
import End from "../End/End";

function Body() {
  let [page, setPage] = useState(0);

  let pages = [
    <Events />,
    <Triggers />,
    <Target />,
    <Glow />,
    <Trail />,
    <Arrows />,
    <Bars />,
    <Gradient />,
    <Paralex />,
    <Landscape />,
    <MobileStatic />,
    <Mobile />,
    <End />,
  ];

  function nextPage() {
    setPage((page + 1) % pages.length);
  }

  function prevPage() {
    setPage((page - 1 + pages.length) % pages.length);
  }
  return (
    <div className={classes.wrapper}>
      {pages[page]}
      {page > 0 ? <Arrow direction="prev" setPage={prevPage} /> : null}
      <Arrow direction="next" setPage={nextPage} />
    </div>
  );
}

export default Body;
