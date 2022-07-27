/* eslint-disable no-use-before-define */
import {
  Effects,
  Model, Reducers,
} from './types';

export type IExampleModelState = Readonly<{
  list: number[];
}>

const reducers: Reducers<IExampleModelState> = {
  save(state, action) {
    return {
      ...state,
      ...action.payload,
    };
  },
};

const effects: Effects = {
  *fetch({ payload }, { call, put }) {
    yield put({
      type: 'save',
      payload,
    });
  },
};

const ExampleModel: Model<IExampleModelState> = {
  namespace: 'example',
  state: {
    list: [],
  },

  subscriptions: {
    setup({  }) {  // eslint-disable-line

    },
  },

  effects,
  reducers,
};

export default ExampleModel;
