import Mock from 'mockjs'

let Random = Mock.Random;

// 随机手机号生成 
// 通过 Random.phone() 调用
Random.extend({
    phone: function () {
        let phonePrefixs = ['135', '185', '137'];
        return this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
    }
})

Mock.mock('http://localhost:8080/list', {

    'code': 200,
    data: {
        'data|100': [
            {
                id: '@id',
                name: '@name',
                date: '@datetime',
                address: '@county(true)'
            }
        ]
    },
    'total': 100


})

Mock.mock('http://localhost:8080/catList', {
    'code': 200,
    data: {
        'data|100': [
            {
                id: '@id',
                cFName: '@cword(京津沪豫)',
                cCName: '@cword(ABCDE)',
                cLName: '@cword(FJHIG1234567890,5)',
                name: function () {
                    return this.cFName + this.cCName + '-' + this.cLName
                },
                "type|+1": [
                    "超速",
                    "违停",
                ],
                address: '@city(true)',
                img: '@dataImage("200x100")',
                date: '@datetime',
            }
        ]
    }
})


Mock.mock('http://localhost:8080/visitorList', {
    'code': 200,
    data: {
        'data|10': [
            {
                id: '@id',
                visitorName: '@cname',
                img: '@dataImage("200x200")',
                "isDriving|+1": [
                    "自驾",
                    "-",
                ],
                visitorPhone: Random.phone(),
                "status|+1": [
                    "进入",
                    "离开",
                ],
                spinsterName: '@cname',
                date: '@date',
            }
        ]
    }
})

// 首页，平台运维情况分析，数据生成
// 数据源1
Mock.mock('http://localhost:8080/chartList', {
    'code': 200,
    data:[
        {
            'dataGet|7': [
                {
                    'id|+1': 1,
                    'value|0-400': 400,
                    status: '数据调取',
                }
            ],
            'dataPush|7': [
                {
                    'id|+1': 1,
                    'value|0-400': 400,
                    status: '数据推送',
                }
            ],
        }
    ],
    'date': function () {
        var category = [];
        var dottedBase = +new Date();
        for (var i = 1; i < 8; i++) {
            var date = new Date((dottedBase -= 1000 * 3600 * 24));
            category.push({id:i, date: [date.getMonth() + 1, date.getDate()].join("-") });
        }
        return category;
    }
})

// 数据源2
Mock.mock('http://localhost:8080/chartListV2', {
    'code': 200,
    data:[
        {
            'dataGet|7': [
                {
                    'id|+1': 1,
                    'value|0-400': 400,
                    status: '数据调取',
                }
            ],
            'dataPush|7': [
                {
                    'id|+1': 1,
                    'value|0-400': 400,
                    status: '数据推送',
                }
            ],
        }
    ],
    'date': function () {
        var category = [];
        var dottedBase = +new Date();
        for (var i = 1; i < 8; i++) {
            var date = new Date((dottedBase -= 1000 * 3600 * 24));
            category.push({id:i, date: [date.getMonth() + 1, date.getDate()].join("-") });
        }
        return category;
    }
})

// 首页，服务器运行情况，数据生成

Mock.mock('http://localhost:8080/serverData', {
    'code': 200,
    data: {
        'data|6': [
            {
                'id|+1': 1,
                interval:
                {
                    'cpu': [
                        {
                            "percent|0.10-1": 1,
                            item: '已占用',
                        }
                    ],
                    'memory': [
                        {
                            "percent|0.10-1": 1,
                            item: '已占用',
                        }
                    ],
                    'storage': [
                        {
                            "percent|0.10-1": 1,
                            item: '已占用',
                        }
                    ],
                }
                ,
                ip: Random.ip(),
                "status|+1": [
                    "可用",
                    "不可用",
                ],
            }
        ]
    },

})



// 首页，应用服务运行情况，数据生成

Mock.mock('http://localhost:8080/appServiceData', {
    'code': 200,
    data: {
        'data|5': [
            {
                'id|+1': 1,
                "status|+1": [
                    "可用",
                    "不可用",
                ],
                "calls|1000-100000000": 1000000000,
                "dataFlow|100-10000": 10000,
                "errCalls|100-1000": 1000,
                "rate|100-1000": 1000,
            }
        ]
    },

})

// 首页，数据厂商对接情况，数据生成

Mock.mock('http://localhost:8080/dataDocking', {
    'code': 200,
    data: {
        'data|5': [
            {
                'id|+1': 1,
                "status|+1": [
                    "可用",
                    "不可用",
                ],
                "calls|1000-100000000": 1000000000,
                "dataFlow|100-10000": 10000,
                name: '@cname',
                phone: Random.phone(),
                dataDockingId: '@cword(012345ABCDEF,6)',
            }
        ]
    },

})