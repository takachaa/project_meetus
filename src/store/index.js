import Vue from 'vue'
import Vuex from 'vuex'
import axiosRefresh from '../axios-refresh'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLodingStatus:false,
    idToken:null,
    userId:null
  },
  mutations: {
    updateIdToken(state, idToken){
      state.idToken = idToken
    },
    updateUserId(state, userId){
      state.userId = userId
    },
    changeLodingStatus(state, status){
      state.isLodingStatus = status
    },
  },
  actions: {
    async autoLogin({commit, dispatch}){
      const idToken = localStorage.getItem('idToken')  
      if(!idToken) return;

      const now = new Date();
      const expiryTimeMs = localStorage.getItem('expiryTimeMs')
      const isExpired = now.getTime() >= expiryTimeMs;
      const refreshToken = localStorage.getItem('refreshToken')
      if(isExpired){ 
        //有効期限がトークンリフレッシュを行分ければならない、その後は一時間後にリフレッシュ
        await dispatch('refreshIdToken',refreshToken)

      }else{
        //有効期限が残っていても、残っている時間時にトークンリフレッシュを行分ければならない、その後は一時間後にリフレッシュ
        const expiresInMs = expiryTimeMs - now.getTime()
        setTimeout(() => {
          dispatch('refreshIdToken',refreshToken)
        }, expiresInMs )
        commit('updateIdToken',idToken)
      }

    },
    updateIdToken({commit}, idToken){
      commit('updateIdToken', idToken)
    },
    updateUserId({commit}, idToken){
      commit('updateUserId', idToken)
    },
    async refreshIdToken({commit, dispatch},refreshToken){
      await axiosRefresh.post('/token?key=AIzaSyDzRU5FwYeaIGi7bVAAxF1cmboXP8Ne7gE',
      {
        grant_type:'refresh_token',
        refresh_token:refreshToken
      }
      ).then(response => {
        console.log(`reflesh!! ${response.data.id_token}`)
        setTimeout(() => {
            //再帰的に導関数を呼び出し→以降1時間ごとにリフレッシュ
            dispatch('refreshIdToken',response.data.refresh_token)
        }, response.data.expires_in * 1000)

        commit("updateIdToken", response.data.id_token)

        const now = new Date();
        const expiryTimeMs = now.getTime() + (response.data.expires_in * 1000)
        localStorage.setItem('idToken', response.data.id_token)
        localStorage.setItem('expiryTimeMs', expiryTimeMs)
        localStorage.setItem('refreshToken', response.data.refresh_token)

      })
    },
    logout({commit}){
      // alert('logtout from actions')
      commit('updateIdToken',null)
      commit('updateUserId',null)//追加分 ストアに保存されたlocalUserIdをNULL

      localStorage.removeItem('idToken')
      localStorage.removeItem('userId')//追加分 localUserIdをローカルストレージから削除
      localStorage.removeItem('refreshToken')
      localStorage.removeItem('expiryTimeMs')

      router.push({name:'Login'})
    },
    changeLodingStatus({commit}, status){
      commit('changeLodingStatus', status)
    },

  },
  getters:{
    lodingStatus: state => state.isLodingStatus,
    idToken:state => state.idToken,
    userId:state => state.userId
  },
  modules: {
  }
})
