import {useState} from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import classNames from 'classnames';
import styles from './index.module.scss';
import { navs } from './config';
import Login from 'components/Login'

const Navbar: NextPage = () => {
  const { pathname } = useRouter();
  const [isShowLogin, setIsShowLogin] = useState(true)
  const handleGotoEditorPage = () => {

  }
  const handleLogin = () => {
    setIsShowLogin(true)
  }
  const handleClose = () => {

  }
  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}>BLOG</section>
      <section className={styles.linkArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            <span
              className={classNames({
                [styles.navItem]: true,
                [styles.active]: pathname === nav?.value,
              })}
            >
              {nav?.label}
            </span>
          </Link>
        ))}
      </section>
      <section className={styles.operationArea}>
        <Button onClick={handleGotoEditorPage}>写文章</Button>
        <Button onClick={handleLogin} type="primary">登录</Button>
      </section>
      <Login isShow={isShowLogin} onClose={handleClose}/>
    </div>
  );
};

export default Navbar;
