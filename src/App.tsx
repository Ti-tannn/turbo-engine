// App.tsx
import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [hearts, setHearts] = useState<string[]>([]);

  const handleFillPageWithHearts = () => {
    const newHearts: string[] = [];
    for (let i = 0; i < 100; i++) {
      newHearts.push(
        `<span class="heart" style="left:${Math.random() * 100}vw; top:${Math.random() * 100}vh;">&hearts;</span>`,
      );
    }
    setHearts(newHearts);
  };

  const handleWhyClick = () => {
    alert("You deserve it!");
  };

  return (
    <div className="container">
      <button className="heartButton" onClick={handleFillPageWithHearts}>
        &lt;3
      </button>
      {hearts.map((heart, index) => (
        <div key={index} dangerouslySetInnerHTML={{ __html: heart }} />
      ))}
      {hearts.length > 0 && (
        <button className="whyButton" onClick={handleWhyClick}>
          why
        </button>
      )}
    </div>
  );
};

export default App;
