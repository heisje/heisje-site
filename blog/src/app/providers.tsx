'use client';
import { ThemeProvider } from 'next-themes';
import { ReactNode, useEffect, useState } from 'react';
import styles from '../components/test123.module.css';

interface Props {
  children: ReactNode;
}
export default function Providers({ children }: Props) {
  // const [mounted, setMounted] = useState(false);
  //
  // useEffect(() => {
  //   setMounted(true);
  // }, []);
  //
  // if (!mounted) {
  //   return <>{children}</>;
  // }
  const STORAGE_KEY = 'theme';
  const THEMES = ['light', 'dark'] as const;
  const DEFAULT_THEME = 'system';

  return (
    <ThemeProvider
      attribute={'class'}
      storageKey={STORAGE_KEY}
      value={{
        light: 'light',
        dark: 'dark',
      }}
    >
      {children}
    </ThemeProvider>
  );
}
