import Vue from 'vue'
import {
    Pagination, Input, Select, Button, Table, TableColumn, Form, FormItem, Icon, Container, Header, Aside, Main, Dropdown, Message, DropdownMenu,
    DropdownItem, Card, Tabs, TabPane, Option, Avatar, Dialog, Row, Col,DatePicker
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$message = Message;

Vue.use(Pagination).use(Input).use(Select).use(Button).use(Table).use(TableColumn).use(Form).use(FormItem).use(Icon).use(Container).use(Header).use(Aside).use(Main).use(Dropdown).use(DropdownMenu).use(DropdownItem).use(Card).use(Tabs).use(TabPane).use(Option).use(Avatar).use(Dialog).use(Row).use(Col).use(DatePicker)
