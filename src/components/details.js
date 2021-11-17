const Detail = () => {
  const cities = JSON.parse(localStorage.getItem('currentRegions'));
  return (
    <div>
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex flex-column justify-content-center align-items-end me-3">
              <h1 className="text-end">{cities.name}</h1>
              <span className="text-end">{`Total death: ${cities.today_deaths}`}</span>
            </div>
          </div>
        </div>
        <div>
          {cities.regions.map((city) => (
            <div className="d-flex justify-content-between align-items-center ps-3" key={city.id}>
              <h5>{city.name}</h5>
              <div className="d-flex  align-items-center justify-content-center text-end my-3 me-2">
                <span className="me-3">{`${city.today_deaths} dead`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Detail;