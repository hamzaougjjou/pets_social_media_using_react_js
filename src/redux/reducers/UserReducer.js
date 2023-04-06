import { createSlice } from "@reduxjs/toolkit";


let intStat = {
    loading: true,
    error: false,
    user: {}
};

const getCurrentUserSLice = createSlice({
    name: 'GetCurrentUser',
    initialState: intStat,
    reducers: {
        startGetUser: (state) => { state.loading = true; },
        getUser: (state, action) => {
            state.user = action.payload;
            state.loading = false;
        },
        getUserError :(state)=>{
            state.error = true;
            state.loading = false;
        },
    }
})

export const {startGetUser,getUser,getUserError} = getCurrentUserSLice.actions;
export default getCurrentUserSLice.reducer;
