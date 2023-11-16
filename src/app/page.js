// import Image from 'next/image'
// import styles from './page.module.css'
import Header from '../components/header/index'
import Test from '../components/test';
import UserLogin from '@/components/auth/user';
export default function Home() {
  return (
    <main>
      <Header/>
      <UserLogin/>
      <Test/>
    </main>
  )
}
