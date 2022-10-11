import React, { createContext, useState } from 'react'
import Content from './components/content'
import Menu from './components/menu'
import items from './components/menu/menuList'
import style from './index.module.scss'
export const Context = createContext()
const initialState = {
    inputText: '',
    menuList: items
}

export default function Home () {
    const [data, setData] = useState(initialState)
    console.log(data)
    return <Context.Provider value={{ data, setData }}>
        <div className={style.root}>
            <div className={style.left}>
                <Menu />
            </div>
            <div className={style.root}>
                <Content />
            </div>
        </div>
    </Context.Provider>

}