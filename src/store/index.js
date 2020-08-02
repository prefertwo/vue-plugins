import Vue from 'vue'
import Vuex from 'vuex'
import {GetUserInfo} from '@/api/service'

Vue.use(Vuex)

const state = {
  count: 0,
  userInfo: {},
}

// 改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。
const mutations = {
  increment(state) {
    state.count++
  },
  saveUserInfo(state, info) {
    state.userInfo = info
  }
}

const actions = {
  async getUserInfo({commit}) {
    try{
			const res = await GetUserInfo()
			if (res.status == 1008) {
				commit('saveUserInfo', res.data);
			}else{
				throw new Error(res.type)
			}
		}catch(err){
			// console.log(err.message)
		}
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
})
