$(function () {

            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data,
                indicatorTypes: ["AverageTrueRange", "MassIndex"]
            });

        });