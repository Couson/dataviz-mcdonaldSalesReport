/*
lineCharts
 */
var totalSales =[{
    name: 'Total',
    data: [ 9350979,  9682759,  9825257,  9716585, 10121412, 10074600,
        10263807, 10882057, 10609820, 10619003, 10900886, 10498980,
        11192197, 11824369, 11437109, 11393492, 11596984, 11878171,
        11536662, 12559477, 12225562, 11964460, 12532702, 12836124,
        13048511, 13347771, 12677300, 13251875, 13687830, 12840517,
        13338406, 13542320, 13247269, 11374035, 12299535, 11539095,
        12558735, 12278447, 12074324, 12250084, 12686117, 11798203,
        11547979, 11954952, 11981653]
}];


var monthlyByItem = [{
    name: 'HM',
    data: [5598648, 5840210, 5909899, 5799715, 6080407, 6056108, 6163373,
        6537463, 6382884, 6343865, 6490244, 6340076, 6685774, 7152982,
        6817973, 6863707, 6964094, 7167558, 6840830, 7497876, 7352926,
        7170291, 7549336, 7707776, 7887763, 7990228, 7654312, 7947352,
        8186393, 7629715, 8012517, 8060250, 7922921, 6781234, 7386402,
        6954506, 7568561, 7350256, 7267799, 7317841, 7620829, 7124175,
        6956441, 7190660, 7142860]
}, {
    name: 'CF',
    data: [2352671, 2394392, 2461847, 2455722, 2533501, 2504226, 2547327,
        2723694, 2617860, 2663903, 2748759, 2599316, 2808128, 2911445,
        2886869, 2813861, 2878324, 2962089, 2944269, 3173062, 3063462,
        2987291, 3096246, 3186172, 3234631, 3328733, 3139645, 3285062,
        3438398, 3256752, 3338673, 3467244, 3327230, 2862020, 3052314,
        2874069, 3128423, 3061564, 3003545, 3073157, 3175075, 2921766,
        2852679, 2995435, 3023767]
},  {
    name: 'FF',
    data: [1399660, 1448157, 1453511, 1461148, 1507504, 1514266, 1553107,
        1620900, 1609076, 1611235, 1661883, 1559588, 1698295, 1759942,
        1732267, 1715924, 1754566, 1748524, 1751563, 1888539, 1809174,
        1806878, 1887120, 1942176, 1926117, 2028810, 1883343, 2019461,
        2063039, 1954050, 1987216, 2014826, 1997118, 1730781, 1860819,
        1710520, 1861751, 1866627, 1802980, 1859086, 1890213, 1752262,
        1738859, 1768857, 1815026]
}

];  
var monthlyByRegion = [
    {
    name: 'NE',
    data: [1920995, 1959215, 2027678, 1997833, 2108274, 2091980, 2140709,
        2205580, 2153816, 2168676, 2234393, 2133837, 2301686, 2453707,
        2339264, 2359080, 2416127, 2465093, 2390742, 2537829, 2523511,
        2444177, 2621029, 2647775, 2640761, 2814604, 2609253, 2722007,
        2832936, 2641786, 2742490, 2786194, 2720638, 2320956, 2560458,
        2373509, 2593906, 2506324, 2507077, 2496457, 2645148, 2466669,
        2406800, 2465004, 2445513]
    }, {
    name: 'NW',
    data: [1871601, 1960649, 1939014, 1946570, 1979297, 2033895, 2015714,
        2139988, 2124603, 2135427, 2162560, 2111721, 2248713, 2357234,
        2299477, 2237613, 2302404, 2389953, 2302992, 2561169, 2404606,
        2426288, 2517947, 2528700, 2629108, 2707575, 2553334, 2639394,
        2704249, 2615408, 2637788, 2754238, 2670893, 2288925, 2416298,
        2239571, 2557614, 2434056, 2419587, 2403681, 2553187, 2373539,
        2323544, 2399015, 2415468]
    }, {
    name: 'SE',
    data: [1825056, 1933574, 1901402, 1908892, 2013220, 1997693, 1977396,
        2164116, 2131997, 2089130, 2130742, 2110360, 2216731, 2306213,
        2283604, 2242638, 2259342, 2330922, 2275408, 2451183, 2431953,
        2359954, 2413490, 2537451, 2577139, 2617479, 2500256, 2659690,
        2668593, 2485609, 2630319, 2666406, 2586340, 2223673, 2376833,
        2306116, 2491027, 2401803, 2384291, 2396331, 2475925, 2285149,
        2240780, 2348987, 2367390]
    }, {
    name: 'SW',
    data: [1874274, 1969544, 2022124, 1990964, 2082809, 2023180, 2095066,
        2250241, 2127713, 2170377, 2247531, 2143326, 2260916, 2419317,
        2300432, 2328692, 2339363, 2414319, 2357318, 2585228, 2462909,
        2429262, 2545089, 2592250, 2637128, 2662916, 2560765, 2676031,
        2804042, 2599733, 2688708, 2736147, 2710087, 2288687, 2526092,
        2352366, 2524880, 2537643, 2446863, 2540149, 2525821, 2350121,
        2322284, 2394712, 2424378]
    }, {
    name: 'C',
    data: [1859053, 1859777, 1935039, 1872326, 1937812, 1927852, 2034922,
        2122132, 2071691, 2055393, 2125660, 1999736, 2164151, 2287898,
        2214332, 2225469, 2279748, 2277884, 2210202, 2424068, 2402583,
        2304779, 2435147, 2529948, 2564375, 2545197, 2453692, 2554753,
        2678010, 2497981, 2639101, 2599335, 2559311, 2251794, 2419854,
        2267533, 2391308, 2398621, 2316506, 2413466, 2486036, 2322725,
        2254571, 2347234, 2328904]}
];

var dailyByItem = [
    {name: 'HM',
    data: [185416, 182961, 178589, 182018, 182916, 180302, 178959, 180267,
        180141, 180780, 183119, 178567, 182455, 182749, 182338, 179219,
        180228, 180964, 178905, 178139, 180744, 183768, 179441, 180422,
        179373, 180979, 184323, 175417, 177816, 180070, 177263]
    }, {
    name: 'CF',
    data: [76915, 72779, 77157, 76289, 75062, 75516, 74938, 72086, 71568,
        77231, 78995, 77221, 77581, 74726, 77453, 76234, 77928, 74637,
        73338, 74688, 77204, 78540, 73812, 74510, 78254, 76480, 78012,
        76752, 74502, 74910, 77353]
    }, {
    name: 'FF',
    data: [51540, 41451, 40602, 42141, 47568, 47324, 46973, 53896, 37087,
        40490, 46512, 42379, 47133, 46343, 51287, 41634, 38401, 45193,
        42500, 44859, 48784, 53634, 41246, 39337, 45160, 44178, 45506,
        51330, 53477, 39114, 42581]
}];  

var dailylyByRegion = [
    {
    name: 'NE',
    data: [61763, 58934, 60507, 63540, 64358, 62983, 65931, 57922, 56837,
        64391, 63755, 62132, 63069, 66497, 59609, 57729, 63915, 59761,
        62419, 60421, 63078, 59280, 60195, 64090, 63132, 62045, 64044,
        64106, 60496, 60083, 63973]
}, {
    name: 'NW',
    data: [64014, 58754, 60065, 60562, 62323, 62005, 60143, 61383, 60452,
        58843, 61590, 61178, 64049, 61305, 62132, 57956, 57856, 60531,
        56053, 59026, 61136, 63095, 57275, 55728, 62337, 62217, 59534,
        61165, 59126, 60789, 58979]

}, {
    name: 'SE',
    data: [61656, 59492, 55794, 59330, 60667, 58744, 59246, 60482, 58609,
        56649, 59609, 57379, 61299, 56882, 62926, 60196, 56565, 56592,
        58365, 55878, 58744, 62422, 58328, 57392, 57127, 56871, 61466,
        59184, 62371, 57078, 57713]
}, {
    name: 'SW',
    data: [66018, 59425, 60164, 57209, 57334, 57582, 57060, 63557, 55288,
        61254, 61821, 59596, 59404, 60383, 64578, 60299, 59230, 63157,
        60160, 63117, 63757, 65741, 58885, 59614, 58902, 60187, 64499,
        58149, 62271, 56688, 58945]
}, {
    name: 'C',
    data: [60420, 60586, 59818, 59807, 60864, 61828, 58490, 62905, 57610,
        57364, 61851, 57882, 59348, 58751, 61833, 60907, 58991, 60753,
        57746, 59244, 60017, 65404, 59816, 57445, 61289, 60317, 58298,
        60895, 61531, 59456, 57587]

}]

var dailyRegionsGroupByDate = [
{
    name: 'NE',
    data: [250188, 250954, 250517, 259612, 238574, 233695, 252903]
}, {
    name: 'NW',
    data: [245020, 241771, 244614, 243749, 250624, 234437, 232492]

}, {
    name: 'SE',
    data: [232658, 233282, 237387, 234056, 247486, 236625, 226400]
}, {
    name: 'SW',
    data: [241089, 237277, 244602, 239349, 259894, 233897, 240262]
}, {
    name: 'C',
    data: [243700, 236809, 238718, 238153, 250562, 238919, 233618]

}];

var dailyItemsGroupByDate = [
    {
    name: 'HM',
    data: [725474, 721367, 725219, 717869, 731789, 721762, 720019]
}, {
    name: 'CF',
    data: [308175, 302101, 305797, 303620, 304994, 294393, 306826 ]
}, {
    name: 'FF',
    data: [179006, 176625, 184822, 193430, 210357, 161418, 158830]
}];


var xAxisMonthly = ['Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16', 'Jun-16',
'Jul-16', 'Aug-16', 'Sep-16', 'Oct-16', 'Nov-16', 'Dec-16',
'Jan-17', 'Feb-17', 'Mar-17', 'Apr-17', 'May-17', 'Jun-17',
'Jul-17', 'Aug-17', 'Sep-17', 'Oct-17', 'Nov-17', 'Dec-17',
'Jan-18', 'Feb-18', 'Mar-18', 'Apr-18', 'May-18', 'Jun-18',
'Jul-18', 'Aug-18', 'Sep-18', 'Oct-18', 'Nov-18', 'Dec-18',
'Jan-19', 'Feb-19', 'Mar-19', 'Apr-19', 'May-19', 'Jun-19',
'Jul-19', 'Aug-19', 'Sep-19'];
var xAxisDaily = ['Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday',
'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday',
'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday',
'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
'Sunday']
var xAxisGrouped = [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


var xAxisTitle = 'date';
var yAxisTitle = 'sales in USD($)';

var graphType = 'line';
var mainTitleByItem = 'McDonald’s Monthly Sales by Food Items';
var mainTitleByRegion = 'McDonald’s Monthly Sales by Regions';

var dailyTitleByItem = 'McDonald’s Daily Sales by Food Items';
var dailyTitleByRegion = 'McDonald’s Daily Sales by Regions';

var dailyItemsTitleGroupByDate = 'McDonald’s Grouped Daily Sales by food items';
var dailyRegionsTitleGroupByDate = 'McDonald’s Grouped Daily Sales by regions'

var subTitle = 'Source: WorldClimate.com';

function extremeVal (chart) {
    for (var j = 0; j < chart.series.length; j++) {
    //     // console.log(chart.series.length);
    var min = chart.series[j].dataMin;
    var max = chart.series[j].dataMax;
    
        for (var i = 0; i < chart.series[j].points.length; i++) {
            if (chart.series[j].points[i].y === max) {
                chart.series[j].points[i].update({
                    color: 'red',
                        marker: {
                            symbol: 'triangle'
                        }
                })
            };
            if (chart.series[j].points[i].y === min) {
                chart.series[j].points[i].update({
                        color: 'green',
                        marker: {
                            symbol: 'triangle-down'
                          }
                });
            };
        }
    };

}


// function averageVal (chart) {
//     for (var j = 0; j < chart.series.length; j++) {
//         var outter = 0;
//         for (var k = 0; k < chart.series[j].length; k++) {
//             var series_ave = arrSum(chart.series[j][k]);
//             console.log(series_ave);
//         }
//         outter += series_ave

//         chart.series.yAxis.update({
//             plotLines: [{
//                 color: 'red', // Color value
//                 dashStyle: 'longdashdot', // Style of the plot line. Default to solid
//                 value: 100000000,//outter / chart.series[j].length,
//                 width: 2 // Width of the line    
//             }]
//         });
//     };
//     // outter_ave += inner_ave
// }


document.addEventListener('DOMContentLoaded', function () {
    Highcharts.chart('PlaceHolder_0', {
        chart: {
            type: graphType
        },
        title: {
            text: 'Total Sales from Jan 2016 to Sept 2019'
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            title: {
                text: xAxisTitle
            },
            categories: xAxisMonthly,
            tickInterval: 3,
            plotBands: [{
                color: 'orange', // Color value
                from: 32, // Start of the plot band
                to: 34,// End of the plot band
                label: { 
                    text: 'greatest drop: 15% from last month', // Content of the label. 
                    }
              }],
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
            plotLines: [{
                        color: 'red', // Color value
                        value: 11752186.933333334,//outter / chart.series[j].length,
                        width: 2,// Width of the line 
                        label: { 
                            text: 'average: 11.8M USD', // Content of the label. 
                            }
                        }]
            // tickInterval: 500000,
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: true,
                },
                dataLabels: {
                    enabled: false,
                }
            }
        },

        series: totalSales
    }, extremeVal);

    Highcharts.chart('PlaceHolder_1', {
        chart: {
            type: graphType
        },
        title: {
            text: mainTitleByItem
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            title: {
                text: xAxisTitle
            },
            categories: xAxisMonthly,
            tickInterval: 3,
            plotBands: [{
                color: 'orange', // Color value
                from: 32, // Start of the plot band
                to: 34,// End of the plot band
                label: { 
                    text: 'greatest drop: 15% from last month', // Content of the label. 
                    }
              }],
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
            // tickInterval: 500000,
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: true,
                },
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                    }
                }
            }
        },

        series: monthlyByItem
    }, extremeVal);

    Highcharts.chart('PlaceHolder_2', {
        chart: {
            type: graphType
        },
        title: {
            text: mainTitleByRegion
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            title: {
                text: xAxisTitle
            },
            categories: xAxisMonthly,
            tickInterval: 3,
            plotBands: [{
                color: 'orange', // Color value
                from: 27, // Start of the plot band
                to: 32,// End of the plot band
                label: { 
                    text: 'vintage', // Content of the label. 
                    }
              }],
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
            tickInterval: 500000,
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: true
                },
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                    }
                }
            }
        },

        series: monthlyByRegion
    }, extremeVal);

    Highcharts.chart('PlaceHolder_3', {
        chart: {
            type: 'bar'//graphType
        },
        title: {
            text: dailyTitleByItem
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            title: {
                text: xAxisTitle
            },
            categories: xAxisDaily,
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

        plotOptions: {
            series: {
                stacking: 'normal',
                marker: {
                    enabled: true
                },
                dataLabels: {
                    enabled: true,
                }
            }
        },

        series: dailyByItem
    }, extremeVal);

    Highcharts.chart('PlaceHolder_4', {
        chart: {
            type: 'line'
        },
        title: {
            text: dailyTitleByItem
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            title: {
                text: xAxisTitle
            },
            categories: xAxisDaily,
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

        plotOptions: {
            series: {
                // stacking: 'normal',
                marker: {
                    enabled: true
                },
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                    }
                }
            }
        },

        series: dailyByItem
    });

    Highcharts.chart('PlaceHolder_5', {
        chart: {
            type: graphType
        },
        title: {
            text: dailyItemsTitleGroupByDate
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            title: {
                text: xAxisTitle
            },
            categories: xAxisGrouped,
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

        plotOptions: {
            series: {
                // stacking: 'normal',
                marker: {
                    enabled: true
                },
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                    }
                }
            }
        },

        series: dailyItemsGroupByDate
    }, extremeVal);

    Highcharts.chart('PlaceHolder_6', {
        chart: {
            type: graphType
        },
        title: {
            text: dailyRegionsTitleGroupByDate
        },
        subtitle: {
            text: subTitle
        },
        xAxis: {
            title: {
                text: xAxisGrouped
            },
            categories: xAxisGrouped,
        },
        yAxis: {
            title: {
                text: yAxisTitle
            },
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },

        plotOptions: {
            series: {
                // stacking: 'normal',
                marker: {
                    enabled: true
                },
                dataLabels: {
                    enabled: true,
                    formatter: function () {
                    }
                }
            }
        },

        series: dailyRegionsGroupByDate
    }, extremeVal);
});


