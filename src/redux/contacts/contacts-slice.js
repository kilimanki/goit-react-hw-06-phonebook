import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer: (state, { payload }) => {
        return state.filter(({ id }) => id !== payload);
      },
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
