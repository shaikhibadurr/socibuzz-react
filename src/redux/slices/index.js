import authSlice from './auth.slice'
import customizationSlice from './customization.slice'
import { combineReducers } from '@reduxjs/toolkit'

export default combineReducers({
  customization: customizationSlice,
  auth: authSlice,
})
