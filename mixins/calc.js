//公式参考 https://baike.baidu.com/item/%E7%AD%89%E9%A2%9D%E6%9C%AC%E6%81%AF/3227456?fr=aladdin
//https://baike.baidu.com/item/%E7%AD%89%E9%A2%9D%E6%9C%AC%E6%81%AF%E6%B3%95/11049926
export default {
	methods: {
		monthRate: function(rate) {
			return rate / 100 / 12;
		},
		//计算等额本息
		calc_averageInterest: function(totalLoan, rate, phase) {
			let monthRate = this.monthRate(rate);
			totalLoan = this.ten_thousand(totalLoan);
			let averageInterest = {
				//月供
				monthPayment: 0,
				//还款总额
				totalPayment: 0,
				//总利息
				totalInterest: 0,
				//还款总额万元单位
				totalPayment_tt: 0,
				//总利息万元单位
				totalInterest_tt: 0,
				//总贷款万元单位
				totalLoan_tt: 0,
				//还款明细
				detail: [],
				paymentType: 1
			};
			averageInterest.totalLoan_tt = this.to_ten_thousand_unit(totalLoan);
			//计算月供公式
			let ratePow = Math.pow(1 + monthRate, phase)
			averageInterest.monthPayment = this.toFixed2(totalLoan * ((monthRate * ratePow) / (ratePow - 1)));
			//还款总额
			averageInterest.totalPayment = this.toFixed2(phase * averageInterest.monthPayment);
			averageInterest.totalPayment_tt = this.to_ten_thousand_unit(averageInterest.totalPayment);
			//总支付利息
			averageInterest.totalInterest = this.toFixed2(Number(averageInterest.totalPayment) - totalLoan);
			averageInterest.totalInterest_tt = this.to_ten_thousand_unit(averageInterest.totalInterest);

			//剩余本金
			let remain_capital = totalLoan;
			let list = [];
			//遍历明细
			for (let i = 1; i <= phase; i++) {
				//月供本金
				let t1 = totalLoan * monthRate * Math.pow(1 + monthRate, i - 1);
				let month_capital = t1 / (ratePow - 1);
				//月供利息
				let month_interest = this.toFixed2(Number(averageInterest.monthPayment) - Number(month_capital));
				//剩余本金
				remain_capital = Number(remain_capital) - Number(month_capital);

				averageInterest.detail.push({
					phase: i,
					monthPayment: averageInterest.monthPayment,
					monthCapital: this.toFixed2(month_capital),
					monthInterest: month_interest,
					remainCapital: this.toFixed2(remain_capital)
				});
				// list.push({
				// 	month: i % 12 === 0 ? 12 : i % 12,
				// 	monthPayment: averageInterest.monthPayment,
				// 	monthCapital: this.toFixed2(month_capital),
				// 	monthInterest: month_interest,
				// 	remainCapital: this.toFixed2(remain_capital)
				// });
				// if (i % 12 === 0) {
				// 	averageInterest.detail.push({
				// 		year: i / 12,
				// 		list: list
				// 	});
				// 	list = [];
				// }
			}
			return averageInterest;
		},

		//计算等额本金
		calc_averageCapital: function(totalLoan, rate, phase) {
			totalLoan = this.ten_thousand(totalLoan);
			let monthRate = this.monthRate(rate);
			let averageCapital = {
				monthPayment: 0,
				totalPayment: 0,
				totalInterest: 0,
				totalPayment_tt: 0,
				totalInterest_tt: 0,
				decrease: 0,
				totalLoan_tt: 0,
				detail: [],
				paymentType: 2
			}
			averageCapital.totalLoan_tt = this.to_ten_thousand_unit(totalLoan);
			//首月月供
			let monthPayment = (totalLoan / phase) + (totalLoan * monthRate)
			averageCapital.monthPayment = this.toFixed2(monthPayment);
			//每月递减
			let decrease = (totalLoan / phase) * monthRate
			averageCapital.decrease = this.toFixed2(decrease);
			//每月月供本金
			let capital = totalLoan / phase;
			//总利息
			averageCapital.totalInterest = this.toFixed2((((capital + totalLoan * monthRate) + capital * (1 + monthRate)) / 2) *
				phase - totalLoan);
			averageCapital.totalInterest_tt = this.to_ten_thousand_unit(averageCapital.totalInterest);
			//总额
			averageCapital.totalPayment = this.toFixed2(totalLoan + Number(averageCapital.totalInterest));
			averageCapital.totalPayment_tt = this.to_ten_thousand_unit(averageCapital.totalPayment);

			//剩余本金
			let remain_capital = totalLoan;
			let list = [];
			//遍历明细
			for (let i = 1; i <= phase; i++) {
				//月供利息
				let month_interest = this.toFixed2((totalLoan - ((i - 1) * capital)) * monthRate);
				//剩余本金
				remain_capital = this.toFixed2(totalLoan - (i * capital));

				let month_payment = this.toFixed2(monthPayment - decrease * (i - 1));

				averageCapital.detail.push({
					phase: i,
					monthPayment: month_payment,
					monthCapital: this.toFixed2(capital),
					monthInterest: month_interest,
					remainCapital: remain_capital
				});
				// list.push({
				// 	month: i % 12 === 0 ? 12 : i % 12,
				// 	monthPayment: month_payment,
				// 	monthCapital: this.toFixed2(capital),
				// 	monthInterest: month_interest,
				// 	remainCapital: remain_capital
				// });
				// if (i % 12 === 0) {
				// 	averageCapital.detail.push({
				// 		year: i / 12,
				// 		list: list
				// 	});
				// 	list = [];
				// }
			}
			return averageCapital;
		},
		//转为万元单位
		to_ten_thousand_unit: function(num) {
			return this.toFixed2(num / 10000);
		},
		//乘以10000
		ten_thousand: function(num) {
			return num * 10000;
		},
		toFixed2: function(num) {
			return parseFloat(num).toFixed(2);
		},
		/*
		 * 重新组合组合贷款数据；
		 * @param data1 商业贷款数据对象
		 * @param data2 公积金贷款数据对象
		 * */
		resetMixinsData: function(data1, data2) {
			let data = {
				monthPayment: 0,
				totalPayment: 0,
				totalInterest: 0,
				totalPayment_tt: 0,
				totalInterest_tt: 0,
				decrease: 0,
				totalLoan_tt: 0,
				detail: []
			}
			data.monthPayment = this.toFixed2(Number(data1.monthPayment) + Number(data2.monthPayment));
			data.totalPayment = this.toFixed2(Number(data1.totalPayment) + Number(data2.totalPayment));
			data.totalInterest = this.toFixed2(Number(data1.totalInterest) + Number(data2.totalInterest));
			data.totalPayment_tt = this.to_ten_thousand_unit(data.totalPayment);
			data.totalInterest_tt = this.to_ten_thousand_unit(data.totalInterest);
			data.totalLoan_tt = this.toFixed2(Number(data1.totalLoan_tt) + Number(data2.totalLoan_tt));
			if (typeof data1.decrease !== 'undefined') {
				data.decrease = this.toFixed2(Number(data1.decrease) + Number(data2.decrease));
			}
			for (var i = 0; i < data1.detail.length; i++) {
				var list = [];
				// var data1_list = data1.detail[i].list;
				// var data2_list = data2.detail[i].list;
				data.detail.push({
					phase: i+1,
					monthPayment: this.toFixed2(Number(data1.detail[i].monthPayment) + Number(data2.detail[i].monthPayment)),
					monthCapital: this.toFixed2(Number(data1.detail[i].monthCapital) + Number(data2.detail[i].monthCapital)),
					monthInterest: this.toFixed2(Number(data1.detail[i].monthInterest) + Number(data2.detail[i].monthInterest)),
					remainCapital: this.toFixed2(Number(data1.detail[i].remainCapital) + Number(data2.detail[i].remainCapital))
				});
				//         for(var k = 0; k < data1_list.length; k++){

				//             list.push({
				//                 month: data1_list[k].month,
				//                 monthPayment: calc.toFixed2(Number(data1_list[k].monthPayment)+Number(data2_list[k].monthPayment)),
				//                 monthCapital: calc.toFixed2(Number(data1_list[k].monthCapital)+Number(data2_list[k].monthCapital)),
				//                 monthInterest:calc.toFixed2(Number(data1_list[k].monthInterest)+Number(data2_list[k].monthInterest)),
				//                 remainCapital:calc.toFixed2(Number(data1_list[k].remainCapital)+Number(data2_list[k].remainCapital))
				//             });
				//         }
				//         data.detail.push({
				//             year: data1.detail[i].year,
				//             list: list
				//         });
			}
			return data;
		}
	}
}
