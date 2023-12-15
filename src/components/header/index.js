'use client'
import { useSelector, useDispatch } from 'react-redux'
// import logo from '../../app/images/hh_logo.png'
import searchIcon from '../../app/images/icon-search.svg'
import Image from 'next/image'
import Link from 'next/link';
import { logOut } from '@/app/store/slices/authSlice';

export default function Header() {
    const dispatch = useDispatch()
    const isAuth = useSelector((state) => state.auth.isAuth)
    return(
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <div>
                        <Link href="/">
                            <img src="/images/hh_logo.png" alt='logo'/>
                        </Link>
                        <a>Помощь</a>
                        {/* <a>Работодателям</a> */}
                        
                        <Link href="/resumes">Мои резюме</Link>
                        <a>Помощь</a>
                    </div>
                    <div>
                        <button className="header-search">
                            <Image src={searchIcon}/>
                            Поиск
                        </button>
                        <Link href="/create-resume" className="header-button  header-button-green">
                            Создать резюме
                        </Link>
                        {(!isAuth) && <Link className="header-button" href="/login">
                            Войти
                        </Link>}
                        {(isAuth) && <a className="header-button" onClick={() => dispatch(logOut())}>
                            Выйти
                        </a>}
                    </div>
                </div>

            </div>

        </header>
    )
}