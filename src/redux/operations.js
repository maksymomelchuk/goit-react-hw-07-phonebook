import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAPI, addAPI, deleteAPI } from '../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      return await fetchAPI();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      return await addAPI(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      return await deleteAPI(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
