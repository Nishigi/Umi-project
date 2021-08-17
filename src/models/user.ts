function fetchList() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                err: 0,
                msg: "success",
                data: {
                    list: [
                        { id: 1, name: 'a' },
                        { id: 2, name: 'b' },
                        { id: 3, name: 'c' },
                    ]
                }
            })
        }, 500);
    }
    )
}


const IndexModel = {
    namespace: 'user',
    state: {
        list: []
    },


    reducers: {
        // save(state, action) {
        //     return {
        //         ...state,
        //         ...action.payload,
        //     };
        // },
        // 启用 immer 之后
        changeList(state, action) {
            state.list = action.payload;
        },
    },
    effects: {
        *getList({ payload }, { call, put }) {
            const res = yield call(fetchList, payload)
            console.log('接口调用', res);
            yield put({ type: 'changeList', payload: res.data.list })
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            console.log('入口鉴权,登录拦截');
        },
    },
};

export default IndexModel;