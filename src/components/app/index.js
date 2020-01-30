import React, { useState } from 'react';
import './app.scss';
import SearchForm from '../searchForm/';
import Item from '../item'
import Data from '../../data';

function App() {
  const [data] = useState(Data);
  const [flight, setFlight] = useState('')
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const flight = data.filter(item => item.flight.number === search)
    setFlight(flight)
  }

  return (
    <div className="app">
      FR1142
      BR1142
      PL1142

      <SearchForm onChange={onChange} onSubmit={onSubmit} search={search} />
      <div className="app__result">
        <div className="app__result-wrapper">
          {flight && flight.map(item => {
            return <Item key={item.flight.number}  {...item} />
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
