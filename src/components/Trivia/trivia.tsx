import * as React from 'react';
import axios from 'axios';
import * as styles from './Trivia.module.scss';
import Layout from '../layout';

interface TriviaPageState {
  answers: string[];
  question: string;
}

export default class TriviaPage extends React.Component<{}, TriviaPageState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      answers: [],
      question: 'Loading...',
    };
  }

  public async componentDidMount() {
    try {
      const question = await axios.get(`${process.env.API_URL}/questions`);
      this.setState({
        answers: question.data[0].answers,
        question: question.data[0].question,
      });
    } catch (e) {
      this.setState({
        question: `We're having trouble.  Please refresh to try again.`,
      });
    }
  }

  public render() {
    const {
      answers,
      question,
    } = this.state;

    return (
      <div className={styles.Container}>
        <h2>{question}</h2>
        <ul>
          {answers.map((answer) => (
            <li key={answer}>{answer}</li>
          ))}
        </ul>
      </div>
    );
  }
}
