// File: CheckApp.jsx
import React from "react";

const CheckApp = () => {
  const [status, setStatus] = React.useState("Checking...");

  React.useEffect(() => {
    // Simulate a check (like fetching data or just a test)
    setTimeout(() => {
      setStatus("React app is running ✅");
    }, 1000);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{status}</h1>
    </div>
  );
};

export default CheckApp;
