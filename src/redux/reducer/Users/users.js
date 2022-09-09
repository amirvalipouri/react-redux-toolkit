import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id : 0 , name : "amir" },
    {id :1 , name : "saqar"},
    {id : 2 , name : "mania"}
]

const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {}
})

export const allUser = (state) => state.users

export default userSlice.reducer