import {configureStore} from '@reduxjs/toolkit'
import taskSlice from './features/tasks/taskSlice' 
import userSlice from './user/userSlice'
const store = configureStore({
 reducer:{
    tasks: taskSlice,
    users: userSlice,
 }
})
export default store