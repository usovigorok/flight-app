import React, { useState, useEffect } from 'react';
import './app.scss';
import SearchForm from '../searchForm/';
import Item from '../item'

function App() {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    const getData = async () => {
      let response = await fetch(`https://raw.githubusercontent.com/ocebeki/flightData/master/data.json`);
      let data = await response.json()
      setData(data)
    }
    getData()
  }, [])

  return (
    <div className="app">
      FR1142
      BR1142
      BL1042
      W62284
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
