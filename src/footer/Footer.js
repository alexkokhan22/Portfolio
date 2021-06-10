import React from 'react'
import styles from './Footer.module.scss';


function Footer() {
    let items = [{
        href: 'https://github.com/alexkokhan22',
        title: 'git'
    }, {href: 'https://www.linkedin.com/in/alex-kokhan-34a610212/', title: 'linkedIn'},
        {
            href: 'https://kokhan.a.a@yandex.by',
            title: 'email'
        }, {href: 'https://www.instagram.com/kohansanya', title: 'instagram'},]
    return (
        <div className={styles.footerContainer}>
            <p className={styles.copyRightBlock}>© 2021, All Rights Reserved.</p>
            <ul>
                {items.map((e, i) => <li key={i}><a href={e.href} target="_blank" rel="noreferrer">{e.title}</a></li>)}
            </ul>
        </div>
    );
}

export default Footer;