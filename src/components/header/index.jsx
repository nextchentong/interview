import logoImg from '../../logo.svg'
import style from './index.module.scss'
export default function Header () {
    return <div className={style.root}>

        <div className={style.left}>
            <img src={logoImg} className={style.logo} />
            <div>react</div>
        </div>
        <div className={style.right}>
            <div className={style.question}>
                ?
            </div>
            <span className={style.user}>admin</span>
        </div>
    </div>
}