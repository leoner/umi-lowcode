import styles from './index.less';
import { Link } from 'umi';

export default function IndexPage() {
  return (
    <div>
      <Link to="/lowcode">切换到低代码</Link>
      <h1 className={styles.title}>首页</h1>
    </div>
  );
}
