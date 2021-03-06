/**
 * Created by User on 2016/7/6.
 */

$(function () {

    //2个时间控件
    $("#from").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        onClose: function (selectedDate) {
            $("#to").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#to").datepicker({
        dateFormat: 'yy-mm-dd',
        changeMonth: true,
        onClose: function (selectedDate) {
            $("#from").datepicker("option", "maxDate", selectedDate);
        }
    });
})

//点击城市详情的跳转
function companyinfo(obj) {
    var companyid = obj.parentElement.abbr;
    window.location.href = Home + "/CompanyInfo/getInfo?companyid=" + companyid;
}

//推送热点图
function hotnum() {
    var data = [];
    var geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741, 30.335165],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '石家庄': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '长沙': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656, 35.23375],
        '合肥': [117.27, 31.86],
        '武汉': [114.31, 30.52],
        '大庆': [125.03, 46.58]
    };
    var myChart = echarts.init(document.getElementById('second'));
    var a1 = document.getElementById('from').value;
    var a2 = document.getElementById('to').value;

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    $.ajax({
        type: "post",
        url: Home + "/GetInfo/getHotPoin",
        async: true, //异步执行
        data: {from: a1, to: a2},
        success: function (msg) {
            var str = JSON.parse(msg);
            for (i = 0; i < str.length; i++) {
                data.push({
                    name: str[i].city,
                    value: str[i].hotnum
                });
            }
            option = {
                backgroundColor: '#404a59',
                title: {
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x: 'right',
                    data: ['other'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        name: 'other',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: function (val) {
                            return val[2] / 4000;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        }
                    },
                    {
                        name: 'Top 8',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 11)),
                        symbolSize: function (val) {
                            return val[2] / 2500;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]
            };

            myChart.setOption(option);
            myChart.on('click', function (params) {
                var a1 = document.getElementById('from').value;
                var a2 = document.getElementById('to').value;

                $("#infotable").bigPage({
                    ajaxData: {
                        url: Home + "/ClickInfo/clickhot",
                        params: {from: a1, to: a2, city: params.name}
                    }
                });
                var s = $("#a4").offset().top;
                $("html,body").animate({scrollTop: s}, 'slow');
            });
        }
    });

}

//推送时延热点图
function delayhotnum() {
    var data = [];
    var geoCoordMap = {
        '海门': [121.15, 31.89],
        '鄂尔多斯': [109.781327, 39.608266],
        '招远': [120.38, 37.35],
        '舟山': [122.207216, 29.985295],
        '齐齐哈尔': [123.97, 47.33],
        '盐城': [120.13, 33.38],
        '赤峰': [118.87, 42.28],
        '青岛': [120.33, 36.07],
        '乳山': [121.52, 36.89],
        '金昌': [102.188043, 38.520089],
        '泉州': [118.58, 24.93],
        '莱西': [120.53, 36.86],
        '日照': [119.46, 35.42],
        '胶南': [119.97, 35.88],
        '南通': [121.05, 32.08],
        '拉萨': [91.11, 29.97],
        '云浮': [112.02, 22.93],
        '梅州': [116.1, 24.55],
        '文登': [122.05, 37.2],
        '上海': [121.48, 31.22],
        '攀枝花': [101.718637, 26.582347],
        '威海': [122.1, 37.5],
        '承德': [117.93, 40.97],
        '厦门': [118.1, 24.46],
        '汕尾': [115.375279, 22.786211],
        '潮州': [116.63, 23.68],
        '丹东': [124.37, 40.13],
        '太仓': [121.1, 31.45],
        '曲靖': [103.79, 25.51],
        '烟台': [121.39, 37.52],
        '福州': [119.3, 26.08],
        '瓦房店': [121.979603, 39.627114],
        '即墨': [120.45, 36.38],
        '抚顺': [123.97, 41.97],
        '玉溪': [102.52, 24.35],
        '张家口': [114.87, 40.82],
        '阳泉': [113.57, 37.85],
        '莱州': [119.942327, 37.177017],
        '湖州': [120.1, 30.86],
        '汕头': [116.69, 23.39],
        '昆山': [120.95, 31.39],
        '宁波': [121.56, 29.86],
        '湛江': [110.359377, 21.270708],
        '揭阳': [116.35, 23.55],
        '荣成': [122.41, 37.16],
        '连云港': [119.16, 34.59],
        '葫芦岛': [120.836932, 40.711052],
        '常熟': [120.74, 31.64],
        '东莞': [113.75, 23.04],
        '河源': [114.68, 23.73],
        '淮安': [119.15, 33.5],
        '泰州': [119.9, 32.49],
        '南宁': [108.33, 22.84],
        '营口': [122.18, 40.65],
        '惠州': [114.4, 23.09],
        '江阴': [120.26, 31.91],
        '蓬莱': [120.75, 37.8],
        '韶关': [113.62, 24.84],
        '嘉峪关': [98.289152, 39.77313],
        '广州': [113.23, 23.16],
        '延安': [109.47, 36.6],
        '太原': [112.53, 37.87],
        '清远': [113.01, 23.7],
        '中山': [113.38, 22.52],
        '昆明': [102.73, 25.04],
        '寿光': [118.73, 36.86],
        '盘锦': [122.070714, 41.119997],
        '长治': [113.08, 36.18],
        '深圳': [114.07, 22.62],
        '珠海': [113.52, 22.3],
        '宿迁': [118.3, 33.96],
        '咸阳': [108.72, 34.36],
        '铜川': [109.11, 35.09],
        '平度': [119.97, 36.77],
        '佛山': [113.11, 23.05],
        '海口': [110.35, 20.02],
        '江门': [113.06, 22.61],
        '章丘': [117.53, 36.72],
        '肇庆': [112.44, 23.05],
        '大连': [121.62, 38.92],
        '临汾': [111.5, 36.08],
        '吴江': [120.63, 31.16],
        '石嘴山': [106.39, 39.04],
        '沈阳': [123.38, 41.8],
        '苏州': [120.62, 31.32],
        '茂名': [110.88, 21.68],
        '嘉兴': [120.76, 30.77],
        '长春': [125.35, 43.88],
        '胶州': [120.03336, 36.264622],
        '银川': [106.27, 38.47],
        '张家港': [120.555821, 31.875428],
        '三门峡': [111.19, 34.76],
        '锦州': [121.15, 41.13],
        '南昌': [115.89, 28.68],
        '柳州': [109.4, 24.33],
        '三亚': [109.511909, 18.252847],
        '自贡': [104.778442, 29.33903],
        '吉林': [126.57, 43.87],
        '阳江': [111.95, 21.85],
        '泸州': [105.39, 28.91],
        '西宁': [101.74, 36.56],
        '宜宾': [104.56, 29.77],
        '呼和浩特': [111.65, 40.82],
        '成都': [104.06, 30.67],
        '大同': [113.3, 40.12],
        '镇江': [119.44, 32.2],
        '桂林': [110.28, 25.29],
        '张家界': [110.479191, 29.117096],
        '宜兴': [119.82, 31.36],
        '北海': [109.12, 21.49],
        '西安': [108.95, 34.27],
        '金坛': [119.56, 31.74],
        '东营': [118.49, 37.46],
        '牡丹江': [129.58, 44.6],
        '遵义': [106.9, 27.7],
        '绍兴': [120.58, 30.01],
        '扬州': [119.42, 32.39],
        '常州': [119.95, 31.79],
        '潍坊': [119.1, 36.62],
        '重庆': [106.54, 29.59],
        '台州': [121.420757, 28.656386],
        '南京': [118.78, 32.04],
        '滨州': [118.03, 37.36],
        '贵阳': [106.71, 26.57],
        '无锡': [120.29, 31.59],
        '本溪': [123.73, 41.3],
        '克拉玛依': [84.77, 45.59],
        '渭南': [109.5, 34.52],
        '马鞍山': [118.48, 31.56],
        '宝鸡': [107.15, 34.38],
        '焦作': [113.21, 35.24],
        '句容': [119.16, 31.95],
        '北京': [116.46, 39.92],
        '徐州': [117.2, 34.26],
        '衡水': [115.72, 37.72],
        '包头': [110, 40.58],
        '绵阳': [104.73, 31.48],
        '乌鲁木齐': [87.68, 43.77],
        '枣庄': [117.57, 34.86],
        '杭州': [120.19, 30.26],
        '淄博': [118.05, 36.78],
        '鞍山': [122.85, 41.12],
        '溧阳': [119.48, 31.43],
        '库尔勒': [86.06, 41.68],
        '安阳': [114.35, 36.1],
        '开封': [114.35, 34.79],
        '济南': [117, 36.65],
        '德阳': [104.37, 31.13],
        '温州': [120.65, 28.01],
        '九江': [115.97, 29.71],
        '邯郸': [114.47, 36.6],
        '临安': [119.72, 30.23],
        '兰州': [103.73, 36.03],
        '沧州': [116.83, 38.33],
        '临沂': [118.35, 35.05],
        '南充': [106.110698, 30.837793],
        '天津': [117.2, 39.13],
        '富阳': [119.95, 30.07],
        '泰安': [117.13, 36.18],
        '诸暨': [120.23, 29.71],
        '郑州': [113.65, 34.76],
        '哈尔滨': [126.63, 45.75],
        '聊城': [115.97, 36.45],
        '芜湖': [118.38, 31.33],
        '唐山': [118.02, 39.63],
        '平顶山': [113.29, 33.75],
        '邢台': [114.48, 37.05],
        '德州': [116.29, 37.45],
        '济宁': [116.59, 35.38],
        '荆州': [112.239741, 30.335165],
        '宜昌': [111.3, 30.7],
        '义乌': [120.06, 29.32],
        '丽水': [119.92, 28.45],
        '洛阳': [112.44, 34.7],
        '秦皇岛': [119.57, 39.95],
        '株洲': [113.16, 27.83],
        '石家庄': [114.48, 38.03],
        '莱芜': [117.67, 36.19],
        '常德': [111.69, 29.05],
        '保定': [115.48, 38.85],
        '湘潭': [112.91, 27.87],
        '金华': [119.64, 29.12],
        '岳阳': [113.09, 29.37],
        '长沙': [113, 28.21],
        '衢州': [118.88, 28.97],
        '廊坊': [116.7, 39.53],
        '菏泽': [115.480656, 35.23375],
        '合肥': [117.27, 31.86],
        '武汉': [114.31, 30.52],
        '大庆': [125.03, 46.58]
    };
    var myChart = echarts.init(document.getElementById('second'));
    var a1 = document.getElementById('from').value;
    var a2 = document.getElementById('to').value;

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    $.ajax({
        type: "post",
        url: Home + "/GetInfo/getTimeHot",
        async: true, //异步执行
        data: {from: a1, to: a2},
        success: function (msg) {
            var str = JSON.parse(msg);
            for (i = 0; i < str.length; i++) {
                data.push({
                    name: str[i].city,
                    value: str[i].time
                });
            }
            option = {
                backgroundColor: '#404a59',
                title: {
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    y: 'bottom',
                    x: 'right',
                    data: ['other'],
                    textStyle: {
                        color: '#fff'
                    }
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#323c48',
                            borderColor: '#111'
                        },
                        emphasis: {
                            areaColor: '#2a333d'
                        }
                    }
                },
                series: [
                    {
                        name: 'other',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        data: convertData(data),
                        symbolSize: function (val) {
                            return val[2] / 1000000;
                        },
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: false
                            },
                            emphasis: {
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#ddb926'
                            }
                        }
                    },
                    {
                        name: 'Top 8',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 11)),
                        symbolSize: function (val) {
                            return val[2] / 1000000;
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'right',
                                show: true
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#f4e925',
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1
                    }
                ]
            };

            myChart.setOption(option);
            myChart.on('click', function (params) {
                var a1 = document.getElementById('from').value;
                var a2 = document.getElementById('to').value;

                $("#infotable").bigPage({
                    ajaxData: {
                        url: Home + "/ClickInfo/clickhot",
                        params: {from: a1, to: a2, city: params.name}
                    }
                });
                var s = $("#a4").offset().top;
                $("html,body").animate({scrollTop: s}, 'slow');
            });
        }
    });

}


//详细信息
function tableInfo() {
    var a1 = document.getElementById('from').value;
    var a2 = document.getElementById('to').value;

    $("#infotable").bigPage({
        ajaxData: {
            url: Home + "/GetInfo/getTableInfo",
            params: {from: a1, to: a2}
        }
    });
}

//推送量
function pushnum() {
    var myChart = echarts.init(document.getElementById('first'));
    var a1 = document.getElementById('from').value;
    var a2 = document.getElementById('to').value;
    var dateArr = [];
    var total = [];
    var java = [];
    var kmgate = [];
    var kmbackground = [];
    var kmhttpapi = [];
    var kmcompany = [];
    var Mozilla = [];
    $.ajax({
        type: "post",
        url: Home + "/GetInfo/getALLPushNum",
        async: true, //异步执行
        data: {from: a1, to: a2},
        success: function (data) {
            var data = JSON.parse(data);
            for (i = 0; i < data.total.length; i++) {
                dateArr.push(data.total[i].date);
                total.push(data.total[i].pushnum);
                java.push(getNumByDate(data.java, dateArr[i]));
                kmbackground.push(getNumByDate(data.kmbackground, dateArr[i]));
                kmgate.push(getNumByDate(data.kmgate, dateArr[i]));
                kmcompany.push(getNumByDate(data.kmcompany, dateArr[i]));
                kmhttpapi.push(getNumByDate(data.kmhttpapi, dateArr[i]));
                Mozilla.push(getNumByDate(data.Mozilla, dateArr[i]));
            }
            option = {
                title: {
                    text: ''
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['TOTAL', 'JAVA', 'kmbackground', 'kmcompany', 'kmgate', 'kmhttpapi', 'Mozilla']
                },
                xAxis: {
                    type: 'category',
                    data: dateArr,
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
                        name: 'TOTAL',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: total
                    },
                    {
                        name: 'JAVA',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: java
                    },
                    {
                        name: 'kmbackground',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: kmbackground
                    },
                    {
                        name: 'kmgate',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: kmgate
                    },
                    {
                        name: 'kmhttpapi',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: kmhttpapi
                    },
                    {
                        name: 'kmcompany',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: kmcompany
                    },
                    {
                        name: 'Mozilla',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: Mozilla
                    }
                ]
            };
            myChart.setOption(option);

        }
    });
}

//时延信息折线图
function pushTimeDelay() {
    var myChart = echarts.init(document.getElementById('first'));
    var a1 = document.getElementById('from').value;
    var a2 = document.getElementById('to').value;
    var date = [];
    var avg = [];
    var max = [];
    var min = [];
    $.ajax({
        type: "post",
        url: Home + "/CompanyInfo/getDelayInfo",
        async: true, //异步执行
        data: {from: a1, to: a2},
        success: function (msg) {
            var data = JSON.parse(msg);
            for (i = 0; i < data.length; i++) {
                date.push(data[i].date);
                avg.push(data[i].avg);
                max.push(data[i].max);
                min.push(data[i].min);
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
                        showSymbol: false,
                        hoverAnimation: false,
                        data: avg
                    },
                    {
                        name: '最大值',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: max
                    },
                    {
                        name: '最小值',
                        type: 'line',
                        showSymbol: false,
                        hoverAnimation: false,
                        data: min
                    }
                ]
            };
            myChart.setOption(option);
        },
    });
}

//根据日期获得相应的平台推送量
function getNumByDate(flat, date) {
    for (temp = 0, j = 0; j < flat.length; j++) {
        if (date == flat[j].date) {
            temp = flat[j].pushnum;
            break;
        }
    }
    return temp;
}

//推送时延
function pushtime() {
    var myChart = echarts.init(document.getElementById('third'));
    var a1 = document.getElementById('from').value;
    var a2 = document.getElementById('to').value;

    $.ajax({
        type: "post",
        url: Home + "/GetInfo/getPushTime",
        async: true, //异步执行
        data: {from: a1, to: a2},
        success: function (msg) {
            var str = JSON.parse(msg);
            for (i = 0; i < str.length; i++) {
                j1 = str[i].a;
                j2 = str[i].b;
                j3 = str[i].c;
                j4 = str[i].d;
                j5 = str[i].e;
                j6 = str[i].f;
                j7 = str[i].g;

            }
            var arr1 = [
                {value: j1, name: '时延<=1'},
                {value: j2, name: '1<时延<=5'},
                {value: j3, name: '5<时延<=10'},
                {value: j4, name: '10<时延<=30'},
                {value: j5, name: '30<时延<=60'},
                {value: j6, name: '时延>60'},
                {value: j7, name: '未应答'}
            ];
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
                    data: ['时延<=1', '1<时延<=5', '5<时延<=10', '10<时延<=30', '30<时延<=60', '时延>60', '未应答']
                },
                series: [
                    {
                        name: '推送分布',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: arr1,
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

        }

    });

}

//推送平台
function pushmo() {
    var myChart = echarts.init(document.getElementById('forth'));
    var a1 = document.getElementById('from').value;
    var a2 = document.getElementById('to').value;

    var arr1 = [];
    var arr2 = [];

    $.ajax({
        type: "post",
        url: Home + "/GetInfo/getPushMo",
        async: true, //异步执行
        data: {from: a1, to: a2},
        success: function (msg) {
            var str = JSON.parse(msg);
            for (i = 0; i < str.length; i++) {
                var obj = new Object();
                obj.name = str[i].flat;
                obj.value = str[i].num;
                arr1.push(obj);
                arr2.push(obj.name);
            }

            option = {
                title: {
                    text: '推送平台占比',
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
                    data: arr2
                },
                series: [
                    {
                        name: '平台占比',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: arr1,
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

        }

    });

}

//检查日期是否合法
function checkDate() {
    var a = /^(\d{4})-(\d{2})-(\d{2})$/
    if (!a.test(document.getElementById("from").value) || !a.test(document.getElementById("to").value)) {
        alert("日期格式不正确!");
        return false;
    } else {
        return true;
    }
}

//推送量页面调用，显示推送量相关信息
function PostNumData() {
    if (checkDate()) {
        pushnum();
        hotnum();
        pushmo();
        tableInfo()
    }
}
//推时延页面调用，显示推送时延信息
function PostTimeDelayData() {
    if (checkDate()) {
        pushTimeDelay();
        delayhotnum();
        pushtime();
        tableInfo()
    }
}
//商家详情‘查询’点击事件
function PostCompanyData() {
    if (checkDate()) {
        var a1 = $('#from').val();
        var a2 = $('#to').val();
        var companyid = $('#company_code').val();
        if (companyid == '') {
            alert("请输入商家编码！")
        }
        else {
            $('#a2').css('display','inline');
            $('#hidden').css('display','inline');
            var myChart = echarts.init(document.getElementById('push_figure'));
            $.ajax({
                type: "post",
                url: Home + "/CompanyInfo/getTimeInfo",
                async: true, //异步执行
                data: {from: a1, to: a2, companyid: companyid},
                success: function (msg) {
                    var data = JSON.parse(msg);
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
                                params: {companyCode: companyid, time: params.name, num: params.value}
                            }
                        });
                    });
                }
            })
        }
    }
}
//时间格式化
Date.prototype.Format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//时间计算
Date.prototype.DateAdd = function (strInterval, Number) {
    var dtTmp = this;
    switch (strInterval) {
        case 's' :
            return new Date(Date.parse(dtTmp) + (1000 * Number));
        case 'n' :
            return new Date(Date.parse(dtTmp) + (60000 * Number));
        case 'h' :
            return new Date(Date.parse(dtTmp) + (3600000 * Number));
        case 'd' :
            return new Date(Date.parse(dtTmp) + (86400000 * Number));
        case 'w' :
            return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
        case 'q' :
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        case 'm' :
            return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
        case 'y' :
            return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
    }
}