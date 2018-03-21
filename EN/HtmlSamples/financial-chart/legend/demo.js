$(function () {
			var data = [];
			data.push(PriceData.AMZN());
			data.push(PriceData.GOOG());
			data.push(PriceData.MSFT());
			data.push(PriceData.TGT());
			data.push(PriceData.TSLA());

            $("#chart").igFinancialChart({
                dataSource: data,
				legend: { element: "chartLegend" }
            });
        });