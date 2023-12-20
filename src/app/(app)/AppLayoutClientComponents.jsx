'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

import { HiSun } from 'react-icons/hi';
import { BiSolidHomeHeart } from 'react-icons/bi';
import { GiJourney, GiMirrorMirror } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import { IoIosMore } from 'react-icons/io';

import styles from './AppLayoutClientComponents.module.scss';

function AppNav() {
  const router = useRouter();
  const pathname = usePathname();

  const openMenu = () => {
    console.log('open menu');
  };

  return (
    <>
      <Link href='/' className={styles.logo}>
        <HiSun />
      </Link>

      <Link href='/home' className={`${styles.link} ${pathname.startsWith('/home') ? styles.selected : null}`}>
        <BiSolidHomeHeart />
        <p>home</p>
      </Link>

      <Link href='/journey' className={`${styles.link} ${pathname.startsWith('/journey') ? styles.selected : null}`}>
        <GiJourney />
        <p>journey</p>
      </Link>

      <Link href='/reflect' className={`${styles.link} ${pathname.startsWith('/reflect') ? styles.selected : null}`}>
        <GiMirrorMirror />
        <p>reflect</p>
      </Link>

      <Link href='/profile' className={`${styles.link} ${pathname.startsWith('/profile') ? styles.selected : null}`}>
        <MdPersonOutline />
        <p>profile</p>
      </Link>

      <button type='button' onClick={openMenu} className={styles.more}>
        <IoIosMore />
      </button>

      <button type='button' onClick={() => router.push('/write')} className={styles.write}>
        <p>write entry</p>
      </button>
    </>
  );
}

function MobileAppNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.mobileAppNav}>
      <Link href='/home' className={pathname === '/home' ? styles.selected : ''}>
        <BiSolidHomeHeart />
      </Link>

      <Link href='/journey' className={pathname === '/journey' ? styles.selected : ''}>
        <GiJourney />
      </Link>

      <Link href='/reflect' className={pathname === '/reflect' ? styles.selected : ''}>
        <GiMirrorMirror />
      </Link>

      <Link href='/profile' className={pathname === '/profile' ? styles.selected : ''}>
        <MdPersonOutline />
      </Link>
    </nav>
  );
}

function PageName() {
  const pageName = usePathname()?.split('/')[1];

  return <h1 className={styles.pageName}>{pageName}</h1>;
}

export { AppNav, MobileAppNav, PageName };
