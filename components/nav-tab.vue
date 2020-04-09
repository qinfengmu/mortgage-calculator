<template>
	<view>
		<view class="nav-tab" :class="{'nav-tab1': navType == 1}">
			<view v-for="nav in navTabs" :key="nav.type" @tap="switchTabs(nav)" class="nav-tab-item" :class="{'nav-tab-item-active': nav.type==currentTab}">
				<text>{{nav.name}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {		
			navTabs: {
				type: Array,
				default: function(){
					return [];
				}
			},
			navType: {
				type: [String, Number],
				default: 0
			}
		},
		data() {
			return {
				currentTab: 0
			}
		},
		methods:{
			switchTabs (nav){
				this.currentTab = nav.type;
				this.$emit('tabChange', nav, nav.type);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.nav-tab {
		display: flex;		
		// margin-top: 10upx;
		padding: 0 20upx;
		align-items: center;
		justify-content: space-between;
		background: $uni-bg-color;
		text-align:center;		
		color:$uni-text-color-grey1;
		font-size: $uni-font-size-lg;
		border-bottom: 1upx solid #eee;
		text {
			padding: 20upx 0;
			display: inline-block;	
			border-bottom: 6upx solid transparent;
		}
		.nav-tab-item-active {
			text {
				border-bottom-color: #00b3fe;		
				color:#00b3fe;
				font-weight: bold;
			}			
		}
	}
	.nav-tab1 {
		padding: 0;
		justify-content: flex-start;
		.nav-tab-item{
			margin-right: 30upx;
		}
	}
</style>
