import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Tracker from '../components/tracker';
import store from '../redux/configureStore';

describe('test covid tracker component', () => {
  test(' it should have a image', () => {
    render(
      <Provider store={store}>
        <Router>
          <Tracker />
        </Router>
      </Provider>,
    );
    return expect(screen.getByTestId('img')).toBeInTheDocument;
  });
});

describe('test jest snapshot', () => {
  it('render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Tracker />
          </Router>
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});