import Calendar from "react-calendar";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.css";

function AdoptionCalendar() {
  const [value, onChange] = useState(new Date());
  const dummyAdoptionDay = [
    {
      date: new Date(2024, 0, 10), // Use JavaScript Date object for comparison
      event: "Generation HK final day",
      location: "NT",
    },
    {
      date: new Date(2024, 0, 11),
      event: "FEWD9 Happy day",
      location: "NT",
    },
    {
      date: new Date(2024, 0, 15),
      event: "FEWD9 adoption day",
      location: "NT",
    },
    {
      date: new Date(2024, 1, 14),
      event: "Spend a lovely V-day with your pets",
      location: "HK Island",
    },
    {
      date: new Date(2024, 2, 9),
      event: "Happy March",
      location: "Kowloon",
    },
    {
      date: new Date(2024, 3, 17),
      event: "Happy B-day",
      location: "Kowloon",
    },
  ];
  const filteredEvents = dummyAdoptionDay.filter(
    (event) =>
      event.date.getMonth() === value.getMonth() ||
      event.date.getMonth() === value.getMonth() + 1
  );

  const tileContent = ({ date }) => {
    const formattedDate = date.toDateString();
    const matchingEvents = dummyAdoptionDay.filter(
      (event) => event.date.toDateString() === formattedDate
    );
    return matchingEvents.length > 0 ? <p className={styles["dot"]} /> : null;
  };

  return (
    <div className={styles["calendar-section"]}>
      <div className={styles["calendarTitle"]}>
        唔想網上交友？可以來偶遇一下主子🐈
      </div>
      <div className={styles["calanderPlusDetailsWrapper"]}>
        <div className={styles["calanderPlusDetails"]}>
          <Calendar
            onChange={onChange}
            value={value}
            tileContent={tileContent}
            tileClassName="custom-tile"
            className={styles["react-calendar"]}
          />
        </div>
        <div>
          <div className={styles["calendarDetailsWrapper"]}>
            <div className={styles["calendar-month"]}>
              {`${value.getMonth() + 1}月至${value.getMonth() + 2}月時間表`}
            </div>
            {filteredEvents.map((el, index) => (
              <div key={index} className={styles["calendarDetails"]}>
                <span className={styles["eventLocation"]}>
                  Event: {el.event} | Location: {el.location}
                </span>
                <p className={styles["eventDate"]}>
                  Date: {el.date.toDateString()}{" "}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdoptionCalendar;
