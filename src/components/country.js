/* eslint-disable camelcase */
// import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    id, name, date, today_deaths, today_confirmed, today_recovered, yesterday_deaths, regions,
  } = props;
  return (
    <div key={id} className="row m-4">
      <div className="col-9">
        <h5> name {name}</h5>
        <span> date {date}</span>
        <span> today_deaths {today_deaths}</span>
        <span> today_confirmed{today_confirmed}</span>
        <span> today_recovered {today_recovered}</span>
        <span> yesterday_deaths{yesterday_deaths}</span>
        {
          regions.map((region) => <span> regions {region.name}</span>)
        }
      </div>

    </div>
  );
};

Country.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  today_deaths: PropTypes.number.isRequired,
  today_confirmed: PropTypes.number.isRequired,
  today_recovered: PropTypes.number.isRequired,
  yesterday_deaths: PropTypes.number.isRequired,
  regions: PropTypes.array,
};

export default Country;