import React from 'react';
import WorldMap from '../assets/worldmap.png';

const Detail = () => {
  const cities = JSON.parse(localStorage.getItem('currentRegions'));
  return (
    <div data-testid="img2">
        <div className="d-flex justify-content-between">
          <div>
            <img className="opacity-25 ms-3" src={WorldMap} alt="map"/>
          </div>
          <div>
            <div className="m-3 c-white">
              <h1 className="text-end">{cities.name}</h1>
              <span className="text-end">{`Total death: ${cities.today_deaths}`}</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center ps-3 c-white isBlue mt-3">todays confirmed Cases: {cities.today_confirmed}</div>
        <div className="mt-1">
          {cities.regions.map((city) => (
            <div className="d-flex justify-content-between align-items-center ps-3 regions-class c-white" key={city.id}>
              <h5>{city.name}</h5>
              <div className="d-flex  align-items-center justify-content-center text-end my-3 me-2 c-white">
                <span className="me-3">{`${city.today_deaths} dead`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Detail;