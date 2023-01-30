import { createSlice, nanoid } from '@reduxjs/toolkit';

const carSlice = createSlice({
  name: 'car',
  initialState: {
    term: '',
    data: [],
  },
  reducers: {
    changeTerm(state, action) {
      state.term = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const updated = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeTerm, addCar, removeCar } = carSlice.actions;
export const carsReducer = carSlice.reducer;
