import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../../redux/store'; // Import your Redux store
import CountryList from '../../components/CountryList';

test('renders CountryList without errors', () => {
  render(
    <Provider store={store}>
      <Router>
        <CountryList />
      </Router>
    </Provider>,
  );
});
