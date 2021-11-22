import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTacker, setRegions } from '../Redux/tracker/tracker.js';
import WorldMap from '../assets/worldmap.png';

const Tracker = () => {
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState('');
  const trackerStore = useSelector((store) => Object.values(store.trackerReducer.tracker));
  useEffect(() => {
    if (!trackerStore.length) {
      fetchTacker(dispatch);
    }
  }, []);
  const navigate = useNavigate();
  let alternate = true;
  let nextLightColor = 0;
  const Colors = (index) => {
    if (index === nextLightColor && alternate) {
      alternate = false;
      nextLightColor = index + 3;
      return 'isBlue grid-item-navlink';
    }
    if (index === nextLightColor && alternate === false) {
      alternate = true;
      nextLightColor = index + 1;
      return 'isBlue grid-item-navlink';
    }

    return 'grid-item-navlink dark-background';
  };
  return (
    <div>
      <div className="d-flex flex-column justify-content-center align-items-start img-class">
        <h1 className="header">Covid Tracker</h1>
        <img src={WorldMap} alt="logo" className="logo col-4 opacity-25" data-testid="img" style={{ width: '67%' }} />
      </div>
      <input type="text" className="form-control delete-shadow" placeholder="Search by country name" onChange={(e) => {
        setSearchItem(e.target.value);
      }} />
      <div className="row m-0 p-0">
      {
        trackerStore.filter((countries) => {
          if (searchItem === '') {
            return countries;
          } if (countries.name.toLowerCase().includes(searchItem.toLowerCase())) {
            return countries;
          }
          return false;
        }).map((countries, index) => (
        <div key={countries.id} className={`"col-sm-6 col-md-6 col-lg-6" ${Colors(index)}`}>
        <button
        onClick={() => {
          dispatch(setRegions(countries.id));
          localStorage.setItem('currentRegions', JSON.stringify(countries));
          navigate('/Details');
        }}
        type="button"
        to="/Details"
        key={countries.id}
        className="m-1 p-4 btn"
        >

        <h3 className="card-title">{countries.name}</h3>
        <span className="card-text">{countries.today_confirmed}</span>

        </button></div>))
      }
      </div>
    </div>
  );
};

export default Tracker;
