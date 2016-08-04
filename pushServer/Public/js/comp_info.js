/**
 * Created by User on 2016/8/1.
 */

var myChart = echarts.init(document.getElementById('push_figure'));
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
            name: '平均值',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: []
        },
        {
            name: '最大值',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: []
        },
        {
            name: '最小值',
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: []
        }
    ]
};
myChart.setOption(option);

