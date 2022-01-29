import classes from "./Arrow.module.scss";

function Arrow({ direction, setPage }) {
  return (
    <div
      className={classes.arrow}
      style={{
        left: direction == "prev" ? "10px" : "auto",
        right: direction == "next" ? "10px" : "auto",
      }}
      onClick={() => setPage()}
    >
      <div
        className={classes.stripe}
        style={{
          bottom: direction == "prev" ? 0 : 18,
          transform: "rotate(45deg)",
        }}
      />
      <div
        className={classes.stripe}
        style={{
          bottom: direction == "prev" ? 18 : 0,
          transform: "rotate(-45deg)",
        }}
      />
    </div>
  );
}

export default Arrow;
