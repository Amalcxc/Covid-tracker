/* eslint-disable */
import axios from 'axios';

const SET_TRACKER = 'covid-tracker/tracker/SET-TRACKER';
const SET_REGIONS = 'covid-tracker/tracker/SET_REGIONS';
const initialState = {
  tracker: [],
  currentRegions: { name: '', today_confirmed: 0, regions: [] },
};

const CurrentDate = () => {
  const time = new Date();
  const date = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();
  return `${year}-${month}-${date}`;
};

const setTacker = (payload) => ({
  type: SET_TRACKER,
  payload,
});

export const setRegions = (payload) => ({
  type: SET_REGIONS,
  payload,
});

export const fetchTacker = (dispatch) => {
  const newDate = CurrentDate();
  axios.get(`https://api.covid19tracking.narrativa.com/api/${newDate}`)
    .then((response) => {
      dispatch(setTacker(response.data.dates[CurrentDate()].countries));
    });
};

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRACKER:
      return { ...state, tracker: action.payload };
    case SET_REGIONS:
      return {
        ...state,
        currentRegions: Object.values(state.tracker).filter((c) => c.id === action.payload)[0],
      };
    default:
      return state;
  }
};

export default trackerReducer;