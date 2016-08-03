/**
 * Created by User on 2016/7/12.
 */

var myChart = echarts.init(document.getElementById('first'));
option = {
    title: {
        text: ''
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [],
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '20%'],
        splitLine: {
            show: true
        }
    },
    series: [
        {
            name: '',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: [],
        }
    ]
};
myChart.setOption(option);
