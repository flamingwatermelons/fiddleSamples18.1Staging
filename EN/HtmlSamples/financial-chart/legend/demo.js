$(function () { 
            var stocks = [];
            stocks.push(PriceData.MSFT());
            stocks.push(PriceData.TGT());

            $("#chart").igFinancialChart({
                legend: { element: "chartLegend" },
                dataSource: stocks,
                volumeType: "line",
                chartType: "bar",
                zoomSliderType: "bar",

            });
        });