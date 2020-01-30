import React from 'react';
import Clock from '../../assets/img/clock.png';



const ItemMore = ({ departure, arrival, status, flight, isDeleyed, durationFlight, formatDate, formateTime }) => {

  return (
    <div className="item__more-info-wrapper">
      <div className="item__more-info-row">
        <p className="item__more-info-flight-nr">{flight.company} {flight.number}</p>
        <p className={isDeleyed ? "item__more-info-flight-status red" : "item__more-info-flight-status"}>Status: {status} </p>
      </div>
      <div className="item__more-info-row item__more-info-row-middle">
        <div className="item__more-info-left">
          <div className="item__more-info-bar"></div>
        </div>
        <div className="item__more-info-right">
          <div className="item__more-info-row">
            <span className={isDeleyed ? "item__more-info-time item__more-info-time--delayed " : "item__more-info-time"}>
              {formateTime(departure.scheduledDepartureTime)}
            </span>
            {isDeleyed && <span className="item__more-info-delayed">{formateTime(departure.expectedDepartureTime)}</span>}
            <span className="item__more-info-airport-code">{departure.airportCode}</span>
            <span className="item__more-info-airport">{departure.airport} </span>
            <span>Terminal: {departure.terminal}</span>
          </div>
          <div className="item__more-info-row">
            <div className="item__more-info-time-icon-wrapper">
              <img className="item__more-info-clock" src={Clock} alt="clock" />
              <span className="item__more-info-duration">{durationFlight(departure.expectedDepartureTime, arrival.expectedArrivalTime)}</span>
            </div>
          </div>
          <div className="item__more-info-row">
            <span className={isDeleyed ? "item__more-info-time item__more-info-time--delayed " : "item__more-info-time"}>
              {formateTime(arrival.scheduledArrivalTime)}
            </span>
            {isDeleyed && <span className="item__more-info-delayed">{formateTime(arrival.expectedArrivalTime)}</span>}
            <span className="item__more-info-airport-code">{arrival.airportCode}</span>
            <span className="item__more-info-airport">{arrival.airport} </span>
            <span>Terminal: {arrival.terminal}</span>
          </div>
        </div>
      </div>
      <div className="item__more-info-row">
        <span>Arrives: {formatDate(arrival.scheduledArrivalTime, arrival.expectedArrivalTime)} | {durationFlight(departure.scheduledDepartureTime, arrival.scheduledArrivalTime)}</span>
      </div>
    </div>
  )
}

export default ItemMore