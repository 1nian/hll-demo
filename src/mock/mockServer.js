import Mock from 'mockjs'

Mock.mock('http://localhost:8080/list',  {
    
    'code': 200,
     data:{
         'data|100': [
             {
                 id: '@id',
                 name: '@name',
                 date: '@datetime',
                 address: '@county(true)'
             }
         ]
    } 


})