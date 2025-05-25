import React from "react";
import styles from "../styles/Sidebar.module.css";
import { generalData, toolsData } from "../data/navigationLinks";
import * as Icons from "lucide-react";

const Sidebar = ({ isSidebarOpen, onClose }) => {
  const isMobile = window.innerWidth <= 900;
  if (isMobile && !isSidebarOpen) return null;

  return (
    <>
      {isMobile && <div className={styles.overlay} onClick={onClose}></div>}
      <div
        className={`${styles.container} ${isSidebarOpen ? styles.open : ""}`}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <Icons.X />
        </button>
        <p className={styles.headers}>General</p>
        {generalData.map((item, index) => {
          const LucideIcon = Icons[item.icon];
          return (
            <div key={index} className={styles.items}>
              <span>
                <LucideIcon
                  className={`${styles.icon} ${
                    item.highlight ? styles.highlight : ""
                  }`}
                />
              </span>
              <span
                className={`${styles.name} ${
                  item.highlight ? styles.highlight : ""
                }`}
              >
                {item.name}
              </span>
            </div>
          );
        })}
        <p className={styles.headers}>Tools</p>
        {toolsData.map((item, index) => {
          const LucideIcon = Icons[item.icon];
          return (
            <div key={index} className={styles.items}>
              <span>
                <LucideIcon
                  className={`${styles.icon} ${
                    item.highlight ? styles.highlight : ""
                  }`}
                />
              </span>
              <span
                className={`${styles.name} ${
                  item.highlight ? styles.highlight : ""
                }`}
              >
                {item.name}
              </span>
            </div>
          );
        })}
        <div className={styles.items}>
          <span>
            <Icons.Settings className={styles.icon} />
          </span>
          <span className={styles.name}>Settings</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
