import axios from 'axios'
/*export const addFn = (context,obj) => {
    context.commit('add',obj);
};*/
export const addFn = ({commit},obj) => {
    commit('add',obj);
};
//这个方法是获取banner数据的
export const getBannerData = ({commit},obj) => {
    axios.get('/bannerlist').then((data) => {
        // console.log(data);
        this.arr = data.data;
        commit('changeBannerData',data.data);
        //commit是触发mutations中的方法,通过mutations中的方法修改state中的数据
    })
};

//这个方法是请求首页列表数据的
export const getHomeList =({commit},obj) => {
    axios.post('/homelist',obj).then((data) => {
        console.log(data.data);
        commit('changeHomeList',data.data);
    });
};
//请求列表页数据
export const getListData =({commit},obj) => {
  axios.post('/listdata',obj).then((data) => {
    console.log(data.data);
    commit('changeListData',data.data);
  });
};
