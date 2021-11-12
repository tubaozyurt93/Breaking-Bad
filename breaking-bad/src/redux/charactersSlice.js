import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios'; 

export const fetchCharacters = createAsyncThunk ('characters/getCharacters',async () => {
    const res = await axios (`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters`);
    return res.data;
})

export const charactersSlice = createSlice ({
     name: 'characters',
     initialState: {
         items : []
     },
     reducers: {},
     extraReducers: {
         [fetchCharacters.fullfilled]: (state,action) => {
             console.log(action,payload);
         }
     }
    });

export default charactersSlice.reducer;