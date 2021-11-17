import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTacker, setRegions } from '../Redux/tracker/tracker';
import WorldMap from '../assets/worldmap.jpeg';

const Tacker = () => {
  const dispatch = useDispatch();
  const trackerStore = useSelector((store) => Object.values(store.trackerReducer.tracker));
  useEffect(() => {
    if (!trackerStore.length) {
      fetchTacker(dispatch);
    }
  }, []);
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-start">
        <h1>World Covid cases</h1>
        <img src={WorldMap} alt="logo" className="logo col-4" />
      </div>
      {
        trackerStore.map((countries) => (
        <div className="button-grid " key={countries.id}>
        <button
        onClick={() => {
          dispatch(setRegions(countries.id));
          localStorage.setItem('currentRegions', JSON.stringify(countries));
          navigate('/Details');
        }}
        type="button"
        to="/Details"
        key={countries.id}>

        <div className="d-flex flex-column align-items-end justify-content-end text-end">
        <h1>{countries.name}</h1>
        <span>{countries.today_confirmed}</span>
        </div>
        </button></div>))
      }
    </div>
  );
};

export default Tacker;
