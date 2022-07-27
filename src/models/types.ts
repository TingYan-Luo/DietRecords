import { IUserModelState } from "./user";

export type Loading = Readonly<{
  global: boolean;
  effects: { [key: string]: boolean | undefined };
  models: {
    global?: boolean;
    auth?: boolean;
    base?: boolean;
    example?: boolean;
    deptDetail?: boolean;
  };
}>;

export interface ILocation {
  pathname: string;
  search: string;
  hash: string;
  key: string;
}

export type IRouterState = Readonly<{
  location: ILocation;
  action: string;
}>;

export type GlobalState = Readonly<{
  router: IRouterState;
  loading: Loading;
  user: IUserModelState;
}>;

export interface Data {
  [key: string]: any;
}

// onResult 回调函数接口
export interface IOnResultCallBack<T> {
  onResult: (error: Error | null | string, data?: T) => void;
}

export interface Reducers<T> {
  save: (state: T, action: any) => any;
}

export interface Effects {
  [key: string]: (p: { payload: any} , d: { call?: any, put?: any, select?: any}) => Generator<any, void, unknown>;
}

export interface Model<T> {
  namespace: string;
  state: T;
  reducers: Reducers<T>;
  effects: Effects;
  subscriptions: any;
}