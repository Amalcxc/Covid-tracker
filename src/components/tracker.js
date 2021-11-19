import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchTacker, setRegions } from '../Redux/tracker/tracker';
import WorldMap from '../assets/worldmap.png';

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
    <div>
      <div className="d-flex flex-column justify-content-center align-items-start img-class">
        <h1 className="header">Covid Tracker</h1>
        <img src={WorldMap} alt="logo" className="logo col-4 opacity-25" data-testid="img" style={{ width: '67%' }} />
      </div>
      <div className="row m-0 p-0">
      {
        trackerStore.map((countries) => (
        <div key={countries.id} className="col-sm-6 col-md-6 col-lg-6 button-class">
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

export default Tacker;
