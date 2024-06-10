import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0,
    },
    /*
    initialState: {
        formData: {
            name: '',
            cost: 0,
        },
    },
    */
    reducers: {
        changeName: (state, action) => {
            const { payload } = action;
            state.name = payload;
        },
        changeCost: (state, action) => {
            const { payload } = action;
            state.cost = payload;
        },
        // action.payload is an object
        /*
        changeFormData: (state, action) => {
          state.formData = { ...state.formData,  ...action.payload };
        },
        */
    },
});

export const { changeName, changeCost } = formSlice.actions;
export default formSlice.reducer;
