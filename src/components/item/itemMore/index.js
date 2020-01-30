import React from 'react';
import Clock from '../../../assets/img/clock.svg';

const ItemMore = ({ departure, arrival, status, flight, isDeleyed, durationFlight, formatDate, formateTime }) => {

  return (
    <div className="item-more">
      <div className="item-more__wrapper">
        <div className="item-more__row">
          <p className="item-more__flight-nr">{flight.company} {flight.number}</p>
          <p className={isDeleyed ? "item-more__flight-status item-more__flight-status--red" : "item-more__flight-status"}>Status: {status} </p>
        </div>
        <div className="item-more__row item-more__row-middle">
          <div className="item-more__left">
            <div className="item-more__bar"></div>
          </div>
          <div className="item-more__right">
            <div className="item-more__row">
              <span className={isDeleyed ? "item-more__time item-more__time--delayed " : "item-more__time"}>
                {formateTime(departure.scheduledDepartureTime)}
              </span>
              {isDeleyed && <span className="item-more__delayed">{formateTime(departure.expectedDepartureTime)}</span>}
              <span className="item-more__airport-code">{departure.airportCode} </span>
              <span className="item-more__airport">{departure.airport} |</span>
              <span>Terminal: {departure.terminal}</span>
            </div>
            <div className="item-more__row">
              <div className="item-more__time-icon-wrapper">
                <img className="item-more__clock" src={Clock} alt="clock" />
                <span className="item-more__duration">{durationFlight(departure.expectedDepartureTime, arrival.expectedArrivalTime)}</span>
              </div>
            </div>
            <div className="item-more__row">
              <span className={isDeleyed ? "item-more__time item-more__time--delayed " : "item-more__time"}>
                {formateTime(arrival.scheduledArrivalTime)}
              </span>
              {isDeleyed && <span className="item-more__delayed">{formateTime(arrival.expectedArrivalTime)}</span>}
              <span className="item-more__airport-code">{arrival.airportCode}</span>
              <span className="item-more__airport">{arrival.airport} |</span>
              <span className="item-more__terminal">Terminal: {arrival.terminal} |</span>
              <span>Baggage belt: {arrival.BaggageBelt} </span>
            </div>
          </div>
        </div>
        <div className="item-more__row">
          <span>Arrives: {formatDate(arrival.scheduledArrivalTime, arrival.expectedArrivalTime)} | {formateTime(arrival.expectedArrivalTime)}</span>
        </div>
      </div>
    </div>
  )
}

export default ItemMore;