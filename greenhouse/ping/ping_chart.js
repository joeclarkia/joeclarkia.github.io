function load_ping_loss_chart()
{
    var chart;

    Highcharts.setOptions({
       global: { useUTC: false }
    });

    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'loss',
            type: 'line',
            zoomType: 'xy'
        },
        title: {
            text: 'Ping Loss to Greenhouse Temp Monitor'
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
                text: 'Loss Percentage'
            },
            opposite: true
        },
        tooltip: {
            formatter: function() {
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
            name: 'Loss Percent',
            color: 'rgba(0, 255, 0, .5)',
            data: []
   
        }]
    });

    return chart;
}

function load_ping_delay_chart()
{
    var chart;

    Highcharts.setOptions({
       global: { useUTC: false }
    });

    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'delay',
            type: 'line',
            zoomType: 'xy'
        },
        title: {
            text: 'Ping Response to Greenhouse Temp Monitor'
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
                text: 'loss/min/avg/max'
            },
            opposite: true
        },
        tooltip: {
            formatter: function() {
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
            name: 'Min RTT (ms)',
            color: 'rgba(255, 0, 0, .5)',
            data: []

        }, {
            name: 'Average RTT (ms)',
            color: 'rgba(0, 0, 255, .5)',
            data: []

        }, {
            name: 'Max RTT (ms)',
            color: 'rgba(0, 255, 255, .5)',
            data: []

        }]
    });

    return chart;
}
