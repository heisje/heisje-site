'use client';

import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { NavSearchModal } from '@/components/Nav/NavSearchModal';
import styles from '@/components/Nav/Nav.module.css';
import { SearchPostsType } from '@/model/post';

/**
 * 네비검색아이템
 * @param searchPosts
 * @constructor
 */
export const NavSearch = ({ searchPosts }: { searchPosts: SearchPostsType[] }) => {
  const [isDisplay, setIsDisplay] = useState(false);
  return (
    <>
      <li
        className={`h-8 ${styles.boxLi} ${styles.icon}`}
        onClick={() => setIsDisplay(!isDisplay)}
        id={'search-nav-button'}
      >
        <div>
          <FiSearch size={'20'} />
        </div>
      </li>
      <NavSearchModal isDisplay={isDisplay} setIsDisplay={setIsDisplay} searchPosts={searchPosts} />
    </>
  );
};
