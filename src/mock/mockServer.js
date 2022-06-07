import Mock from 'mockjs'

let Random = Mock.Random;

// 随机手机号生成 
// 通过 Random.phone() 调用
Random.extend({
    phone:function(){
        let phonePrefixs = ['135','185','137'];
        return  this.pick(phonePrefixs) + Mock.mock(/\d{8}/)
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
        'data|100': [
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
                date: '@datetime',
            }
        ]
    }
})