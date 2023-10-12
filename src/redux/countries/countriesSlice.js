import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const countriesAPI = 'https://restcountries.com/v3.1/region/europe';

const initialState = {
  data: [],
  searchTerm: '',
  selectedRegion: '',
  loading: false,
  error: false,
  success: false,
  message: '',
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries', async () => {
  const response = await axios.get(`${countriesAPI}`, {
    responseType: 'json',
  });
  return response.data;
});

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
      state.message = '';
    }).addCase(fetchCountries.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = false;
      state.success = true;
      state.message = 'Data fetched successfully';
    }).addCase(fetchCountries.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.success = false;
      state.message = `Error fetching data: ${action.error.message}`;
    });
  },
});

export const { filterCountries, setSearchTerm, setRegion } = countriesSlice.actions;
export default countriesSlice.reducer;
