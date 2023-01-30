import { configureStore } from '@reduxjs/toolkit';
import { carsReducer, addCar, removeCar, changeTerm } from './slices/carSlice';
import { formReducer, changeCost, changeName } from './slices/formSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, addCar, removeCar, changeCost, changeName, changeTerm };
