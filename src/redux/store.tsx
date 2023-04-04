import AsynStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from './rootReducer';

const persistConfig = {
    key: 'root',
    Storage: AsynStorage,
    whitelist: [''],
};

export const store = configureStore({
    reducer: persistReducer(persistConfig, rootReducer),
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
