import Mock from 'mockjs'

// let Random = Mock.Random;

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
                name: function() {
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