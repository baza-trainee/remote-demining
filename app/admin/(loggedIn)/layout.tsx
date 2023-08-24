'use client';

'use client';
import { redirect } from 'next/navigation';
import { FC, useEffect } from 'react';
import { useReadLocalStorage } from 'usehooks-ts';

import AdminNavBar from '@/components/AdminNavBar/AdminNavBar';

import styles from './layout.module.css';

const LoggedInLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useReadLocalStorage('token');

  useEffect(() => {
    if (!token) {
      redirect('/admin');
    }
  }, [token]);

  return (
    <div className={styles.pageWrapper}>
      <AdminNavBar />
      {children}
    </div>
  );
};

export default LoggedInLayout;
