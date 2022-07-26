import {
  Effects,
  Model, Reducers,
} from './types';

export type IUserModelState = Readonly<{
  tab: number,
}>


const reducers: Reducers<IUserModelState> = {
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

const UserModel: Model<IUserModelState> = {
  namespace: 'user',
  state: {
    tab: 0,
  },

  subscriptions: {
    setup({  }) {  // eslint-disable-line

    },
  },

  effects,
  reducers,
};

export default UserModel;
