import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from 'antd';
import classNames from 'classnames';
import styles from './index.module.scss';
import { navs } from './config';

const Navbar: NextPage = () => {
  const { pathname } = useRouter();
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
        <Button>写文章</Button>
        <Button>登录</Button>
      </section>
    </div>
  );
};

export default Navbar;
