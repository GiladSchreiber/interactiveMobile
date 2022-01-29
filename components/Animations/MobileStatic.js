import classes from "./MobileStatic.module.scss";
import Item from "./Item";
import Icon from "./Icon";
import { useState } from "react";
function MobileStatic({ left }) {
  let [show, setShow] = useState(false);

  return (
    <div className={classes.mobileWrapper} style={{ left: left }}>
      <div className={classes.return} onClick={() => setShow(false)}>
        <div className={classes.line} style={{ transform: "rotate(45deg)" }} />
        <div className={classes.line} style={{ transform: "rotate(-45deg)" }} />
      </div>
      <div
        className={classes.open}
        onClick={() => setShow(true)}
        style={{ opacity: show ? 0 : 1, zIndex: show ? -2 : 2 }}
      >
        LOAD WITHOUT ANIMATIONS
      </div>
      <div
        className={classes.profileImage}
        style={{
          backgroundImage:
            "url('/interactiveMobile/assets/queenElizabeth.jpeg')",
        }}
      />
      <div className={classes.name}>A-Queen</div>
      <div
        className={classes.cover}
        style={{
          backgroundImage: "url('/interactiveMobile/assets/queenCover.png')",
        }}
      />
      <div className={classes.iconsWrapper}>
        <Icon url="instagramIcon.png" />
        <Icon url="githubIcon.png" />
        <Icon url="linkdinIcon.png" />
        <Icon url="mailIcon.png" />
        <Icon url="phoneIcon.png" />
      </div>
      <div
        className={classes.image}
        style={{
          backgroundImage: "url('/interactiveMobile/assets/bigBen.png')",
        }}
      />
      <Item bottom="170px" header="ABOUT ME" animation={false} />
      <Item bottom="120px" header="WHAT'S NEW" animation={false} />
      <Item bottom="70px" header="AT YOUR SERVICE" animation={false} />
      <Item bottom="20px" header="LET'S MEET" animation={false} />
    </div>
  );
}

export default MobileStatic;
