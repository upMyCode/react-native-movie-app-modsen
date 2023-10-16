import { createSlice } from '@reduxjs/toolkit';

interface User {
  id: string;
  username: string;
  usersurname: string;
  useremail: string;
}

interface State {
  user: User | null;
}

const initialState: State = {
  user: null,
};

const createUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createNewUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { createNewUser } = createUserSlice.actions;

export default createUserSlice.reducer;
