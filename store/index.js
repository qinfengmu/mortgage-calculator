import Vue from 'vue'
import Vuex from 'vuex'
import rate from './modules/rate'
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		rate
	}
})