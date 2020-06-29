import React from "react";
import "./ReloadButton.css";

function ReloadButton() {
  return (
    <button className="btn" onClick={() => window.location.reload(false)}>
      Try Again
    </button>
  );
}

export default ReloadButton;
