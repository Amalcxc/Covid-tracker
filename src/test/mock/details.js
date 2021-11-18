const Detail = () => {
  const cities = {
    Afghanistan: {
      date: '2021-10-18',
      name: 'Afghanistan',
      id: 'Afghanistan',
      today_deaths: '1234',
      today_confirmed: '355',
    },

    Albania: {
      date: '2021-10-18',
      name: 'Albania',
      id: 'Albania',
      today_deaths: '1234',
      today_confirmed: '355',
    },

    Algeria: {
      date: '2021-10-18',
      name: 'Algeria',
      id: 'Algeria',
      today_deaths: '1234',
      today_confirmed: '355',
    }
  }

  const region = [
      {
        Albania: {
          date: '2021-10-18',
          name: 'Albania',
          id: 'Albania',
          today_deaths: '1234',
          today_confirmed: '355',

        },
        Albania: {
          date: '2021-10-18',
          name: 'Albania',
          id: 'Albania',
          today_deaths: '1234',
          today_confirmed: '355',

        }
      }
  ]

  return (
    <div data-testid="img2">
        <div className="d-flex justify-content-between">
          <div>
            <div className="m-3 c-white">
              <h1 className="text-end">{cities.name}</h1>
              <span className="text-end">{`Total death: ${cities.today_deaths}`}</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center ps-3 c-white isBlue mt-3">today's confirmed Cases: {cities.today_confirmed}</div>
        <div className="mt-1">
          {region.map((city) => (
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