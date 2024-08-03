import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://cors-anywhere.herokuapp.com/https://live.devnimble.com/api/v1";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const API_TOKEN = import.meta.env.VITE_API_TOKEN;

export const getContactsList = createAsyncThunk(
  "contacts/getContactsList",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        "/contacts?sort=created:desc",
        token.set(API_TOKEN),
        {
          headers: {
            "X-Requested-With": "XML",
            "X-Nimble-Token": API_TOKEN,
          },
        }
      );

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
      const resp = await axios.get(`/contact/${id}`, token.set(API_TOKEN), {
        headers: {
          "X-Requested-With": "XML",
          "X-Nimble-Token": API_TOKEN,
        },
      });

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
      const resp = await axios.post(
        `/contact`,
        userData,
        token.set(API_TOKEN),
        {
          headers: {
            "X-Requested-With": "XML",
            "X-Nimble-Token": API_TOKEN,
          },
        }
      );

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
      const resp = await axios.delete(
        `/contact/${contactId}`,
        token.set(API_TOKEN),
        {
          headers: {
            "X-Requested-With": "XML",
            "X-Nimble-Token": API_TOKEN,
          },
        }
      );

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

      const resp = await axios.put(
        `/contacts/${id}/tags`,
        tags,
        token.set(API_TOKEN),
        {
          headers: {
            "X-Requested-With": "XML",
            "X-Nimble-Token": API_TOKEN,
          },
        }
      );

      if (resp.status !== 200) {
        throw new Error("Error");
      }

      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
