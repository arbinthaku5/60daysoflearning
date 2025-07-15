import React, { useState } from "react";

function InfoToggle() {
  const [show, setShow] = useState(false);

  const toggleInfo = () => {
    setShow((prev) => !prev);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Conditional Rendering Example</h2>

      <button onClick={toggleInfo}>
        {show ? "Hide Info" : "Show Info"}
      </button>

      {show ? (
        <div style={{ marginTop: "10px" }}>
          <p>Name: Arbin</p>
          <p>Location: Bhaktapur</p>
          <p>Learning: React</p>
        </div>
      ) : (
        <p style={{ marginTop: "10px", color: "gray" }}>Info is hidden.</p>
      )}
    </div>
  );
}

export default InfoToggle;
