import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

const instance = axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1",
  headers: {
    "X-Requested-With": "XML",
    "X-Nimble-Token": API_TOKEN,
    Authorization: `Bearer ${API_TOKEN}`,
  },
});

export const getContactsList = createAsyncThunk(
  "contacts/getContactsList",
  async (_, thunkAPI) => {
    try {
      const resp = await instance.get("/contacts?sort=created:desc");

      if (resp.status !== 200) {
        throw new Error("Error");
      }

      return resp.data.resources;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getContactById = createAsyncThunk(
  "contacts/getContactById",
  async (id, thunkAPI) => {
    try {
      const resp = await instance.get(`/contact/${id}`);

      if (resp.status !== 200) {
        throw new Error("Error");
      }

      return resp.data.resources;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createContact = createAsyncThunk(
  "contacts/createContact",
  async (userData, thunkAPI) => {
    try {
      const resp = await instance.post(`/contact`, userData);

      if (resp.status !== 201) {
        throw new Error("Error");
      }

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactById = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const resp = await instance.delete(`/contact/${contactId}`);

      if (resp.status !== 200) {
        throw new Error("Error");
      }

      return resp.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTagToContact = createAsyncThunk(
  "contacts/addTagToContact",
  async (userData, thunkAPI) => {
    try {
      const { tags, id } = userData;

      const resp = await instance.put(`/contacts/${id}/tags`, tags);

      if (resp.status !== 200) {
        throw new Error("Error");
      }

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
