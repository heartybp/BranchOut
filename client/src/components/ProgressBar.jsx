import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProgBar({ loading }) {
  const [filled, setFilled] = useState(0);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/home");
  };

  useEffect(() => {
    if (loading && filled < 100) {
      setTimeout(() => setFilled((prev) => (prev += 20)), 200);
    } else {
      setTimeout(() => {
        navigateHome();
      }, 500);
    }
  }, [filled]);

  return (
    <div className="w-full">
      <div
        className="rounded-2xl"
        style={{
          height: "100%",
          width: `${filled}%`,
          backgroundColor: "black",
          transition: "width 0.5s",
        }}
      >
        <span className="progressbarPercentage">{filled} %</span>
      </div>
    </div>
  );
}
