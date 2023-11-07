import Link from 'next/link';
import NavLink from '@/components/Nav/NavLink';
import { Outfit } from 'next/font/google';
import { FiMoon, FiSearch, FiSun } from 'react-icons/fi';
import NavTheme from '@/components/Nav/NavTheme';
import styles from './Nav.module.css';

const questrial = Outfit({
  weight: '400',
  subsets: ['latin'],
});

const Nav = () => {
  const paths = [
    { href: '/about', text: 'about' },
    { href: '/blog', text: 'blog' },
  ];

  return (
    <nav className={`${questrial.className}`}>
      <Link className={'inline-block mr-2 align-middle text-3xl font-extrabold'} href={'/'}>
        <span>Heisje</span>
      </Link>

      <ul className={styles.box20}>
        {paths.map(({ href, text }) => {
          return (
            <li className={'inline-block '} key={href}>
              <NavLink href={href} text={text} />
            </li>
          );
        })}
        <li className={`inline-block h-8 ${styles.box41}`}>
          <div className={'flex h-full items-center'}>
            <FiSearch size={'20'} />
          </div>
        </li>
      </ul>
      <NavTheme />
    </nav>
  );
};

export default Nav;
