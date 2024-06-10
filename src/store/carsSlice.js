import { createSlice, nanoid } from '@reduxjs/toolkit';
import _ from 'lodash';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: [],
    },
    reducers: {
        changeSearchTerm: (state, action) => {
            const { payload } = action;
            state.searchTerm = payload;
        },
        addCar: (state, action) => {
            const { payload } = action;
            state.cars.push({
                name: payload.name,
                cost: payload.cost,
                // id: _.uniqueId(),
                id: nanoid(),
            });
        },
        removeCar: (state, action) => {
            const { payload: id } = action;
            // const currentId = state.cars.findIndex(id);
            // state.cars.splice(currentId, 1);
            state.cars = state.cars.filter((car) => car.id !== id);
        },
    },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export default carsSlice.reducer;
