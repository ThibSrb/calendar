import { DAYS } from "@utils/date"
import './Day.css'

export default function Day({ date, events = [] }) {

    date.setHours(0, 0, 0, 0);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    let name = DAYS[date.getDay()].toUpperCase().substring(0, 3) + '.'
    let number = date.getDate();

    // console.log(`date: ${date}; today:${today}`)

    return (
        <div className="dayColumn">
            <div className={`title${(date.getTime() == today.getTime()) ? ' current' : ""}`}>
                <div className={"wrapper"}>
                    <p>{name}</p>
                    <p>{number}</p>
                </div>
            </div>
            <div className="events"></div>
        </div>
    )
}