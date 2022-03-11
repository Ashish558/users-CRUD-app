

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        updateUsers: (state, {payload}) => {
            state.users = payload
        },
      
    }
})

export const { updateUsers } = usersSlice.actions
export default usersSlice.reducer
