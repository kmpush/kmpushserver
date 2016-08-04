/**
 * Created by User on 2016/7/12.
 */
var myChart = echarts.init(document.getElementById('third'));
option = {
    title: {
        text: '推送时延分布图',
        //subtext: '纯属虚构',
        x: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top: '33%',
        left: '10%',
        data: ['1']
    },
    series: [
        {
            name: '推送分布',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 335, name: '1'}],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
