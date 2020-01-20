import { createSlice } from "@reduxjs/toolkit";

import { usersUrl } from "../../../lib/restClient";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    list: []
  },
  reducers: {
    fetchUsers: state => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, { payload }) => {
      state.loading = false;
      state.list = payload;
    },
    fetchUsersFailed: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }
  }
});

export const {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailed
} = usersSlice.actions;

// Thunks
export const getUsers = () => async dispatch => {
  try {
    const response = await fetch(usersUrl);
    const users = await response.json();
    return dispatch(fetchUsersSuccess(users.data));
  } catch (error) {
    return dispatch(fetchUsersFailed(error));
  }
};

export default usersSlice.reducer;
