<template>
	<view class="content">	
			<view ><nav-tab :navTabs="navTabs" @tabChange="switchTabs"></nav-tab></view>
			<view class="calculator-form">
				<accumulatedLoan v-if="type==0"></accumulatedLoan>
				<commercialLoan v-else-if="type==1"></commercialLoan>
				<syndicatedLoan v-else-if="type==2"></syndicatedLoan>
			</view>
	</view>
</template>

<script>
	import navTab from '@/components/nav-tab.vue';
	import accumulatedLoan from '../accumulatedLoan/accumulatedLoan.vue'
	import commercialLoan from '../commercialLoan/commercialLoan.vue'
	import syndicatedLoan from '../syndicatedLoan/syndicatedLoan.vue'
	export default {
		data() {
			return {		
				type:0,
				navTabs: [
					{
						name: '公积金贷款',
						type: 0
					},
					{
						name: '商业贷款',
						type: 1
					},
					{
						name: '组合贷款',
						type: 2
					}					
				]
			}
		},
		components:{
			navTab,
			accumulatedLoan,
			commercialLoan,
			syndicatedLoan
		},
		onLoad() {

		},
		created() {
		},
		methods: {
			switchTabs (data) {		
				this.type = data.type;
			}
		}
	}
</script>

<style>
	.stickyCls {
		width: 100%;
	}
</style>
