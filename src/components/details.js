import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTacker } from '../Redux/tracker/tracker';
import Country from './country';

const Details = () => {
  const dispatch = useDispatch();
  const trackerStore = useSelector((store) => Object.values(store.trackerReducer.tracker));

  useEffect(() => {
    if (!trackerStore.length) {
      fetchTacker(dispatch);
    }
  }, []);
  return (
    <div className="container">
      {
        trackerStore.map((countries) => (
          <Country
          key={countries.id}
          id={countries.id}
          name={countries.name}
          date={countries.date}
          today_deaths={countries.today_deaths}
          today_confirmed={countries.today_confirmed}
          today_recovered={countries.today_recovered}
          yesterday_deaths={countries.yesterday_deaths}
          regions={countries.regions}
          />
        ))}
    </div>
  );
};

export default Details;