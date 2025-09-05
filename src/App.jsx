import React from "react";
import BasicTab from "./Compnonents/BasicTab";
import Tabs from "./Compnonents/Tabs";

const App = () => {
  const tabData = [
    { label: "Home", content: <p>🏠 Welcome to the Home tab!</p> },
    { label: "About", content: <p>ℹ️ Learn more in the About tab.</p> },
    { label: "Contact", content: <p>📞 Contact us anytime!</p> },
  ];
  return (
    <div>
      <BasicTab />
      <Tabs tabs={tabData} />
    </div>
  );
};

export default App;
