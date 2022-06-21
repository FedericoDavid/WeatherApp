import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';

import getCurrentLocation from '../../utils/getCurrentLocation';

const Actions = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState('');

  const onUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const onSearchClick = () => {
    if (city.length > 0) setQuery({ q: city });
  };

  const onLocationClick = () => {
    if (navigator.geolocation) {
      toast.info('Fetching current location');

      getCurrentLocation({ setQuery });

      toast.success('Success!');
    }
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type='text'
          placeholder='Search city'
          className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize'
        />
        <UilSearch
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={onSearchClick}
        />
        <UilLocationPoint
          size={25}
          className='text-white cursor-pointer transition ease-out hover:scale-125'
          onClick={onLocationClick}
        />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button
          name='metric'
          className='text-xl text-white font-light transition ease-out hover:scale-125'
          onClick={onUnitsChange}
        >
          °C
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button
          name='imperial'
          className='text-xl text-white font-light transition ease-out hover:scale-125'
          onClick={onUnitsChange}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Actions;
