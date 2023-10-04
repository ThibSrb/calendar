import './Ruler.css'

export default function Ruler() {
    let marks = [...Array(24).keys()].map((hour) => {
        return <div key={hour} className='rulerMark'>{`${hour}`.padStart(2, '0')}:00</div>
    })

    return (
        <div className="ruler">
            <div className="rulerMark blinder"></div>
            {marks}
        </div>
    )
}