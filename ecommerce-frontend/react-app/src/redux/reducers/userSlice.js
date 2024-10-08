import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.currentUser = action.payload;
        },
        logoutUser: (state,action) => {
            state.currentUser = null;

        },
    },
});

export const {updateUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;