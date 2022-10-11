import Content from './components/content'
import Menu from './components/menu'
import style from './index.module.scss'
export default function Home () {
    return <div className={style.root}>
        <div className={style.left}>
            <Menu />
        </div>
        <div className={style.root}>
            <Content />
        </div>
    </div>
}