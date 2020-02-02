import { graphql } from 'gatsby';
import * as React from 'react';
import * as styles from './Trivia.module.scss';

import Layout from '../components/Layout';
import Trivia from '../components/Trivia/Trivia';

interface TriviaPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      },
    },
  };
}

export const triviaPageQuery = graphql`
  query TriviaPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class TriviaPage extends React.Component<TriviaPageProps, {}> {
  public render() {
    const {
      name,
      tagline,
    } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <div className={styles.Container}>
          <h1>Trivia</h1>

          <Trivia />
        </div>
      </Layout>
    );
  }
}
