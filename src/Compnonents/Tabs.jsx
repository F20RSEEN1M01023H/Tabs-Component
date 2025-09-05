import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold text-slate-800 font-mono mb-10">
        Tabs Component
      </h1>
      <div className="bg-slate-950 p-8 rounded-lg backdrop-blur-3xl shadow-2xl">
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              className={` flex-1 px-2 py-1 rounded-lg ${
                activeTab === tab.label
                  ? "text-white bg-blue-500 font-bold "
                  : "text-black bg-gray-400 font-medium"
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="text-white mt-5 bg-white/10 rounded-lg p-5 font-semibold min-h-[100px]">
          {tabs.map(
            (tab) =>
              activeTab === tab.label && (
                <div key={tab.label}>{tab.content}</div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
