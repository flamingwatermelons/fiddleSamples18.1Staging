$(function () {
            var data = PriceData.AMZN();
            $("#chart").igFinancialChart({
                dataSource: data
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
                min: -180,
                max: 179,
                value: 0,
                slide: function (event, ui) {
                    $("#chart").igFinancialChart("option", "xAxisLabelAngle", ui.value);
					$("#xAxisAngleLabel").text(ui.value);
                }
            });

            $("#yAxisAngleSlider").slider({
                min: -90,
                max: 269,
                value: 0,
                slide: function (event, ui) {
                    $("#chart").igFinancialChart("option", "yAxisLabelAngle", ui.value);
					$("#yAxisAngleLabel").text(ui.value);
                }
            });
        });