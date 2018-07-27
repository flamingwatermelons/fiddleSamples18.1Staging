$(function () {

            var data = [
                { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297 },
                { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090 },
                { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295 },
                { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229 },
                { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186 }
            ];

            $("#pointChart").igCategoryChart({
                width: "98%",
                height: "400px",
                legend: { element: "pointLegend" },
                title: "Population per Country",
                subtitle: "A comparison of population in 1995 and 2005",
                yAxisTitle: "Millions of People",
                dataSource: data,
                chartType: "point",
                isTransitionInEnabled: true,
                transitionInDuration: 500
            });
        });