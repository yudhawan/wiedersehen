import React from 'react'
import { Josefin_Sans } from '@next/font/google'
import cx from 'classnames'
import Image from 'next/image'
import { socialMedia } from '@/services/iconProvider'
import Logo from '../../../public/logo.png'
import styles from './LinkTreeComponents.module.scss'
const josefin = Josefin_Sans({ subsets: ['latin'],weight:['400','500','600'] })
const LinkTreeComponents=()=> {
    
  return (
    <div className={cx(styles.container,josefin.className)}>
        <Image src={Logo} alt='logo' width={300} height={300} priority />
        <section className={styles.stemList}>
            {
                socialMedia.map(val=><a key={val.label} href={val.link} target="_blank" rel="noopener noreferrer" className={styles.stem}>
                {<val.icon/>}
                <p>{val.label}</p>
            </a>)
            }
            
        </section>
    </div>
  )
}

export default LinkTreeComponents