import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import the Provider from react-redux
import store from '../../redux/store'; // Import your Redux store
import CountryList from '../../components/CountryList';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders CountryList without errors', () => {
     render(
        <Provider store={store}>
          <Router>
            <CountryList />
          </Router>
        </Provider>
    );
});
