const getCurrentLocation = ({ setQuery }) =>
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    setQuery({ lat, lon });
  });

export default getCurrentLocation;
