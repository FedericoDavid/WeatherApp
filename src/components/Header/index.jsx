import React from 'react';

import Actions from './Actions';
import DefaultCitiesButtons from './DefaultCitiesButtons';

const Header = ({ units, setUnits, setQuery }) => (
  <>
    <DefaultCitiesButtons setQuery={setQuery} />
    <Actions setQuery={setQuery} units={units} setUnits={setUnits} />
  </>
);

export default Header;
