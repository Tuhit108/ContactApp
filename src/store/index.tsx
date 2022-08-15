import {applyMiddleware, createStore, combineReducers} from 'redux';
import { persistReducer} from 'redux-persist';
import {setContactStore, contactReducer} from './contact';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {composeWithDevTools} from 'redux-devtools-extension';
const middlewares: any[] = [];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

const reducers = combineReducers({
  contacts: contactReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, enhancer);
export type RootState = ReturnType<typeof store.getState>;
setContactStore(store);
