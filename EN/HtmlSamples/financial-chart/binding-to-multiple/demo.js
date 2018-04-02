$(function () {

            var stocks = [];
            stocks.push(PriceData.MSFT());
            stocks.push(PriceData.TGT());

            $("#chart").igFinancialChart({
                dataSource: stocks,  
            });

        });