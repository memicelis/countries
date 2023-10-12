import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
  try {
    const response = await fetch(countriesAPI);

    if (!response.ok) {
      throw new Error(`Failed to fetch data (status ${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
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
