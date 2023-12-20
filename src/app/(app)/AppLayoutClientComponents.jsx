'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { HiSun } from 'react-icons/hi';
import { BiSolidHomeHeart } from 'react-icons/bi';
import { GiJourney, GiMirrorMirror } from 'react-icons/gi';
import { MdPersonOutline } from 'react-icons/md';
import { IoIosMore } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';
import { BsBellSlash } from 'react-icons/bs';

import styles from './AppLayoutClientComponents.module.scss';

function AppLinks() {
  const notificationButtonRef = useRef(null);
  const menuButtonRef = useRef(null);
  const mobileMenuButtonRef = useRef(null);
  const router = useRouter();
  const imageUrl = false;

  useEffect(() => {
    const notifications = document.getElementById('notificationsMenu');
    const menu = document.getElementById('menu');

    const toggleMenus = (e) => {
      if (e.target === notificationButtonRef.current) {
        menu.classList.remove('visible');
        notifications.classList.toggle('visible');
      } else if (e.target === menuButtonRef.current || e.target === mobileMenuButtonRef.current) {
        notifications.classList.remove('visible');
        menu.classList.toggle('visible');
      } else if (e.target !== notifications && e.target !== menu.firstChild) {
        menu.classList.remove('visible');
        notifications.classList.remove('visible');
      }
    };
    document.addEventListener('click', toggleMenus);

    return () => {
      document.removeEventListener('click', toggleMenus);
    };
  }, []);

  return (
    <span className={styles.appLinks}>
      <button type='button' onClick={() => router.push('/write')} className={styles.headerLinkWriteButton}>
        write
      </button>

      <button type='button' ref={notificationButtonRef}>
        <FaBell />
      </button>

      <button type='button'>
        <Image
          src={imageUrl || '/images/defaultProfileImage.webp'}
          ref={menuButtonRef}
          fill
          sizes='100%'
          alt='profile image'
        />
      </button>

      <button type='button' ref={mobileMenuButtonRef} className={styles.mobile}>
        <FiMenu />
      </button>
    </span>
  );
}

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

const DEFAULT_SEEKER = {
  name: '',
  emailAddress: '',
  imageUrl: '',
};

function MenuSeekerDetails({ getSeeker }) {
  const [seeker, setSeeker] = useState(DEFAULT_SEEKER);

  if (!seeker) return null;

  return (
    <Link href='/profile'>
      <div className={styles.MenuSeekerDetails}>
        <div className={styles.ImageWrapper}>
          <Image src={seeker.imageUrl || '/images/defaultProfileImage.webp'} alt='profile picture' sizes='100%' fill />
        </div>

        <div className={styles.profileInfo}>
          <p className={styles.primary}>{seeker.name}</p>
          <p className={styles.secondary}>{seeker.emailAddress}</p>
        </div>
      </div>
    </Link>
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

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  // fetch notifications

  if (notifications.length === 0)
    return (
      <div className={styles.noNotifications}>
        <BsBellSlash />
        <p>You have any notifications</p>
      </div>
    );

  return (
    <div className={styles.notifications}>
      <p>notifications</p>
    </div>
  );
}

function PageName() {
  const pageName = usePathname()?.split('/')[1];

  return <h1 className={styles.pageName}>{pageName}</h1>;
}

export default function SignOut() {
  const router = useRouter();

  const signOut = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/');
  };

  return (
    <button type='button' onClick={signOut} className={styles.signout}>
      Sign out
    </button>
  );
}

export { AppLinks, AppNav, MenuSeekerDetails, MobileAppNav, Notifications, PageName, SignOut };
