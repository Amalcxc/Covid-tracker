import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../components/nav';

describe('nav component', () => {
  test('link element', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    return expect(screen.getByRole('link')).toBeInTheDocument;
  });
});

describe('test with jest snapshot', () => {
  it('render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Nav />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});