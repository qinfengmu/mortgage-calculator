<template>
	<view>
		<view id="dt-wrap" class="dt">
			<view class="dt-hd">
				<view class="dt-item dt-hd-item">
					<view class="dt-list">
						<view class="dt-phase">期数</view>
						<view class="dt-payment">月供</view>
						<view class="dt-capital">月供本金</view>
						<view class="dt-interest">月供利息</view>
						<view class="dt-residue">剩余本金</view>
					</view>
				</view>
			</view>
			<view class="dt-bd">
				<view class="dt-item dt-list" v-for="(listItem,index) in data.detail" :key="index">
				<!-- 	<h6>第{{ item.year }}年</h6> -->
					<!-- <view class="dt-list" v-for="(listItem,listIndex) in item.list" :key="listIndex"> -->
						<view class="dt-phase">第{{listItem.phase}}期</view>
						<view class="dt-payment">{{listItem.monthPayment}}</view>
						<view class="dt-capital">{{listItem.monthCapital}}</view>
						<view class="dt-interest">{{listItem.monthInterest}}</view>
						<view class="dt-residue">{{listItem.remainCapital}}</view>
					<!-- </view> -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed:{
		data () {
			return this.$store.state.rate.result;
		}
	},
	methods: {}
};
</script>

<style lang="scss">
//还款明细
.dt {
	padding-top: calc(80upx);
	font-size: 24upx;
	&-hd {
		padding-left: 30upx;
		position: fixed;
		width: 100%;
		background: #fff;
		top: 0;
		&-item {
			.dt-list {
				margin-left: 0;
				border-bottom: 0;
			}
		}
	}
	&-item {
		h6 {
			font-size: 24upx;
			padding-left: 30upx;
			line-height: 60upx;
			color: #666;
			background: #eef0f4;
			font-weight: normal;
		}
	}
	&-list {
		margin-left: 30upx;
		display: flex;
		border-bottom: 1upx solid #e6e6e6;
		&:last-child {
			border-bottom: none;
		}
		view {
			line-height: 80upx;
		}
		.dt-phase {
			width: 18%;
		}
		.dt-payment {
			width: 18%;
		}
		.dt-capital {
			width: 20%;
		}
		.dt-interest {
			width: 21%;
		}
		.dt-residue {
			width: 23%;
		}
	}
}
</style>
