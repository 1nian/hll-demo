export const routeInfo = [
    { id: 1, name: "IndexView", title: "首页", className: "el-icon-house" },
    { id: 2, name: "InfoView", title: "信息", className: "el-icon-house" },
    { id: 3, name: "SecurityIndex", title: "智慧安防", className: "el-icon-house" ,children:[
        {name:"SecurityEquipment",title:"安防设备",path:"/security/equipment"},
        {name:"SecurityBlackList",title:"黑名单",path:"/security/blacklist"},
    ]},
]