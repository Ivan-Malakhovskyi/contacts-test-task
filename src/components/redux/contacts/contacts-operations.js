import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = 'https://live.devnimble.com/api/v1'

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {},
};

export const getContactsList = createAsyncThunk(
  "contacts/getContactsList",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1/contacts",
        token.set("VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn"),
        {
          headers: {
            "X-Requested-With": "XML",
            "X-Nimble-Token": "VlP9cwH6cc7Kg2LsNPXpAvF6QNmgZn",
          },
        }
      );
      token.set(data.token);
      return data.resources;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
