// import logo from './logo.svg';
// import './App.css';
// import Vijay from './comp/Viji';



// function App() {
//   return (
    
//     <Vijay/>
//   )
// }


// export default App;


// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a9a7fa9c26b538a72001482662caf831';

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
      );
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } else {
        setError('City not found. Please try again.');
        setWeatherData(null);
      }
    } catch (error) {
      setError('Error fetching data. Please try again later.');
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>React Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleChange}
        />
        <button type="submit">Get Weather</button>
      </form>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
