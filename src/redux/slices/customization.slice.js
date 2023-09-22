import { createSlice } from '@reduxjs/toolkit'
import colors from '../../assets/scss/_themes-vars.module.scss'
import { ThemeConfig } from 'utils/config'

const initialState = {
  primary: colors?.primaryMain,
  secondary: colors?.secondaryMain,
  fontFamily: ThemeConfig.fontFamily.DMSANS,
  mode: ThemeConfig.mode.LIGHT,
}

const customizationSlice = createSlice({
  name: 'customization',
  initialState,
  reducers: {
    changeThemeColor: (state, action) => {
      const defaultColor = ThemeConfig.themeColor.DEFAULT
      const color =
        action.payload === defaultColor ? initialState : action.payload
      state.primary = color.primary
      state.secondary = color.secondary
    },
    changeFontFamily: (state, action) => {
      state.fontFamily = action.payload
    },
    changeThemeMode: (state, action) => {
      state.mode =
        state.mode === ThemeConfig.mode.LIGHT
          ? ThemeConfig.mode.DARK
          : ThemeConfig.mode.LIGHT
    },
  },
})

export const { changeThemeColor, changeFontFamily, changeThemeMode } =
  customizationSlice.actions
export default customizationSlice.reducer
