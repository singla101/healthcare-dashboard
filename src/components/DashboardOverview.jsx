import React from "react";
import styles from "../styles/DashboardOverview.module.css";
import anatomy from "../assets/anatomy-body.png";
import Activity from "../assets/Activity.png";
import slider from "../assets/slider.png";
import { ArrowRight, ChevronDown, ZoomIn } from "lucide-react";
import { statusIndicators } from "../data/anatomicalHealthStatusIndicators";
const DashboardOverview = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>Dashboard</h2>
        <div className={styles.weekContainer}>
          <p className={styles.para}>This Week</p>
          <ChevronDown className={styles.downIcon} />
        </div>
      </div>
      <div className={styles.container}>
        <div className={`${styles.anatomyViewContainer}`}>
          <div className={`${styles.card} ${styles.anatomyBody}`}>
            <div className={styles.iconContainer}>
              <ZoomIn className={styles.zoomInIcon} />
            </div>
            <img src={anatomy} alt="Anatomy" className={styles.anatomyImage} />
            <img src={slider} alt="slider" className={styles.sliderImage} />
          </div>
          <div className={` ${styles.report}`}>
            {statusIndicators.map((indicator, index) => (
              <div className={styles.card}>
                <div className={styles.organContainer}>
                  <img
                    src={indicator.Icon}
                    alt={indicator.name}
                    className={styles.indicatorIcons}
                  />
                  <p className={styles.indicatorName}>{indicator.name}</p>
                </div>
                <p className={styles.dateStyle}>Date: {indicator.Date}</p>
                <div className={styles.sliderContainer}>
                  <div
                    className={styles.slider}
                    style={{ backgroundColor: indicator.color }}
                  ></div>
                </div>
              </div>
            ))}
            <div className={styles.detailsContainer}>
              <p className={styles.para}>Details</p>
              <ArrowRight className={styles.downIcon} />
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.headerContainer}>
            <h4 className={styles.header}>Activity</h4>
            <p className={styles.dateStyle}>3 appointments on this week</p>
          </div>
          <img src={Activity} alt="Activity" className={styles.activityImage} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DashboardOverview;
