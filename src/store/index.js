import {allNews} from './models/model';
import persistPlugin from '@rematch/persist';
import {init} from '@rematch/core';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export const store = init({
  models: {allNews},
  plugins: [persistPlugin(persistConfig)],
});
