

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isFormActive: false,
    name: '',
    email: '',
    phoneNumber: '',
    hobbies: [],
    isEditing: false
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        toggleFormVisibility: (state, { payload }) => {
            state.isFormActive = payload
        },
        updateIsEditing: (state, { payload }) => {
            state.isEditing = payload
        },
        
        updateName: (state, { payload }) => {
            state.name = payload
        },
        updateEmail: (state, { payload }) => {
            state.email = payload
        },
        updatePhoneNumber: (state, { payload }) => {
            state.phoneNumber = payload
        },
        updateHobbies: (state, { payload }) => {
            state.hobbies.push(payload)
        },

        clearHobbies: (state, { payload }) => {
            state.hobbies = []
        },
        clearForm: (state, { payload }) => {
            state.hobbies = []
            state.phoneNumber = ''
            state.email = ''
            state.name = ''
        },
        updateFormFields: (state, { payload }) => {
            state.hobbies = payload.hobbies
            state.phoneNumber = payload.phoneNumber
            state.email = payload.email
            state.name = payload.name
        },
    }
})

export const
    {
        toggleFormVisibility, updateName, updateEmail,
        updateIsEditing,
        updatePhoneNumber,
        updateHobbies, clearHobbies, clearForm,
        updateFormFields
    } = formSlice.actions
export default formSlice.reducer
