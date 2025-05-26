import React from "react";
import styles from "../styles/CalendarView.module.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { calendarData } from "../data/CalendarData";
import { appointments } from "../data/appointments";
import {
  saturdaySchedule,
  thursdaySchedule,
} from "../data/upcomingAppointments";
const CalendarView = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <p className={styles.header}>October 2021 </p>
        <div className={styles.iconContainer}>
          <ArrowLeft className={styles.iconStyle} />
          <ArrowRight className={styles.iconStyle} />
        </div>
      </div>
      <div className={styles.calendarContainer}>
        {calendarData.map((day, index) => (
          <div
            className={`${styles.dayContainer} ${
              day.highlight ? styles.back : ""
            }`}
          >
            <p
              className={`${styles.text1} ${
                day.day == "Sun" ? styles.disabled : ""
              }`}
            >
              {day.day}
            </p>
            <p
              className={`${styles.text2} ${
                day.day == "Sun" ? styles.disabled : ""
              }`}
            >
              {day.date}
            </p>
            <p
              className={`${styles.text1} ${
                day.event1.appointed ? styles.highlight : ""
              } ${day.day == "Sun" ? styles.disabled : ""}`}
            >
              {day.event1.time}
            </p>
            <p
              className={`${styles.text1} ${
                day.event2.appointed ? styles.highlight : ""
              } ${day.day == "Sun" ? styles.disabled : ""}`}
            >
              {day.event2.time}
            </p>
            <p
              className={`${styles.text1} ${
                day.event3.appointed ? styles.highlight : ""
              } ${day.day == "Sun" ? styles.disabled : ""}`}
            >
              {day.event3.time}
            </p>
          </div>
        ))}
      </div>
      <div className={styles.appointmentsContainer}>
        {appointments.map((appointment, index) => (
          <div
            className={`${styles.appointmentCard} ${
              appointment.highlight ? styles.clicked : ""
            }`}
            key={index}
          >
            <div className={styles.organContainer}>
              <p className={styles.text}>{appointment.name}</p>
              <img
                src={appointment.icon}
                alt={appointment.name}
                className={styles.icon}
              />
            </div>
            <p className={styles.text}>{appointment.time}</p>
            <p className={styles.text}>{appointment.doctor}</p>
          </div>
        ))}
      </div>
      <p className={styles.header}>The Upcoming Schedule</p>
      <div className={styles.upcomingContainer}>
        <p className={styles.day}>on Thursday</p>
        <div className={styles.appointmentsContainer}>
          {thursdaySchedule.map((appointment, index) => (
            <div className={styles.appointmentCard} key={index}>
              <div className={styles.organContainer}>
                <p className={styles.text}>{appointment.name}</p>
                <img
                  src={appointment.icon}
                  alt={appointment.name}
                  className={styles.icon}
                />
              </div>
              <p className={styles.text}>{appointment.time}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.upcomingContainer}>
        <p className={styles.day}>on Saturday</p>
        <div className={styles.appointmentsContainer}>
          {saturdaySchedule.map((appointment, index) => (
            <div className={styles.appointmentCard} key={index}>
              <div className={styles.organContainer}>
                <p className={styles.text}>{appointment.name}</p>
                <img
                  src={appointment.icon}
                  alt={appointment.name}
                  className={styles.icon}
                />
              </div>
              <p className={styles.text}>{appointment.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarView;
