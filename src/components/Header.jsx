import React from "react";
import styles from "../styles/Header.module.css";
import { Bell, Menu, Plus, Search, Sidebar, User } from "lucide-react";
const Header = ({ toggleSidebar }) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <span className={styles.logo1}>Health</span>
        <span className={styles.logo2}>care.</span>
      </div>

      <div
        className={`${styles.sidebarContainer} ${styles.clickable}`}
        onClick={toggleSidebar}
      >
        <Menu className={styles.menuIcon} />
      </div>

      <div className={styles.searchBoxContainer}>
        <Search className={styles.searchIcon} />
        <input type="text" placeholder="Search" className={styles.input} />
        <Bell className={styles.bellIcon} />
      </div>
      <div className={styles.profileContainer}>
        <span className={styles.profile}>
          <User className={styles.userIcon} />
        </span>
        <span className={styles.addButton}>
          <Plus className={styles.plusIcon} />
        </span>
      </div>
    </div>
  );
};

export default Header;
