import pathToRegexp from 'path-to-regexp';
import Parser from 'rss-parser';
import fetch from '../../utils/fetch';
import QUERYS from '../querys';

const parser = new Parser();
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

// const queryNews = () => parser.parseURL(CORS_PROXY + 'https://www.chainnews.com/feeds/articles/');
const queryNews = () => fetch.cleanGet('https://webapi.8btc.com/bbt_api/news/list?num=40');


export default {
  namespace: 'news',
  state: {
    loading: true,
    news: [],
  },
  subscriptions: {},
  effects: {
    * queryNews(_, { call, put }) {
      yield put({
        type: 'updateState',
        payload: {
          loading: true,
        },
      });
      const data = yield call(queryNews);
      if (data.data) {
        yield put({
          type: 'updateState',
          payload: {
            loading: false,
            news: data.data.list,
          },
        });
      }
      // if (data.success) {
      //   yield put({
      //     type: 'updateState',
      //     payload: {
      //       notices: data.data,
      //     },
      //   });
      // }
    },
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
