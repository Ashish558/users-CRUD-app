import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import usersSlice from './slices/users'
import formSlice from './slices/form'
import selectedUserSlice from './slices/selectedUser'

export const store = configureStore({
    reducer: {
        users: usersSlice,
        form: formSlice,
        selectedUser: selectedUserSlice,
    },
    //    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware),
    devTools: true
})

setupListeners(store.dispatch)