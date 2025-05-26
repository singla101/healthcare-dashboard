import React, { useState } from "react";
import "./app.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardOverview from "./components/DashboardOverview";
import CalendarView from "./components/CalendarView";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth <= 900);

  const toggleSidebar = () => {
    console.log("Toggling sidebar");
    setIsSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="container">
      <div className="header">
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <div className="main">
        <Sidebar isSidebarOpen={isSidebarOpen} onClose={closeSidebar} />
        <div className="dashboard">
          <div className="card">
            <DashboardOverview />
          </div>
          <div className="card" style={{ backgroundColor: "#f7fafd" }}>
            <CalendarView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
