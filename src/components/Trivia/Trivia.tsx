import * as React from 'react';
import axios from 'axios';
import * as styles from './Trivia.module.scss';

interface TriviaPageState {
  answers: string[];
  correctAnswerInsecure: string;
  question: string;  
}

export default class TriviaPage extends React.Component<{}, TriviaPageState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      answers: [],
      correctAnswerInsecure: ``,
      question: 'Loading...',
    };    
  }

  public async update() {
    try {
      const question = await axios.get(`${process.env.API_URL}/questions`);
      this.setState({
        answers: question.data[0].answers,
        correctAnswerInsecure: question.data[0].correctAnswerInsecure,
        question: question.data[0].question,
      });
    } catch (e) {
      this.setState({
        answers: [],
        correctAnswerInsecure: ``,
        question: `We're having trouble.  Please refresh to try again.`,
      });
    }
  }

  public async componentDidMount() {
    this.update();
  }

  public async handleClick(answer: string) {
    const {
      correctAnswerInsecure,
    } = this.state;

    if (answer === correctAnswerInsecure) {
      this.setState({
        answers: [],
        correctAnswerInsecure: ``,
        question: `Correct!`,
      }); 
    } else {
      this.setState({
        answers: [],
        correctAnswerInsecure: ``,
        question: `Incorrect :(`,
      });
    }
    setTimeout(() => {
      this.update();
    }, 2000);
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
            <li key={answer} onClick={this.handleClick.bind(this, answer)}>{answer}</li>
          ))}
        </ul>
      </div>
    );
  }
}
