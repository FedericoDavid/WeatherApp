import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Header from './components/Header';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';

import getFormattedWeatherData from './services/weatherService';
import getCurrentLocation from './utils/getCurrentLocation';

export const App = () => {
  const [query, setQuery] = useState({});
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) getCurrentLocation({ setQuery });
  }, []);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(`Successfully loaded for ${data.name}, ${data.country}`);

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  const getBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700';

    const threshold = units === 'metric' ? 20 : 60;

    if (weather.temp <= threshold) return 'from-cyan-700 to-blue-700';

    return 'from-yellow-700 to-orange-700';
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${getBackground()}`}
    >
      <Header setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title='hourly forecast' items={weather.hourly} />
          <Forecast title='daily forecast' items={weather.daily} />
        </div>
      )}

      <ToastContainer position='bottom-right' autoClose={5000} theme='colored' newestOnTop={true} />
    </div>
  );
};

export default App;
