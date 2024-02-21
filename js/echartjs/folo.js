(function () {
    var chartDom = document.querySelector(".folo-radian .folo-chart");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "line" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        angleAxis: {
            max: 2,
            startAngle: 30,
            splitLine: {
                show: false
            }
        },
        radiusAxis: {
            type: 'category',
            data: ['v', 'w', 'x', 'y', 'z'],
            z: 10
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [4, 3, 2, 1, 0],
            coordinateSystem: 'polar',
            name: 'Without Round Cap',
            itemStyle: {
                borderColor: 'red',
                opacity: 0.8,
                borderWidth: 1
            }
        }, {
            type: 'bar',
            data: [4, 3, 2, 1, 0],
            coordinateSystem: 'polar',
            name: 'With Round Cap',
            roundCap: true,
            itemStyle: {
                borderColor: 'green',
                opacity: 0.8,
                borderWidth: 1
            }
        }],
        legend: {
            show: true,
            data: ['Without Round Cap', 'With Round Cap']
        }
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();


    });
})();

(function () {
    // 1. 实例化对象
    var chartDom = document.querySelector(".folo-top .folo-chart");
    var myChart = echarts.init(chartDom);
    var option;

    var labelRight = {
        position: 'right'
    };
    option = {
        title: {
            text: '交错正负轴标签',
            subtext: 'From ExcelHome',
            sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: 80,
            bottom: 30
        },
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'dashed'
                }
            }
        },
        yAxis: {
            type: 'category',
            axisLine: { show: false },
            axisLabel: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            data: ['北京', '天津', '上海', '杭州', '深圳', '广州', '重庆']
        },
        series: [
            {
                name: '发展指数',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    formatter: '{b}'
                },
                data: [
                    { value: -0.07, label: labelRight },
                    { value: -0.09, label: labelRight },
                    0.2, 0.44,
                    { value: -0.23, label: labelRight },
                    0.08,
                    { value: -0.17, label: labelRight },

                ]
            }
        ]
    };




    // 3. 配置项和数据给我们的实例化对象
    myChart.setOption(option);
    // 4. 当我们浏览器缩放的时候，图表也等比例缩放
    window.addEventListener("resize", function () {
        // 让我们的图表调用 resize这个方法
        myChart.resize();
    });
})();

(function () {
    var chartDom = document.querySelector(".com .blog-chart");;
    var myChart = echarts.init(chartDom);
    var option;

    option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: [
                '消极过了头',
                '非常消极',
                '比较消极',
                '有些消极',
                '中性',
                '有些积极',
                '比较积极',
                '非常积极',
                '积极过了头'
            ]

        },
        visualMap: {
            inRange: { color: ['#c6ffdd', '#fbd786', '#f7797d'] }

        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['百度', '网易', '字节跳动', '腾讯', '京东']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '积极过了头',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [11, 19, 24, 27, 45]
            },
            {
                name: '非常积极',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [42, 33, 60, 41, 66]
            },
            {
                name: '比较积极',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [95, 73, 115, 11, 219]
            },
            {
                name: '有些积极',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [167, 79, 157, 163, 346]
            },
            {
                name: '中性',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [91, 32, 41, 65, 157]
            },
            {
                name: '有些消极',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [65, 39, 65, 56, 125]
            },
            {
                name: '比较消极',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [28, 15, 24, 24, 55]
            },
            {
                name: '非常消极',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [7, 9, 3, 2, 3]
            },
            {
                name: '消极过了头',
                type: 'line',
                stack: '总量',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [1, 6, 2, 4, 5]
            }
        ]
    };


    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();


    });
})();