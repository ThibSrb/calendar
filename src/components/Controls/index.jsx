import { MONTHS, weekNumber } from "@utils/date"
import './Controls.css'

export default function Controls({ date, previousSpan = () => { }, nextSpan = () => { } }) {

    let month = MONTHS[date.getMonth()]
    let year = date.getFullYear()
    let week = weekNumber(date)

    return (
        <div className="calendarControls">
            <div className="info">
                <h2 id="month">{month} {year}</h2>
                <h2 id="week">week {week}</h2>
            </div>
            <button onClick={previousSpan}>◀</button>
            <button onClick={nextSpan}>▶</button>
        </div>
    )
}