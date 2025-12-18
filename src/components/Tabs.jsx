import React from "react";

const Tabs = () => {
  const tab = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container ">
      {tab.map((tab, tabIndex) => (
        <button className="tab-button" key={tabIndex}>
          <h4>
            {tab} <span>(0)</span>
          </h4>
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
