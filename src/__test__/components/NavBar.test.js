import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../../components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders NavBar without errors', () => {
    render(
        <Router>
          <NavBar />
        </Router>
      );
});
