import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./modules/users";

const store = configureStore({
  reducer: {
    users: usersReducer
  }
});

export default store;
