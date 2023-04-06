import { createSlice } from "@reduxjs/toolkit";


let intStat = {
    loading: true,
    error: false,
    friends: []
};

const FriendsSlice = createSlice({
    name: 'FriendsSlice',
    initialState: intStat,
    reducers: {
        startGetFirends: (state) => { state.loading = true; },
        getFirends: (state, action) => {
            state.friends = action.payload;
            state.loading = false;
        },
        getFirendsError :(state)=>{
            state.error = true;
            state.loading = false;
        },
    }
})

export const {startGetFirends,getFirends,getFirendsError} = FriendsSlice.actions;
export default FriendsSlice.reducer;
