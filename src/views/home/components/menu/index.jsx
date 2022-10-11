
import { Menu } from 'antd'
import React, { useContext, useState } from 'react'
import { Context } from '../../index'
import style from './index.module.scss'


const App = () => {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    const { data, setData } = useContext(Context)
    console.log(data)
    return (
        <div
            className={style.root}
            style={{
                width: 256,
            }}
        >
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
                items={data.menuList}
                onClick={({ item, key, keyPath, domEvent }) => {
                    // 传值给content
                    setData({
                        ...data,
                        inputText: keyPath
                    })
                    console.log({ item, key, keyPath, domEvent })
                }}
            />
        </div>
    )
}

export default App