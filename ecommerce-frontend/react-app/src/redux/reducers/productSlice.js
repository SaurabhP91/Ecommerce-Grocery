import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentProducts : null,
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        updateProducts: (state, action) => {
            state.currentProducts = action.payload;
        },
    },
});

export const {updateProducts} = productSlice.actions;
export default productSlice.reducer;