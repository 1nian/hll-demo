export const routeInfo = [
    {
        id: 1,
        name: "IndexView",
        title: "首页",
        className: "el-icon-house"
    },
    {
        id: 2,
        name: "SecurityIndex",
        title: "智慧安防",
        className: "el-icon-bell",
        children: [
            {
                name: "SecurityEquipment",
                title: "安防设备",
                path: "/security/equipment"
            },
            {
                name: "SecurityBlackList",
                title: "黑名单",
                path: "/security/blacklist"
            },
        ]
    },
    {
        id: 3,
        name: "ControlIndex",
        title: "智慧交管",
        className: "el-icon-setting",
        children: [
            {
                name: "ControlTraffic",
                title: "交通管理",
                path: "/control/traffic"
            }
        ]
    },
    {
        id: 4,
        name: "SettingIndex",
        title: "系统设置",
        className: "el-icon-setting",
        children: [
            {
                name: "UserInfo",
                title: "个人中心",
                path: "/setting/info"
            }
        ]
    },
    
]