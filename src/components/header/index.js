'use client'
// import logo from '../../app/images/hh_logo.png'
import searchIcon from '../../app/images/icon-search.svg'
import Image from 'next/image'
import Link from 'next/link';
export default function Header() {
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
                        <Link className="header-button" href="/login">
                            Войти
                        </Link>
                    </div>
                </div>

            </div>

        </header>
    )
}