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
      <div>
        <img src={WorldMap} alt="logo" className="logo col-4" />
      </div>
      {
        trackerStore.map((countries) => (
        <button
        onClick={() => {
          dispatch(setRegions(countries.id));
          navigate('/Details');
        }}
        type="button"
        to="/Details"
        key={countries.id}><h1>{countries.name}</h1>
        <span>{countries.today_confirmed}</span></button>))
      }
    </div>
  );
};

export default Tacker;
