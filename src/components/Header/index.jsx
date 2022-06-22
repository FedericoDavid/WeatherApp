import React from 'react';

import ActionsButtons from './ActionsButtons';
import DefaultCitiesButtons from './DefaultCitiesButtons';

const Header = ({ units, setUnits, setQuery }) => (
  <>
    <DefaultCitiesButtons setQuery={setQuery} />
    <ActionsButtons setQuery={setQuery} units={units} setUnits={setUnits} />
  </>
);

export default Header;
