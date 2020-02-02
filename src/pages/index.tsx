import { graphql, Link } from 'gatsby';
import * as React from 'react';
import * as styles from './Index.module.scss';

import Layout from '../components/Layout';
import MadmanImg from "../assets/madman_200.png";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {

  public render() {
    const {
      name,
      tagline,
    } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <div className={styles.Container}>
          <h1>{name}</h1>
          <p>{tagline}</p>

          <p>
            <img src={MadmanImg} alt={`Madman Trivia Logo`}/>
          </p>
          <p>
            <Link to="/trivia" className={styles.CtaButton}>Play Trivia!</Link>
          </p>
        </div>
      </Layout>
    );
  }
}
