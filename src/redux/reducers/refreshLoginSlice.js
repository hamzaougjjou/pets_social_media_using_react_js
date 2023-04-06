import { createSlice } from "@reduxjs/toolkit";


let intStat = {
    loading: false,
    error: false,
    token: ""
};


const refreshLoginSlice = createSlice({
    name: 'refreshLoginSlice',
    initialState: {
        loading: false,
        error: false,
        token: null
    },
    reducers: {
        startLogin: (state) => {
            state.loading = true;
            state.error = false;
        },
        getLogin: (state, action) => {
            // console.log(action.payload);
            state.token = action.payload.token;
            state.loading = false;
            state.error = false;
            localStorage.setItem('authInfo', JSON.stringify(action.payload) );
        },
        LoginError: (state) => {
            state.error = true;
            state.loading = false;
        },
    }
})

export const { startLogin, getLogin, LoginError } = refreshLoginSlice.actions;
export default refreshLoginSlice.reducer;
