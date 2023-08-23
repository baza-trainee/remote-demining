import { FC } from 'react';
import Logos from './Logos/Logos';
import styles from './AdminLogos.module.css';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { CrumbItem } from '../Breadcrumb/Breadcrumb';

interface AdminLogosProps {}

const AdminLogos: FC<AdminLogosProps> = ({}) => {
  const items: CrumbItem[] = [{ label: 'Лого партнерів', path: '/admin/logo' }];
  return (
    <div>
      <Breadcrumb items={items} />
      <Logos />
    </div>
  );
};

export default AdminLogos;
