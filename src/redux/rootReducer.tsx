import AsynStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import auth from '@redux/auth/slice';

const authPersistConfig = {
    key: 'auth',
    whitelist: ['isLoggedIn'],
    storage: AsynStorage
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth),
});

export default rootReducer;