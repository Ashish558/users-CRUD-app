

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   userId: ''
}

const selectedUserSlice = createSlice({
    name: 'selectedUser',
    initialState,
    reducers: {
        updateSelectedUser: (state, {payload}) => {
            state.userId = payload
        },
      
    }
})

export const { updateSelectedUser } = selectedUserSlice.actions
export default selectedUserSlice.reducer
