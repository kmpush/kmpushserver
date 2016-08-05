$(function () {
    if(data) {
        showComInfo();
    }
});
//显示商家推送时延
function showComInfo() {
    $('#a2').css('display','inline');
    $('#hidden').css('display','inline');
    var myChart = echarts.init(document.getElementById('push_figure'));

    var max = [];
    var min = [];
    var avg = [];
    var date = [];
    for (i = 0; i < data.length; i++) {
        date.push(data[i].date);
        max.push(data[i].max);
        min.push(data[i].min);
        avg.push(data[i].avg);
    }
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['平均值', '最大值', '最小值']
        },
        xAxis: {
            type: 'category',
            data: date,
            boundaryGap: false,
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
                symbolSize: 10,
                showSymbol: false,
                hoverAnimation: false,
                data: avg
            },
            {
                name: '最大值',
                symbolSize: 10,
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: max
            },
            {
                name: '最小值',
                type: 'line',
                symbolSize: 10,
                showSymbol: false,
                hoverAnimation: false,
                data: min
            }
        ]
    };
    myChart.setOption(option);
    myChart.on('click', function (params) {
        $("#comtable").bigPage({
            ajaxData: {
                url: Home + "/CompanyInfo/getMoreInfo",
                params: {companyCode: $("#companyid").text(), time: params.name, num: params.value}
            }
        });
    });
}