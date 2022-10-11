
import {
    AppstoreOutlined, MailOutlined
} from '@ant-design/icons'
function getItem (label, key, icon, children, type, onTitleClick) {
    return {
        key,
        icon,
        children,
        label,
        type,
        onTitleClick
    }
}
const items = [
    getItem('菜单一', '1', <MailOutlined />, [
        getItem('子菜单1-1', '子菜单1-1'),
        getItem('子菜单1-2', '子菜单1-2'),
    ]),
    getItem('菜单二', '2', <AppstoreOutlined />, [
        getItem('子菜单2-1', '子菜单2-1'),
        getItem('子菜单2-2', '子菜单2-2'),
    ]),
]
export default items