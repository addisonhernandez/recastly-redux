import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

const initialStore = {
  videoList: exampleVideoData,
  currentVideo: exampleVideoData[0]
};

const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));

export default store;