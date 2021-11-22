import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import store from '../Redux/configureStore';
import Mock from './mock/details';
import Detail from '../components/details';

describe('component functionality', () => {
  test('component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Detail />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render Mission component correctly', () => {
    const component = render(
      <Mock/>,
    );
    expect(component.container).toHaveTextContent('todays confirmed Cases');
  });
});