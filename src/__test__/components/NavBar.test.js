import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../../components/NavBar';

test('renders NavBar without errors', () => {
  render(
    <Router>
      <NavBar />
    </Router>,
  );
});
