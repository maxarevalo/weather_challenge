import { useEffect, useState } from 'react';

interface ICoordinates {
  latitude: number ;
  longitude: number ;
  error: boolean ;
}

const useGeo = () => {
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    latitude: 0,
    longitude: 0,
    error: false
  });

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(showPosition, showError);
  }, [coordinates.error]);

  const showPosition = (position: any) => {
    setCoordinates({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      error: false
    });
  };
  const showError = (error: any) => {
    if (error.code)
      setCoordinates({
        latitude: 0,
        longitude: 0,
        error: true
      });
  };

  return coordinates;
};

export default useGeo;
