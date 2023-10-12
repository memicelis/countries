import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

const countriesAPI = 'https://restcountries.com/v3.1/region/europe';

const initialState = {
    data: [],
    initialData: [],
    searchTerm: '',
    loading: false,
    error: false,
    success: false,
    message: '',
      };



export const fetchCountries = createAsyncThunk('countries/fetchCountries', async()=>{
    const response = await axios.get(`${countriesAPI}`, {
        responseType: 'json',
      });
    return response.data;
})

const countriesSlice = createSlice({
    name:'countries',
    initialState,
    reducers :{
      filterCountries: (state, action) => {
        const selectedRegion = action.payload;
  
        if (selectedRegion === "all") {
          if (state.searchTerm === "") {
            state.data = state.initialData;
          } else {
            state.data = state.initialData.filter((country) =>
              country.name.common
                .toLowerCase()
                .startsWith(state.searchTerm.toLowerCase())
            );
          }
        } else {
          if (state.data.length < 20) {
            state.data = state.initialData;
          }
          state.data = state.data.filter((country) =>
            country.subregion === selectedRegion
          );
        }
      },
      setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
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
          state.initialData = action.payload;
        }).addCase(fetchCountries.rejected, (state, action) => {
          state.loading = false;
          state.error = true;
          state.success = false;
          state.message = 'Error fetching data: ' + action.error.message;
        });
      },
    });

 export const {filterCountries,resetData,setSearchTerm} = countriesSlice.actions;   
export default countriesSlice.reducer;