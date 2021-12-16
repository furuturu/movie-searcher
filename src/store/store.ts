import { configureStore, Reducer } from "@reduxjs/toolkit";
import { rootReducer } from "./root.reducer";
import { setupListeners } from "@reduxjs/toolkit/query";
import { fetchData } from "./services/fetchData";
import { searchQuery } from "./services/searchQuery";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favourite", "search"],
  blacklist: [searchQuery.reducerPath, fetchData.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer as Reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(fetchData.middleware)
      .concat(searchQuery.middleware),
});
export const persistor = persistStore(store);

setupListeners(store.dispatch);
export type TRootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
