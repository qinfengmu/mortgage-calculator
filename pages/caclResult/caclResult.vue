<template>
	<view class="result-wrap">
		<view class="calc-rlt">
			<view class="calc-rlt-hd">{{ data.paymentType == 1 ? '等额本息' : '等额本金' }}</view>
			<view class="calc-rlt-bd">
				<view class="calc-rlt-item">
					<view class="calc-rlt-cell">
						<view class="r-title">每月月供参考（元）</view>
						<text class="r-num r-payment">{{data.monthPayment}}</text>
						<view class="r-title r-decrease" v-if="data.paymentType == 2">每月递减 {{data.decrease}}元</view>
					</view>
				</view>

				<view class="calc-rlt-item calc-rlt-flex">
					<view class="calc-rlt-cell">
						<view class="r-title">还款总额（万元）</view>
						<text>{{data.totalPayment_tt}}</text>
					</view>
					<view class="calc-rlt-cell">
						<view class="r-title">贷款总额（万元）</view>
						<text class="r-num">{{data.totalLoan_tt}}</text>
					</view>
					<view class="calc-rlt-cell">
						<view class="r-title">支付利息（万元）</view>
						<text class="r-num">{{data.totalInterest_tt}}</text>
					</view>
				</view>
				<view class="calc-rlt-item calc-rlt-flex">
					
					<view class="calc-rlt-cell">
						  <navigator open-type="navigateBack" hover-class="other-navigator-hover">
						                 <button  class="rlt-btn rlt-reset">重新计算</button>
						    </navigator>
						</view>
					<view class="calc-rlt-cell">
						<navigator url="../calcDetail/calcDetail" hover-class="other-navigator-hover">
						               <button  class="rlt-btn rlt-detail-btn">还款明细</button>
						  </navigator>
					</view>
				</view>
				<view class="calc-rlt-item">
					<view class="rlt-tip">
						{{data.paymentType == 1? '等额本息：每月还款额固定，其中本金部分逐月递增、利息部分逐月递减': ' 等额本金：每月还款额递减，其中本金部分固定、利息部分逐月递减'}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {		
		};
	},
	computed:{
		data () {		
			return this.$store.state.rate.result;
		}
	},
	created() {		
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
	.result-wrap {
	    margin: 32upx;
	}
	.calc-rlt {
	    border:1px solid #e6e9f0;
	    box-shadow: 0 3upx 10upx #eff0f3;
	    border-radius: 2upx;
	    color:#333;
	    &-hd {
	        padding: 0 20upx;
	        height: 80upx;
	        line-height: 80upx;
	        font-size: 32upx;
	        font-weight: bold;
	        border-bottom:1upx solid #e6e9f0;
	    }
	    &-bd {
	        padding: 0 25upx;
	        .r-title {
	            color:#868E9E;
	            font-size: 24upx;
	        }
	        .r-decrease {
	            color:#333;
	        }
	        .r-num {
	            display: inline-block;
	            margin-top: 12upx;
	            font-size: 32upx;
	            font-style: normal;
	            font-weight: bold;
	        }
	        .r-payment {
	            font-size: 60upx;
	        }
	        .rlt-btn {
	            display: block;
	            margin: 0 auto;
	            width: 80%;
	            height: 80upx;
	            line-height: 80upx;
	            text-align: center;
	            font-size: 28upx;
	            color: #394259;
	            border: 1upx solid #D1D1D1;
	            border-radius: 20upx;
	        }
	        .rlt-tip {
	            font-size: 24upx;
	            color:#868E9E;
	        }
	    }
	    &-item {
	        margin-top: 40upx;
	        &:last-child {
	            margin-bottom: 40upx;
	        }
	    }
	    &-flex {
	        display: flex;
	        align-items: center;
	        justify-content: space-between;
	        .calc-rlt-cell {
	            flex:1;
	        }
	    }
	}
	
</style>
