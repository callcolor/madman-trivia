import * as React from 'react';
import * as styles from './Layout.module.scss';

import Menu from './Menu/Menu';

const Layout: React.FunctionComponent<{}> = ({ children }) => (
  <div className={styles.Container}>
    <Menu />
    {children}
  </div>
);

export default Layout;
