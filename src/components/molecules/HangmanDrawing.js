const HEAD = (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "100%",
      border: "5px solid black",
      position: "absolute",
      top: "30px",
      right: "-16px",
    }}
  />
)

const BODY = (
  <div
    style={{
      width: "5px",
      height: "50px",
      background: "black",
      position: "absolute",
      top: "70px",
      right: 0,
    }}
  />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "70px",
      right: "-45px",
      rotate: "50deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "70px",
      right: "0px",
      rotate: "-50deg",
      transformOrigin: "right bottom",
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "115px",
      right: "-45px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "50px",
      height: "5px",
      background: "black",
      position: "absolute",
      top: "115px",
      right: "0px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

export function HangmanDrawing({ numberOfGuesses }) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "25px",
          width: "5px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "5px",
          width: "100px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "200px",
          width: "5px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "5px", width: "125px", background: "black" }} />
    </div>
  )
}
