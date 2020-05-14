const state = {
	//商业贷款利率
	business_rate_array: [{
			"text": "基准利率8.5折(4.165%)",
			"value": 4.165
		},
		{
			"text": "基准利率9折(4.41%)",
			"value": 4.41
		},
		{
			"text": "基准利率9.5折(4.655%)",
			"value": 4.655
		},
		{
			"text": "基准利率(4.9%)",
			"value": 4.9
		},
		{
			"text": "基准利率1.05倍(5.145%)",
			"value": 5.14
		},

		{
			"text": "基准利率1.1倍(5.39%)",
			"value": 5.39
		},
		{
			"text": "基准利率1.15倍(5.635%)",
			"value": 5.635
		},
		{
			"text": "基准利率1.2倍(5.88%)",
			"value": 5.88
		}
	],

	//公积金贷款利率
	accumulation_fund_rate_array: [{
			"text": "基准利率(3.25%)",
			"value": 3.25
		},
		{
			"text": "基准利率1.1倍(3.575%)",
			"value": 3.575
		},
		{
			"text": "基准利率1.2倍(3.9%)",
			"value": 3.9
		}
	],
	//还款方式
	payment_type_array: [{
			text: '等额本息',
			value: 1
		},
		{
			text: '等额本金',
			value: 2
		}
	],
	result:''
};
const mutations = {
	setResult (state, payload) {
		state.result = payload;
	}
};
const actions = {
	setResult ({commit}, payload) {
		commit('setResult', payload);
	}
}
export default {
	state,
	mutations,
	actions
}
