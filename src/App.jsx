import { useState, useRef } from 'react'
import useResize from '@hooks/useResize.js'
import Timetable from '@components/Timetable';
import CalendarControls from '@components/Controls';
import { DAY_DURATION } from '@utils/date';
import './App.css'

const MIN_COLUMN_WIDTH = 150;

function App() {

  const ref = useRef(null);

  let [length, setLength] = useState(1);
  let [date, setDate] = useState(new Date());


  useResize(ref, (width, height) => {
    let len = Math.min(Math.floor(width / MIN_COLUMN_WIDTH), 7)

    if (len != length) {
      setLength(len)
    }
  });

  const nextDate = () => {
    setDate(new Date(date.getTime() + length * DAY_DURATION))
  }

  const previousDate = () => {
    setDate(new Date(date.getTime() - length * DAY_DURATION))
  }

  if (length == 7 && date.getDay() != 1) {
    let diff = (1 - date.getDay()) * DAY_DURATION;
    setDate(new Date(date.getTime() + diff))
  }

  return (
    <div className='app' ref={ref}>
      <CalendarControls nextSpan={nextDate} previousSpan={previousDate} date={date} />
      <Timetable date={date} length={length} />
    </div>
  )
}

export default App
