import { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { IoCloseCircle } from "react-icons/io5";
import { useCallback } from "react";

export default function ScreenTracker() {
  document.title = "Mediavelocity Screen Tracker"

  const [bgColor, setBgColor] = useState("#00b140");
  const [cornerPin, setCornerPin] = useState(true);
  const [trackerField, setTrackerField] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(true);

  function ToggleFullscreen() {
    if (fullscreen === false) {
      setFullscreen(true);
      // console.log("go full");
      document.body.requestFullscreen();
    } else {
      document.exitFullscreen();
      setFullscreen(false);
    }
  }
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && !fullscreen) {
        setFullscreen(false);
        console.log("esc key pressed");
      }
    },
    [setFullscreen, fullscreen]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);

  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        minHeight: "100vh",
        position: "absolute",
        minWidth: "100vw",
        display: "fullscreen",
      }}
      className="d-flex flex-column align-items-center justify-content-center"
      // onClick={() => setMenuVisible(!menuVisible)}
    >
      {/* ------------ SHAPE FIELD ------- */}
      {trackerField && (
        <div
          style={{ minHeight: "100vh", minWidth: "100vw", overflow: "hidden" }}
          className="position-absolute overflow-hidden"
        >
          <TrackerField />
        </div>
      )}

      {cornerPin && <CornerPins />}

      {/* ------------MENU-----------*/}
      {menuVisible ? (
        <div
          className="bg-dark text-white rounded-3 p-4 position-relative"
          style={{ zIndex: "100" }}
        >
          <div
            className="position-absolute top-0"
            style={{ left: "2px" }}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            <IoCloseCircle size={20} />
          </div>
          <h2 className="fs-4 mt-2 mb-4 text-center">
            Screen Key & Tracker Points
          </h2>

          <Row className="d-flex justify-content-center">
            <Col sm={3} className="">
              <Form>
                {/* <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label> */}
                <Form.Control
                  type="color"
                  id="ColorInput"
                  value={bgColor}
                  title="Choose your color"
                  onChange={(e) => setBgColor(e.target.value)}
                />
              </Form>
            </Col>
            <Col
              sm={3}
              className="d-flex justify-items-start align-items-center"
            >
              {bgColor}
            </Col>
          </Row>

          <Button
            className="w-100 my-3 btn-sm"
            onClick={() => setCornerPin(!cornerPin)}
          >
            Corner Pin
            {cornerPin && <> ON</>}
            {!cornerPin && <> OFF</>}
          </Button>

          <Button
            className="w-100 mb-3 btn-sm"
            onClick={(e) => setTrackerField(!trackerField)}
          >
            Tracking Shape Field
          </Button>

          {fullscreen ? (
            <Button className="w-100 btn-sm" onClick={() => ToggleFullscreen()}>
              Escape Full Screen
            </Button>
          ) : (
            <Button className="w-100 btn-sm" onClick={() => ToggleFullscreen()}>
              Go Full Screen
            </Button>
          )}

          {/* {fullscreen ? <>full</>:<>no full</>} */}
        </div>
      ) : (
        <div
          style={{
            transform: "rotate(45deg)",
            cursor: "pointer",
            color: "white",
            opacity: "0.4",
            zIndex: "5",
          }}
          className="stretched-link"
          onClick={() => setMenuVisible(!menuVisible)}
        >
          <IoCloseCircle size={20} />
        </div>
      )}
    </div>
  );
}

function CornerPin() {
  return (
    <svg viewBox="0 0 100 100">
      <path fill="#231f20" d="M0 0h100v100H0z" />
      <path fill="#fff" d="M35.1 35.1h29.8v29.8H35.1z" />
    </svg>
  );
}

function CornerPins() {
  return (
    <div className="position-absolute w-100 h-100">
      <div
        style={{
          width: "30px",
          position: "absolute",
          top: "5px",
          left: "5px",
        }}
      >
        <CornerPin />
      </div>
      <div
        style={{
          width: "30px",
          position: "absolute",
          top: "5px",
          right: "5px",
        }}
      >
        <CornerPin />
      </div>
      <div
        style={{
          width: "30px",
          position: "absolute",
          bottom: "5px",
          left: "5px",
        }}
      >
        <CornerPin />
      </div>
      <div
        style={{
          width: "30px",
          position: "absolute",
          bottom: "5px",
          right: "5px",
        }}
      >
        <CornerPin />
      </div>
    </div>
  );
}

function TrackerField() {
  return (
    <svg viewBox="0 0 1947.8 1092.1">
      <path
        fill="#231f20"
        d="M166.6 56.6h46v46h-46zM212.6 56.6h46v46h-46zM212.6 102.6h46v46h-46zM91.9 205.4l25.6 44.4 25.7 44.4H40.6l25.7-44.4 25.6-44.4zM258.6 351.2l63 62.9-63 63-63-63zM418.8 295.7v-46h46v46zM418.8 249.7v-46h46v46zM464.8 249.7v-46h46v46zM567.6 370.4l44.4-25.6 44.5-25.7v102.6L612 396.1l-44.4-25.7zM557.6 51.3 602 25.7 646.5 0v102.6L602 76.9l-44.4-25.6zM713.4 203.7l63-63 62.9 63-63 62.9zM1138.6 56.6h46v46h-46zM1184.6 56.6h46v46h-46zM1184.6 102.6h46v46h-46zM1063.9 205.4l25.6 44.4 25.7 44.4h-102.6l25.7-44.4 25.6-44.4zM1230.6 351.2l63 62.9-63 63-63-63zM886.6 351.1l63 63-63 63-63-63zM1390.8 295.7v-46h46v46zM1390.8 249.7v-46h46v46zM1436.8 249.7v-46h46v46zM1539.6 370.4l44.4-25.6 44.5-25.7v102.6l-44.5-25.6-44.4-25.7zM1529.6 51.3l44.4-25.6L1618.5 0v102.6L1574 76.9l-44.4-25.6zM1685.4 203.7l63-63 62.9 63-63 62.9zM873.4 62.9l63-63 62.9 63-63 62.9zM677.5 570.6h46v46h-46zM723.5 570.6h46v46h-46zM723.5 616.6h46v46h-46zM602.8 719.4l25.7 44.4 25.6 44.4H551.5l25.7-44.4 25.6-44.4zM769.5 865.2l63 62.9-63 63-63-63zM929.7 809.7v-46h46v46zM929.7 763.7v-46h46v46zM975.7 763.8v-46h46v46zM1078.5 884.4l44.4-25.6 44.5-25.7v102.6l-44.5-25.6-44.4-25.7zM1068.5 565.3l44.4-25.6 44.5-25.7v102.6l-44.5-25.7-44.4-25.6zM1224.3 717.7l63-63 62.9 63-63 62.9zM1649.5 570.6h46v46h-46zM1695.5 570.6h46v46h-46zM1695.5 616.6h46v46h-46zM1574.8 719.4l25.7 44.4 25.6 44.4h-102.6l25.7-44.4 25.6-44.4zM1741.5 865.1l63 63-63 63-63-63zM1397.5 865.2l63 62.9-63 63-63-63zM1901.7 809.7v-46h46v46zM1901.7 763.7v-46h46v46zM1384.4 577l63-63 62.8 63-62.9 62.9zM459.8 564.2 449.5 514l-10.3-50.2 48.6 16.1 48.7 16.2-38.3 34.1-38.4 34zM21.4 809.7v-46h46v46z"
      />
      <path
        fill="#231f20"
        d="M21.4 763.8v-46h46v46zM67.4 763.7v-46h46v46zM170.2 884.4l44.4-25.6 44.4-25.7v102.6l-44.4-25.6-44.4-25.7zM0 554.4l44.4-25.6 44.4-25.6v102.5l-44.4-25.6L0 554.4zM316 717.7l62.9-63 62.9 63-63 63z"
      />
    </svg>
  );
}
