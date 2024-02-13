import React, { useEffect, useRef, useState } from "react";
import "./jojaccursor.css";

function Jojaccursor() {
  const trailElementsRef = useRef([]);
  const [mouse, setMouse] = useState({ x: 100, y: 100 });
  const drag = [0.35, 0.3, 0.25, 0.2];
  useEffect(() => {
    console.log(trailElementsRef.current);
  }, [trailElementsRef]);
  useEffect(() => {
    const trailElements = trailElementsRef.current;

    function updateMouseLocations(e) {
      setMouse({ x: e.pageX, y: e.pageY });
    }

    function trailTheElements() {
      for (let x = 0; x < trailElements.length; x++) {
        trailElements[x] = loop(trailElements[x], x);
      }
      requestAnimationFrame(trailTheElements);
    }

    function loop(trailElement, i) {
      // let x, y;
      // if (trailElement) {
      //   x = parseFloat(trailElement.style.left);
      //   y = parseFloat(trailElement.style.top);
      // } else {
      //   x = 0;
      //   y = 0;
      // }
      let x = parseFloat(trailElement.style.left) || 0;
      let y = parseFloat(trailElement.style.top) || 0;

      let following_x, following_y;
      if (typeof trailElements[i - 1] !== "undefined") {
        following_x = parseFloat(trailElements[i - 1].style.left);
        following_y = parseFloat(trailElements[i - 1].style.top);
      } else {
        following_x = mouse.x;
        following_y = mouse.y;
      }

      let x_diff = following_x - x;
      let y_diff = following_y - y;

      const distance_behind = i === 0 ? 20 : 10;

      x_diff = x_diff > 0 ? x_diff - distance_behind : x_diff + distance_behind;
      y_diff = y_diff > 0 ? y_diff - distance_behind : y_diff + distance_behind;

      const x_move = x_diff * drag[i];
      const y_move = y_diff * drag[i];

      x += x_move;
      y += y_move;

      trailElement.style.left = x + "px";
      trailElement.style.top = y + "px";

      return trailElement;
    }

    document.addEventListener("mousemove", updateMouseLocations);
    trailTheElements();

    return () => {
      document.removeEventListener("mousemove", updateMouseLocations);
    };
  }, [mouse]);

  console.log(trailElementsRef.current);

  return (
    <div className="trailContainer">
      <div
        className="trailElement cursor-trail"
        ref={(el) => (trailElementsRef.current[0] = el)}
        id="trail_0"
      ></div>
      <div
        className="trailElement cursor-trail"
        ref={(el) => (trailElementsRef.current[1] = el)}
        id="trail_1"
      ></div>
      <div
        className="trailElement cursor-trail"
        ref={(el) => (trailElementsRef.current[2] = el)}
        id="trail_2"
      ></div>
      <div
        className="trailElement cursor-trail"
        ref={(el) => (trailElementsRef.current[3] = el)}
        id="trail_3"
      ></div>
    </div>
  );
}

export default Jojaccursor;
