function load_greenhouse_chart() {
    var chart;

        Highcharts.setOptions({
           global: { useUTC: false }
        });

        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'line',
                zoomType: 'xy'
            },
            title: {
                text: 'Greenhouse Temps'
            },
            subtitle: {
                text: 'STARTTIME to STOPTIME'
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: 'Date/Time'
                },
                type: "datetime",
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: 'Temperature (F)'
                },
                opposite: true
            },
            tooltip: {
                formatter: function() {
//                    return false;
                        var datetime = Highcharts.dateFormat('%H:%M', this.x);
                        return ''+
                        datetime + ', ' + this.y;
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'top',
                x: 25,
                y: 50,
                floating: true,
                backgroundColor: '#FFFFFF',
                borderWidth: 1
            },
            plotOptions: {
                line: {
                    marker: {
                        radius: 3,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    }
                }
            },
            series: [{
                name: 'Greenhouse',
                color: 'rgba(0, 255, 0, .5)',
                data: []
    
            }, {
                name: 'Outdoor',
                color: 'rgba(255, 0, 0, .5)',
                data: []

            }, {
                name: 'TDiff',
                color: 'rgba(0, 0, 255, .5)',
                data: []



            }]
        });
    
   return chart;
}
