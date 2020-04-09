<template>
	<view>
		<!--    公积金模块开始    -->
		<view class="calculator-form-item">
			<view class="form-row">
				<label for="" class="form-label">贷款金额（万元）</label>
				<input type="number" v-model="loanAmount" placeholder="请输入公积金贷款金额" class="form-input" />
			</view>
			<view class="form-row slt-row">
				<label for="" class="form-label">贷款期限</label>
				<view class="slt-text">
					<picker @change="bindPhasePickerChange" :value="phaseIndex" range-key="text" :range="phaseArray">
						<view class="uni-input">{{ phaseArray[phaseIndex].text }}</view>
					</picker>
				</view>
			</view>
			<view class="form-row slt-row">
				<label for="" class="form-label">公积金贷款利率</label>
				<view class="slt-text">
					<picker @change="bindRatePickerChange" :value="rateIndex" range-key="text" :range="rateArray">
						<view class="uni-input">{{ rateArray[rateIndex].text }}</view>
					</picker>
				</view>
			</view>
			<view class="form-row slt-row">
				<label for="" class="form-label">还款方式</label>
				<view class="slt-text">
					<picker @change="bindTypePickerChange" :value="paymentTypeIndex" range-key="text" :range="paymentTypeArray">
						<view class="uni-input">{{ paymentTypeArray[paymentTypeIndex].text }}</view>
					</picker>
				</view>
			</view>
			<view class="form-bottom"><button class="form-btn" @click="calc()" type="primary">开始计算</button></view>
		</view>
	</view>
</template>

<script>
import calc from '@/mixins/calc.js';
export default {
	data() {
		return {
			//贷款总金额
			loanAmount: '',
			//贷款期数picker下标
			phaseIndex: 19,
			//贷款期数
			phase: 240,
			//贷款利率picker下标
			rateIndex: 0,
			//贷款利率
			rate: 3.25,
			paymentTypeIndex: 0,
			paymentType: 1,
			numReg: /^([1-9]\d*.?\d*|0.\d*[1-9]\d*)$/,
			//公积金最大金额120万
			accumu_max_loan: 120 * 1e4
		};
	},
	mixins: [calc],
	computed: {
		phaseArray() {
			let arr = [];
			for (let i = 1; i < 31; i++) {
				let phase = i * 12;
				let text = i + '年（' + phase + '期）';
				arr.push({
					text: text,
					value: phase
				});
			}
			return arr;
		},
		rateArray() {
			return this.$store.state.rate.accumulation_fund_rate_array;
		},
		paymentTypeArray() {
			return this.$store.state.rate.payment_type_array;
		}
	},
	methods: {
		bindPhasePickerChange(e) {	
			this.phaseIndex = e.target.value;
			this.phase = this.phaseArray[this.phaseIndex].value;
		},
		bindRatePickerChange(e) {
			this.rateIndex = e.target.value;
			this.rate = this.rateArray[this.rateIndex].value;
		},
		bindTypePickerChange(e) {
			this.paymentTypeIndex = e.target.value;
			this.paymentType = this.paymentTypeArray[this.paymentTypeIndex].value;
		},
		calc() {
			console.log('total:', this.loanAmount, 'phase:', this.phase, 'rate:', this.rate, 'paymentType:', this.paymentType);
			if (this.loanAmount == '') {
				uni.showToast({
					icon: 'none',
					title: '请输入贷款金额'
				});
			} else {
				let data = '';
				if (!this.numReg.test(this.loanAmount)) {
					uni.showToast({
						icon: 'none',
						title: '贷款金额格式不正确'
					});
					return false;
				}
				if (this.ten_thousand(this.loanAmount) > this.accumu_max_loan) {
					uni.showToast({
						icon: 'none',
						title: '公积金贷款金额不能超过120万'
					});
					return false;
				}
				if (this.paymentType == 1) {
					data = this.calc_averageInterest(this.loanAmount, this.rate, this.phase);
				} else {
					data = this.calc_averageCapital(this.loanAmount, this.rate, this.phase);
				}
				this.$store.dispatch('setResult',data);
				console.log(this.$store.state);
				uni.navigateTo({
					url: '../caclResult/caclResult',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});		
			}
		}
	}
};
</script>

<style></style>
