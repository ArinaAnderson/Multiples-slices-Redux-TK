import { configureStore } from '@reduxjs/toolkit';

import formReducer from './formSlice.js';
import { changeName, changeCost } from './formSlice.js';

import carsReducer from './carsSlice.js';
import { changeSearchTerm, addCar, removeCar } from './carsSlice.js';

export const store = configureStore({
    reducer: {
        cars: formReducer,
        form: carsReducer,
    },
});

export { changeName, changeCost, changeSearchTerm, addCar, removeCar };
