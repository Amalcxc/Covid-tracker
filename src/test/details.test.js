import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import createStore from '../Redux/configureStore';
import Detail from './mock/details';

describe('component functionality', () => {
  test('component snapshot', () => {
    const tree = renderer.create(
      <Provider store={createStore}>
        <Detail />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render Mission component correctly', () => {
    const component = render(
      <Detail/>,
    );
    expect(component.container).toHaveTextContent('todays confirmed Cases');
  });
});