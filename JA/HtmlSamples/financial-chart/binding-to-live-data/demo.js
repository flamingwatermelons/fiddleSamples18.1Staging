$(function () {
function AlphaVantageService() {
            this.API_KEY = "ZCOEMEHP7RSKEW78";
            this.SERVICE_URL = "https://www.alphavantage.co/query?function={0}&symbol={1}&outputsize={2}&apikey=" + this.API_KEY;
        }
        AlphaVantageService.prototype.timeSeriesDaily = function (symbol, truncate, callback) {
            var outputSize = truncate ? "compact" : "full";
            var url = this.SERVICE_URL.replace("{0}", "TIME_SERIES_DAILY").replace("{1}", symbol).replace("{2}", outputSize);


            $.ajax({
                type: "Get",
                url: url,
                //async: false,
                dataType: "json",
                success: function (data) {
                    var items = data["Time Series (Daily)"];
                    var result = [];
                    for (ii in items) {
                        var item = items[ii];
                        result.push({
                            time: new Date(ii),
                            open: +item["1. open"],
                            high: +item["2. high"],
                            low: +item["3. low"],
                            close: +item["4. close"],
                            volume: +item["5. volume"]
                        });
                    }
                    callback(result);
                }
            });
        }

        $(function () {
            
            var alpha = new AlphaVantageService();
            alpha.timeSeriesDaily("MSFT", true, createGrid);

            function createGrid(data) {
                $("#chart").igFinancialChart({
                    dataSource: data
                });

                setTimeout(checkForData, 60000);
            }
            function updateGrid(data) {
                $("#chart").igFinancialChart("option", "dataSource", data);
                setTimeout(checkForData, 60000);
            }
            function checkForData() {
                alpha.timeSeriesDaily("MSFT", true, updateGrid);
                
            }
        });
});