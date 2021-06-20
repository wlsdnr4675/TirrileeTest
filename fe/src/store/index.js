import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import programms from 'webapp/estimatedProgramm/reducer/programm.reducer';
const rootReducer = combineReducers({programms});

export default configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), logger],
});
