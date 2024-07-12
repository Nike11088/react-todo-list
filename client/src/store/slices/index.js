import { combineSlices } from '@reduxjs/toolkit'
import { userSlice } from './userSlice'
import { todoSlice } from './todoSlice'

export const rootReducer = combineSlices({
  user: userSlice.reducer,
  todo: todoSlice.reducer,
})
