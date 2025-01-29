import { createSlice } from '@reduxjs/toolkit'
import { lastReleaseProps } from './type'

const initialState: lastReleaseProps = {
  lastRelease: [],
}

export const lastReleaseSlice = createSlice({
  name: 'lastRelease',
  initialState,
  reducers: {},
})

export const lastReleasesActions = lastReleaseSlice.actions
export const lastReleasesReducer = lastReleaseSlice.reducer