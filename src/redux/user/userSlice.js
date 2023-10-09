import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    name:'Mir Hussain',
    email:'mahbubul604@gmail.con',
    tasks:[]
}
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export default userSlice.reducer