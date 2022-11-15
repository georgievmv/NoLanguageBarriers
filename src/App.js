import React, { useEffect, useState } from "react";
import "./App.css";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WhatWeDo from "./pages/WhatWeDo";
import Languages from "./pages/Languages";

function App() {
  const [showArrow, setShowArrow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      });
    });
    observer.observe(document.querySelector("#getInTouch"));
  }, []);
  const upIcon = (
    <a href="#home">
      <FontAwesomeIcon className="toTheTop" icon={faUpLong}></FontAwesomeIcon>
    </a>
  );

  return (
    <div className="App">
      {showArrow && upIcon}
      <Home />
      <GetInTouch />
      <WhatWeDo />
      <Languages />
    </div>
  );
}

export default App;
