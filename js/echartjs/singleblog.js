
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".com-info .com-chart"));
    var hours = ['不限', '1', '2', '3', '4', '5', '6', '7', '7+'
        , '1', '2', '3', '4', '5', '6', '7', '7+',
        '1', '2', '3', '4', '5', '6', '7', '7+'
        , '1', '2', '3', '4', '5', '6', '7', '7+'
    ];
    var days = ['不限', '大专', '本科',
        '本科应届生', '研究生', '研究生应届生', '博士'];

    var data = [
        [0, 0, 10], [0, 0, 9], [0, 0, 12], [0, 0, 11], [0, 0, 14], [0, 0, 13], [0, 0, 16], [0, 0, 15], [0, 1, 8], [1, 1, 9], [2, 1, 10], [3, 1, 11], [4, 1, 12], [5, 1, 13], [6, 1, 14], [7, 1, 15], [0, 2, 11], [1, 2, 10], [2, 2, 9], [3, 2, 8], [4, 2, 15], [5, 2, 14], [6, 2, 13], [7, 2, 12], [0, 3, 10], [1, 3, 11], [2, 3, 8], [3, 3, 9], [4, 3, 14], [5, 3, 15], [6, 3, 12], [7, 3, 13], [0, 4, 14], [0, 4, 13], [0, 4, 16], [0, 4, 15], [0, 4, 10], [0, 4, 9], [0, 4, 12], [0, 4, 11], [0, 5, 12], [1, 5, 13], [2, 5, 14], [3, 5, 15], [4, 5, 8], [5, 5, 9], [6, 5, 10], [7, 5, 11], [0, 6, 16], [0, 6, 15], [0, 6, 14], [0, 6, 13], [0, 6, 12], [0, 6, 11], [0, 6, 10], [0, 6, 9], [0, 7, 24], [1, 7, 25], [2, 7, 22], [3, 7, 23], [4, 7, 20], [5, 7, 21], [6, 7, 18], [7, 7, 19], [0, 8, 12], [0, 8, 11], [0, 8, 14], [0, 8, 13], [0, 8, 16], [0, 8, 15], [0, 8, 18], [0, 8, 17], [0, 9, 10], [1, 9, 11], [2, 9, 12], [3, 9, 13], [4, 9, 14], [5, 9, 15], [6, 9, 16], [7, 9, 17], [0, 10, 13], [1, 10, 12], [2, 10, 11], [3, 10, 10], [4, 10, 17], [5, 10, 16], [6, 10, 15], [7, 10, 14], [0, 11, 12], [1, 11, 13], [2, 11, 10], [3, 11, 11], [4, 11, 16], [5, 11, 17], [6, 11, 14], [7, 11, 15], [0, 12, 16], [0, 12, 15], [0, 12, 18], [0, 12, 17], [0, 12, 12], [0, 12, 11], [0, 12, 14], [0, 12, 13], [0, 13, 14], [1, 13, 15], [2, 13, 16], [3, 13, 17], [4, 13, 10], [5, 13, 11], [6, 13, 12], [7, 13, 13], [0, 14, 17], [1, 14, 16], [2, 14, 15], [3, 14, 14], [4, 14, 13], [5, 14, 12], [6, 14, 11], [7, 14, 10], [0, 15, 16], [1, 15, 17], [2, 15, 14], [3, 15, 15], [4, 15, 12], [5, 15, 13], [6, 15, 10], [7, 15, 11], [0, 16, 26], [0, 16, 25], [0, 16, 28], [0, 16, 27], [0, 16, 30], [0, 16, 29], [0, 16, 32], [0, 16, 31], [0, 17, 24], [1, 17, 25], [2, 17, 26], [3, 17, 27], [4, 17, 28], [5, 17, 29], [6, 17, 30], [7, 17, 31], [0, 18, 28], [0, 18, 27], [0, 18, 26], [0, 18, 25], [0, 18, 32], [0, 18, 31], [0, 18, 30], [0, 18, 29], [0, 19, 26], [1, 19, 27], [2, 19, 24], [3, 19, 25], [4, 19, 30], [5, 19, 31], [6, 19, 28], [7, 19, 29], [0, 20, 30], [0, 20, 29], [0, 20, 32], [0, 20, 31], [0, 20, 26], [0, 20, 25], [0, 20, 28], [0, 20, 27], [0, 21, 28], [1, 21, 29], [2, 21, 30], [3, 21, 31], [4, 21, 24], [5, 21, 25], [6, 21, 26], [7, 21, 27], [0, 22, 31], [1, 22, 30], [2, 22, 29], [3, 22, 28], [4, 22, 27], [5, 22, 26], [6, 22, 25], [7, 22, 24], [0, 23, 30], [1, 23, 31], [2, 23, 28], [3, 23, 29], [4, 23, 26], [5, 23, 27], [6, 23, 24], [7, 23, 25], [0, 24, 28], [0, 24, 27], [0, 24, 30], [0, 24, 29], [0, 24, 32], [0, 24, 31], [0, 24, 34], [0, 24, 33], [0, 25, 26], [1, 25, 27], [2, 25, 28], [3, 25, 29], [4, 25, 30], [5, 25, 31], [6, 25, 32], [7, 25, 33], [0, 26, 29], [1, 26, 28], [2, 26, 27], [3, 26, 26], [4, 26, 33], [5, 26, 32], [6, 26, 31], [7, 26, 30], [0, 27, 28], [1, 27, 29], [2, 27, 26], [3, 27, 27], [4, 27, 32], [5, 27, 33], [6, 27, 30], [7, 27, 31], [0, 28, 32], [0, 28, 31], [0, 28, 34], [0, 28, 33], [0, 28, 28], [0, 28, 27], [0, 28, 30], [0, 28, 29], [0, 29, 30], [1, 29, 31], [2, 29, 32], [3, 29, 33], [4, 29, 26], [5, 29, 27], [6, 29, 28], [7, 29, 29], [0, 30, 34], [0, 30, 33], [0, 30, 32], [0, 30, 31], [0, 30, 30], [0, 30, 29], [0, 30, 28], [0, 30, 27], [0, 31, 32], [1, 31, 33], [2, 31, 30], [3, 31, 31], [4, 31, 28], [5, 31, 29], [6, 31, 26], [7, 31, 27], [0, 32, 52], [0, 32, 51], [0, 32, 54], [0, 32, 53], [0, 32, 56], [0, 32, 55], [0, 32, 58], [0, 32, 57], [0, 33, 50], [1, 33, 51], [2, 33, 52], [3, 33, 53], [4, 33, 54], [5, 33, 55], [6, 33, 56], [7, 33, 57],
    ]
    option = {
        tooltip: {},
        visualMap: {
            max: 40,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            }
        },
        xAxis3D: {
            type: 'category',
            data: hours
        },
        yAxis3D: {
            type: 'category',
            data: days
        },
        zAxis3D: {
            type: 'value'
        },
        grid3D: {
            boxWidth: 200,
            boxDepth: 80,
            viewControl: {
                // projection: 'orthographic'
            },
            light: {
                main: {
                    intensity: 1.2,
                    shadow: true
                },
                ambient: {
                    intensity: 0.3
                }
            }
        },
        series: [{
            type: 'bar3D',
            data: data.map(function (item) {
                return {
                    value: [item[1], item[0], item[2]],
                }
            }),
            shading: 'lambert',

            label: {
                fontSize: 16,
                borderWidth: 1
            },

            emphasis: {
                label: {
                    fontSize: 20,
                    color: '#900'
                },
                itemStyle: {
                    color: '#900'
                }
            }
        }]
    };


    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".com-info .sun-chart"));

    var option;

    var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
    var bgColor = '#2E2733';

    var itemStyle = {
        star5: {
            color: colors[0]
        },
        star4: {
            color: colors[1]
        },
        star3: {
            color: colors[2]
        },
        star2: {
            color: colors[3]
        }
    };

    var data = [{
        name: '引擎',
        itemStyle: {
            color: colors[1]
        },
        children: [{
            name: '百度',
            children: [{
                name: '5☆',
                children: [{
                    name: '服务化运营负责人'
                }, {
                    name: '地图出行业务部-技术架构师'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '新闻与内容运营部_编辑团队负责人'
                }, {
                    name: '内容策略部_自然语言处理算法工程师'
                }, {
                    name: '电商C端产品负责人'
                }]
            }, {
                name: '3☆',
                children: []
            }]
        }, {
            name: '京东',
            children: [{
                name: '5☆',
                children: [{
                    name: '资深大数据开发工程师'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: 'iOS开发工程师'
                }, {
                    name: '语音识别语言模型算法工程师'
                }, {
                    name: '高级交互设计师'
                }]
            }, {
                name: '3☆',
                children: []
            }]
        }]
    }, {
        name: '音视频',
        itemStyle: {
            color: colors[2]
        },
        children: [{
            name: '字节跳动',
            children: [{
                name: '5☆',
                children: [{
                    name: '技术负责人-飞书OKR'
                }, {
                    name: '计算机视觉技术负责人'
                }, {
                    name: '项目管理- 抖音内容安全方向'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: 'SRE运维leader-大数据平台架构'
                }, {
                    name: 'Android负责人-国际化电商C端'
                }]
            }, {
                name: '3☆',
                children: []
            }]
        }, {
            name: '网易',
            children: [{
                name: '5☆',
                children: [{
                    name: '用户运营总监'
                }, {
                    name: '资深游戏界面设计师(GUI)'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '把房子住成家'
                }, {
                    name: 'TTS语音合成高级算法专家'
                }, {
                    name: '直播运营总监'
                }]
            }]
        }, {
            name: '腾讯',
            children: [{
                name: '5☆',
                children: [{
                    name: '算法Tech Lead（ASR/NLP）'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: 'TEG17-图像图形算法研究员'
                }, {
                    name: '数据安全产品专家'
                }, {
                    name: '腾讯计费平台推荐算法高级工程师'
                }]
            }]
        }]
    }];

    for (var j = 0; j < data.length; ++j) {
        var level1 = data[j].children;
        for (var i = 0; i < level1.length; ++i) {
            var block = level1[i].children;
            var bookScore = [];
            var bookScoreId;
            for (var star = 0; star < block.length; ++star) {
                var style = (function (name) {
                    switch (name) {
                        case '5☆':
                            bookScoreId = 0;
                            return itemStyle.star5;
                        case '4☆':
                            bookScoreId = 1;
                            return itemStyle.star4;
                        case '3☆':
                            bookScoreId = 2;
                            return itemStyle.star3;
                        case '2☆':
                            bookScoreId = 3;
                            return itemStyle.star2;
                    }
                })(block[star].name);

                block[star].label = {
                    color: style.color,
                    downplay: {
                        opacity: 0.5
                    }
                };

                if (block[star].children) {
                    style = {
                        opacity: 1,
                        color: style.color
                    };
                    block[star].children.forEach(function (book) {
                        book.value = 1;
                        book.itemStyle = style;

                        book.label = {
                            color: style.color
                        };

                        var value = 1;
                        if (bookScoreId === 0 || bookScoreId === 3) {
                            value = 5;
                        }

                        if (bookScore[bookScoreId]) {
                            bookScore[bookScoreId].value += value;
                        }
                        else {
                            bookScore[bookScoreId] = {
                                color: colors[bookScoreId],
                                value: value
                            };
                        }
                    });
                }
            }

            level1[i].itemStyle = {
                color: data[j].itemStyle.color
            };
        }
    }

    option = {
        backgroundColor: bgColor,
        color: colors,
        series: [{
            type: 'sunburst',
            center: ['50%', '48%'],
            data: data,
            sort: function (a, b) {
                if (a.depth === 1) {
                    return b.getValue() - a.getValue();
                }
                else {
                    return a.dataIndex - b.dataIndex;
                }
            },
            label: {
                rotate: 'radial',
                color: bgColor
            },
            itemStyle: {
                borderColor: bgColor,
                borderWidth: 2
            },
            levels: [{}, {
                r0: 0,
                r: 40,
                label: {
                    rotate: 0
                }
            }, {
                r0: 40,
                r: 105
            }, {
                r0: 115,
                r: 140,
                itemStyle: {
                    shadowBlur: 2,
                    shadowColor: colors[2],
                    color: 'transparent'
                },
                label: {
                    rotate: 'tangential',
                    fontSize: 10,
                    color: colors[0]
                }
            }, {
                r0: 140,
                r: 145,
                itemStyle: {
                    shadowBlur: 80,
                    shadowColor: colors[0]
                },
                label: {
                    position: 'outside',
                    textShadowBlur: 5,
                    textShadowColor: '#333'
                },
                downplay: {
                    label: {
                        opacity: 0.5
                    }
                }
            }]
        }]
    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();



// 折线图定制
(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".com-info .commentbyyear-chart"));
    var option;
    var colors = ['#5470C6', '#91CC75'];

    var dataMap = {};
    function dataFormatter(obj) {
        var pList = ['百度', '网易', '字节跳动', '腾讯', '京东'];
        var temp;
        for (var year = 2015; year <= 2020; year++) {
            var max = 0;
            var sum = 0;
            temp = obj[year];
            for (var i = 0, l = temp.length; i < l; i++) {
                max = Math.max(max, temp[i]);
                sum += temp[i];
                obj[year][i] = {
                    name: pList[i],
                    value: temp[i]
                };
            }
            obj[year + 'max'] = Math.floor(max / 100) * 100;
            obj[year + 'sum'] = sum;
        }
        return obj;
    }



    dataMap.dataPI = dataFormatter({
        //max : 4000,
        2020: ['204', '123', '90', '104', '160'],
        2019: ['141', '143', '112', '190', '123'],
        2018: ['362', '125', '124', '231', '144'],
        2017: ['269', '236', '610', '264', '201'],
        2016: ['209', '72', '203', '194', '93'],
        2015: ['101', '80', '95', '130', '40']
    });

    dataMap.dataSI = dataFormatter({
        //max : 26600,
        2020: ['19', '12', '90', '15', '30'],
        2019: ['15', '43', '30', '16', '83'],
        2018: ['55', '24', '10', '28', '17'],
        2017: ['41', '21', '59', '19', '21'],
        2016: ['78', '13', '35', '17', '19'],
        2015: ['32', '35', '13', '37', '24']
    });

    dataMap.dataTI = dataFormatter({
        //max : 25000,
        2020: ['20', '16', '5', '6', '4'],
        2019: ['38', '11', '5', '24', '40'],
        2018: ['31', '24', '33', '26', '22'],
        2017: ['45', '62', '156', '4', '20'],
        2016: ['84', '13', '68', '42', '17'],
        2015: ['40', '30', '7', '38', '9']
    });

    dataMap.dataSum = dataFormatter({
        2020: ['77.7', '50.0', '70.9', '66.6', '84.2'],
        2019: ['70.0', '69.2', '65.7', '79.2', '49.5'],
        2018: ['85.1', '72.2', '80.0', '68.9', '70.2'],
        2017: ['75.7', '73.9', '74.8', '71.1', '90.9'],
        2016: ['66.3', '68.6', '66.3', '76.7', '72.9'],
        2015: ['68.8', '72.7', '66.7', '63.4', '72.1']
    })



    option = {


        baseOption: {
            timeline: {
                axisType: 'category',
                // realtime: false,
                // loop: false,
                autoPlay: true,
                // currentIndex: 2,
                playInterval: 1000,
                // controlStyle: {
                //     position: 'left'
                // },
                data: [
                    '2015', '2016', '2017', '2018', '2019', '2020'

                ],
                label: {
                    formatter: function (s) {
                        return (new Date(s)).getFullYear();
                    }
                }
            },
            title: {
            },
            tooltip: {
            },
            legend: {
                left: 'right',
                data: ['积极', '中性', '消极'],
                selected: {
                    'GDP': false, '金融': false, '房地产': false
                }
            },
            calculable: true,
            grid: {
                top: 80,
                bottom: 100,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value.replace('\n', '');
                            }
                        }
                    }
                }
            },
            xAxis: [
                {
                    'type': 'category',
                    'axisLabel': { 'interval': 0 },
                    'data': [
                        '百度', '网易', '字节跳动', '腾讯', '京东'
                    ],
                    splitLine: { show: false }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '积极中性消极人数',
                    position: 'left',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: colors[0]
                        }
                    },
                },
                {
                    type: 'value',
                    name: '积极中性消极人数',
                    position: 'right',
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: colors[1]
                        }
                    },
                    axisLabel: {
                        formatter: '{value} %'
                    }
                }

            ],
            series: [

                { name: '积极', type: 'bar', yAxisIndex: 0 },
                { name: '中性', type: 'bar', yAxisIndex: 0 },
                { name: '消极', type: 'bar', yAxisIndex: 0 },
                {
                    name: '评论积极人群所占比例',
                    type: 'line',
                    yAxisIndex: 1
                }
            ]
        },

        options: [
            {
                title: { text: '2015年' },
                series: [
                    { data: dataMap.dataPI['2015'] },
                    { data: dataMap.dataSI['2015'] },
                    { data: dataMap.dataTI['2015'] },
                    { data: dataMap.dataSum['2015'] }
                ]
            },
            {
                title: { text: '2016年' },
                series: [
                    { data: dataMap.dataPI['2016'] },
                    { data: dataMap.dataSI['2016'] },
                    { data: dataMap.dataTI['2016'] },
                    { data: dataMap.dataSum['2016'] }

                ]
            },
            {
                title: { text: '2017年' },
                series: [
                    { data: dataMap.dataPI['2017'] },
                    { data: dataMap.dataSI['2017'] },
                    { data: dataMap.dataTI['2017'] },
                    { data: dataMap.dataSum['2017'] }

                ]
            },
            {
                title: { text: '2018年' },
                series: [
                    { data: dataMap.dataPI['2018'] },
                    { data: dataMap.dataSI['2018'] },
                    { data: dataMap.dataTI['2018'] },
                    { data: dataMap.dataSum['2018'] }


                ]
            },
            {
                title: { text: '2019年' },
                series: [
                    { data: dataMap.dataPI['2019'] },
                    { data: dataMap.dataSI['2019'] },
                    { data: dataMap.dataTI['2019'] },
                    { data: dataMap.dataSum['2019'] }

                ]
            },
            {
                title: { text: '2020年' },
                series: [
                    { data: dataMap.dataPI['2020'] },
                    { data: dataMap.dataSI['2020'] },
                    { data: dataMap.dataTI['2020'] },
                    { data: dataMap.dataSum['2020'] }

                ]
            },

        ]
    };

    // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

(function () {
    // 基于准备好的dom，初始化echarts实例
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

    var chartDom = document.querySelector(".commentre .comment-chart");
    var myChart = echarts.init(chartDom);
    var option;

    var dataURL = ROOT_PATH + '/data/asset/data/fake-nebula.bin';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', dataURL, true);
    xhr.responseType = 'arraybuffer';

    myChart.showLoading();

    xhr.onload = function (e) {
        myChart.hideLoading();
        var rawData = new Float32Array(this.response);

        option = {
            title: {
                left: 'center',
                text: echarts.format.addCommas(Math.round(rawData.length / 2)) + ' Points',
                subtext: 'Fake data'
            },
            tooltip: {},
            toolbox: {
                right: 20,
                feature: {
                    dataZoom: {}
                }
            },
            grid: {
                right: 70,
                bottom: 70
            },
            xAxis: [{
            }],
            yAxis: [{
            }],
            dataZoom: [{
                type: 'inside'
            }, {
                type: 'slider',
                showDataShadow: false,
                handleIcon: 'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%'
            }, {
                type: 'inside',
                orient: 'vertical'
            }, {
                type: 'slider',
                orient: 'vertical',
                showDataShadow: false,
                handleIcon: 'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: '80%'
            }],
            animation: false,
            series: [{
                type: 'scatter',
                data: rawData,
                dimensions: ['x', 'y'],
                symbolSize: 3,
                itemStyle: {
                    opacity: 0.4
                },
                blendMode: 'source-over',
                large: true,
                largeThreshold: 500
            }]
        };

        myChart.setOption(option);
    };

    xhr.send();


    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();