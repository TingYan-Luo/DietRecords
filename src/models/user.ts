export default {
  namespace: 'user',
  state: {
    banner: [],
    brands: [],
    products_list: [],
    page: 1,
  },
  effects: {
    *load(_, { call, put }) {
      const { status, data } = yield call(() => {}, {});
      if (status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            banner: data.banner,
            brands: data.brands,
          },
        });
      }
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
