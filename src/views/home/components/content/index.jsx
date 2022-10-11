import React, { useContext, useState } from 'react'
import { Context } from '../../index'
import style from './index.module.scss'
export default function Content () {
    const { data, setData } = useContext(Context)
    const [value, setValue] = useState(data.inputText)
    return <div className={style.root}>
        <span>{data.inputText}</span>
        <span>值:</span>
        <input placeholder={"请输入..."} value={value} onChange={(e) => {
            setValue(e.target.value)
        }} />
        <button onClick={() => {
            console.log(data.menuList)
            console.log(data.inputText)
            console.log(value)
            let result = [...data.menuList]
            result.forEach((element, index) => {
                if (element.key === data.inputText[1]) {
                    console.log(element)
                    element.children.forEach((element2, index2) => {
                        if (element2.key === data.inputText[0]) {
                            console.log(element2)
                            // 修改
                            element2.key = value
                            element2.label = value

                        }
                    })
                }
            })
            setData({
                menuList: result,
                inputText: value
            })
            setValue("")
        }}>保存</button>
    </div>
}