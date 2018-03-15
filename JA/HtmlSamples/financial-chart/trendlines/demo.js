$(function () {

            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data,
                trendLineType: "quadraticFit"
            });

        });