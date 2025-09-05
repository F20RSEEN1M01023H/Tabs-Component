import React, { useState } from "react";

const BasicTab = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-bold text-slate-800 font-mono mb-11">
        Tabs Component
      </h1>
      <div className=" bg-slate-800 rounded-lg backdrop-blur-lg shadow-2xl p-10">
        <div className=" flex gap-2 w-full max-w-md justify-around mb-4">
          <button
            className={`flex-1  rounded-lg px-3 py-1
                    ${
                      activeTab === "home"
                        ? "text-white bg-blue-500 font-bold"
                        : "bg-gray-200"
                    }`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </button>
          <button
            className={`flex-1 rounded-lg px-3 py-1
                    ${
                      activeTab === "about"
                        ? "text-white bg-blue-500 font-bold"
                        : "bg-gray-200"
                    }`}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={`flex-1 rounded-lg px-3 py-1
                    ${
                      activeTab === "contact"
                        ? "text-white bg-blue-500 font-bold "
                        : "bg-gray-200"
                    }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>
        <div className="text-white font-semibold bg-white/10 rounded-lg p-4 min-h-[100px]">
          {activeTab === "home" && <p>Home tab content.</p>}
          {activeTab === "about" && <p>About tab Content</p>}
          {activeTab === "contact" && <p>Contact tab content.</p>}
        </div>
      </div>
    </div>
  );
};

export default BasicTab;
