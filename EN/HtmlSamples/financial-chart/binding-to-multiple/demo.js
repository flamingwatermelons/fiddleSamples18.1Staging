$(function () {

            var stocks = [];
            stocks.push(StockData.MSFT());
            stocks.push(StockData.TGT());

            $("#chart").igFinancialChart({
                dataSource: stocks,  
            });

        });