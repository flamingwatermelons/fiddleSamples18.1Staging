$(function () {
            var stocks = []; 
            stocks.push(PriceData.AMZN());
            stocks.push(PriceData.GOOG());

            $("#chart").igFinancialChart({
                dataSource: stocks,
                zoomSliderType: "none", 
                volumeType: "line", 
                xAxisMode: "ordinal",
                yAxisMode: "numeric",
                xAxisLabelVisibility: "visible",
                yAxisLabelVisibility: "visible",
                xAxisLabelAngle: 0,
                yAxisLabelAngle: 0,
            }); 
            
            $("#xAxisMode").selectmenu({
                select: function(evt, ui) {
                    $("#chart").igFinancialChart("option", "xAxisMode", ui.item.value);
                }
            });
            $("#yAxisMode").selectmenu({
                select: function(evt, ui) {
                    $("#chart").igFinancialChart("option", "yAxisMode", ui.item.value);
                }
            });
            $("#xAxisLabelVisibility").selectmenu({
                select: function(evt, ui) {
                    $("#chart").igFinancialChart("option", "xAxisLabelVisibility", ui.item.value);
                }
            });
            $("#yAxisLabelVisibility").selectmenu({
                select: function(evt, ui) {
                    $("#chart").igFinancialChart("option", "yAxisLabelVisibility", ui.item.value);
                }
            });
            
            $("#xAxisAngleSlider").slider({
                min: 0, max: 180, value: 0,
                slide: function (event, ui) {
                    $("#chart").igFinancialChart("option", "xAxisLabelAngle", ui.value);
                    $("#xAxisAngleLabel").text(ui.value);
                }
            });

            $("#yAxisAngleSlider").slider({
                min: -90, max: 90, value: 0,
                slide: function (event, ui) {
                    $("#chart").igFinancialChart("option", "yAxisLabelAngle", ui.value);
                    $("#yAxisAngleLabel").text(ui.value);
                }
            });
        });