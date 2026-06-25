import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Начальное состояние данного слайса (хранилище)
// можете для себя представлять что хранится в виде объекта
const initialState = {
  data: [],
  status: "idle",
  error: null,
  page: 1,
  page_size: 10,
  total_pages: 1,
};

// createAsyncThunk - это фабрика, которая автоматически генерирует экшены и обрабатывает 3 состояния (pending, fulfilled, rejected).
// По простому запросы на бэк делаются с помощью него, вторым аргументом идет сама функция, которая делает запрос
export const fetchData = createAsyncThunk("kresla/fetch", async (params) => {
  const response = await axios("http://localhost:3000/armchairs", { params });
  const { data } = await response;
  return data;
});

export const kreslaSlice = createSlice({
  name: "kresla",
  initialState,
  reducers: {
    // Базовые синхронные экшены, которые работают с хранилищем
    getKresla: (state, action) => {
      // К примеру тут мы в хранилище меняем значение для ключика data на то что нам придет из action.payload
      state.data += action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  // Здесь указываются экшены, которые были созданы извне (к примеру наши createAsyncThunk)
  extraReducers: (builder) => {
    // Здесь мы обрабатываем различные кейсы (состояния) нашего запроса
    // к примеру то что запрос грузится
    builder.addCase(fetchData.pending, (state) => {
      state.status = "loading";
    });
    // тут к примеру когда у нас запрос успешно окончился
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "succeeded";
      // тут action.payload получаем из той функции fetchData
      state.data = action.payload.data;
      state.total_pages = action.payload.pages;
      state.error = null;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export const { getKresla, setPage } = kreslaSlice.actions;

export default kreslaSlice.reducer;
