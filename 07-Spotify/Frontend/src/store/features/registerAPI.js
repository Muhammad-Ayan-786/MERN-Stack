import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const registerAPI = createAsyncThunk('registerAPI', async (formData) => {
  const responce = await fetch('http://localhost:3000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  return responce;
})

const registerSlice = createSlice({
  name: 'registerAPI',

  initialState: {
    registerSuccess: false,
    registerError: false,
    registerLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(registerAPI.pending, (state) => {
      state.registerLoading = true
      state.registerError = false
      state.registerSuccess = false
    })

    builder.addCase(registerAPI.fulfilled, (state) => {
      state.registerSuccess = true
      state.registerError = false
      state.registerLoading = false
    })

    builder.addCase(registerAPI.rejected, (state) => {
      state.registerError = true
      state.registerSuccess = false
      state.registerLoading = false
    })
  }
})

export const {
  registerLoading,
  registerSuccess,
  registerError
} = registerSlice.actions

export default registerSlice.reducer