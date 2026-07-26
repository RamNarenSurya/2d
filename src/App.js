import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function WelcomeMessage() {
  return <h2>Welcome to the Conditional Rendering Example!</h2>;
}

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Conditional Rendering</h1>

      <button onClick={toggleMessage}>
        {showMessage ? "Hide" : "Show"} Message
      </button>

      {showMessage && <WelcomeMessage />}
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);

export default App;