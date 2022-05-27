import {createSlice} from '@reduxjs/toolkit';

const appearanceSlice = createSlice({
  name: 'appearance',
  initialState: {
    theme: 'light',
  },
  reducers: {
    toggleTheme(state, action) {
      const {theme} = action.payload;
      state.theme = theme;
    },
  },
});

export const {toggleTheme} = appearanceSlice.actions;

export default appearanceSlice.reducer;
