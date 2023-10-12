import { configureStore } from '@reduxjs/toolkit';
import countriesReducer, { setSearchTerm, setRegion } from '../../redux/countries/countriesSlice';

describe('countriesSlice initial state', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        countries: countriesReducer,
      },
    });
  });

  it('should have searchTerm as an empty string', () => {
    const state = store.getState().countries;
    expect(state.searchTerm).toBe('');
  });

  it('should have selectedRegion as an empty string', () => {
    const state = store.getState().countries;
    expect(state.selectedRegion).toBe('');
  });
  it('should update searchTerm using setSearchTerm reducer', () => {
    store.dispatch(setSearchTerm('New Search Term'));
    const state = store.getState().countries;
    expect(state.searchTerm).toBe('New Search Term');
  });
  it('should update selectedRegion using setRegion reducer', () => {
    store.dispatch(setRegion('New Region'));
    const state = store.getState().countries;
    expect(state.selectedRegion).toBe('New Region');
  });
});
