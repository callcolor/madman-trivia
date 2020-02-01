import * as React from 'react';
import * as styles from './Menu.module.scss';
import { Link } from 'gatsby';

const Menu: React.FunctionComponent<{}> = ({}) => (
  <div className={styles.Container}>
    <Link to="/">Home</Link>
    <Link to="/trivia">Trivia</Link>
  </div>
);

export default Menu;
