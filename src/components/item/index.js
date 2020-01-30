import React, { useState, useEffect } from 'react';
import Btn from '../../assets/img/button.png';
import ItemMore from '../itemMore'



const Item = ({ departure, arrival, status, flight }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isDeleyed, setIsisDeleyed] = useState(false)

  const formatDate = (scheduled, expected) => {
    const scheduletDateToFormat = new Date(scheduled);
    const expextedDateToFormat = new Date(expected);
    let day;
    let year;
    let month;

    if (scheduletDateToFormat === expextedDateToFormat) {
      day = scheduletDateToFormat.getDate();
      year = scheduletDateToFormat.getFullYear();
      month = scheduletDateToFormat.toLocaleString('de-de', { month: '2-digit' });
    } else {
      day = expextedDateToFormat.getDate();
      year = expextedDateToFormat.getFullYear();
      month = expextedDateToFormat.toLocaleString('de-de', { month: '2-digit' });
    }

    return `${day}/${month}/${year}`;
  }

  const formateTime = (date) => {
    const dateToFormat = new Date(date);
    let hour = dateToFormat.getHours();
    hour = ("0" + hour).slice(-2);
    let minutes = dateToFormat.getMinutes();
    minutes = ("0" + minutes).slice(-2);

    return `${hour}:${minutes}`;
  }

  const delay = (time1, time2) => {
    let diff = new Date(time2).getTime() - new Date(time1).getTime();

    if (diff > 0) {
      setIsisDeleyed(true)
      return diff
    }
  }

  const delayTime = (time1, time2) => {
    let diff = new Date(time2).getTime() - new Date(time1).getTime();
    let minutes = parseInt((diff / (1000 * 60)) % 60)
    let hours = parseInt((diff / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    if (diff > 0) {
      return `${hours}h ${minutes}`
    }
  }

  const durationFlight = (time1, time2) => {
    let diff = new Date(time2).getTime() - new Date(time1).getTime();
    let minutes = parseInt((diff / (1000 * 60)) % 60)
    let hours = parseInt((diff / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;

    return `${hours}h ${minutes}`
  }

  const openItem = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    delay(departure.scheduledDepartureTime, departure.expectedDepartureTime)
  })

  return (
    <div className="item">
      <div className="item__wrapper">
        <p className="item__date">Outbound:{formatDate(departure.scheduledDepartureTime, departure.expectedDepartureTime)}</p>
        <div className="item__flight-wrapper">
          <div className="item__col-left item__col">
            <p className="item__company">{flight.company} {flight.number}</p>
          </div>
          <div className="item__col-middle item__col">
            <div className="item__departure">
              <span className="item__time bold">{formateTime(departure.scheduledDepartureTime)}</span>
              <span className="item__airport-code">{departure.airportCode}</span>
            </div>
            <div className="item__flight-duration-wrapper">
              <p className="item__flight-duration">{durationFlight(departure.scheduledDepartureTime, arrival.scheduledArrivalTime)}</p>
              <div className="item__flight-duration-bar-wrapper">
                <div className="item__flight-bar"></div>
                <span className="item__flight-icon">&#9992;</span>
              </div>
              {isDeleyed && <p>{delayTime(departure.scheduledDepartureTime, departure.expectedDepartureTime)}</p>}
            </div>
            <div className="item__arrive">
              <span className="item__time bold">{formateTime(arrival.scheduledArrivalTime)}</span>
              <span className="item__airport-code">{arrival.airportCode}</span>
            </div>
          </div>
          <div className="item__col-right item__col">
            <img src={Btn} alt="btn" className={isOpen ? "item__btn item__btn--up" : "item__btn"} onClick={openItem} />
          </div>
        </div>
        <div className={isOpen ? "item__more-info item__more-info--open" : "item__more-info"}>
          <ItemMore isDeleyed={isDeleyed} departure={departure} arrival={arrival} status={status} flight={flight} formatDate={formatDate} formateTime={formateTime} durationFlight={durationFlight} />
        </div>
      </div>
    </div>
  )
}

export default Item