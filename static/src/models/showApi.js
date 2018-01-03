import { query} from '../services/showApi'
import config from '../utils/config'

export default {

  namespace: 'showApi',

  state: {
    tableList: [],
    loading: false,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/showApi') {
          dispatch({ type: 'showApi/loadShowApi'});
        }
      });
    },
  },

  effects: {
    *loadShowApi({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });
      const data = yield call(query, payload);
      yield put({
        type: 'loadShowApiSuccess',
        payload: {data}
      });
      yield put({ type: 'hideLoading' });
    },
  },

  reducers: {
    showLoading(state) {
      return { ...state, loading: true };
    },
    hideLoading(state) {
      return { ...state, loading: false };
    },
    loadShowApiSuccess(state, action) {
      const actionData = action.payload.data.data.record;
        console.log(actionData);
      let result = [];
       actionData.forEach((v)=>{
         ['list','post','put','delete','show'].forEach((v1)=>{
          result.push({
            url: config.devBaseURL+"/api/restql/"+v.template,
            desc: v.template_name,
            method: v1,
            data:{}
          })
        })
      });
      return {
        ...state, 
        list: result,
      };
    }
  }
}
