import { computed, signal } from '@angular/core';
import { questions } from '../../../data/quiz';

export enum QuizStatus {
  Load = 'load',
  Ready = 'ready',
  Finish = 'finish'
}

export interface Question {
  question: string;
  options: Array<string>;
  correctOption: number;
  points: number;
}
export interface QuizState {
  questions: Array<Question>;
  status: QuizStatus;
  index: number;
  points: number;
  answer: null | number;
  selectedOption: null | number;
}

export class QuizService {
  private initState: QuizState = {
    questions: questions,
    status: QuizStatus.Load,
    index: 0,
    points: 0,
    answer: null,
    selectedOption:null
  };

  // Private Signal
  private state = signal<QuizState>(this.initState);

  // Public Signals
  question = computed(() => this.state().questions[this.state().index]);
  status = computed(() => this.state().status);
  index = computed(() => this.state().index);
  points = computed(() => this.state().points);
  answer = computed(() => this.state().answer);
  selectedOption = computed(() => this.state().selectedOption);
  totalQuestions = computed(() => this.state().questions.length);
  maxPoints = computed(() =>
    this.state().questions.reduce((a, b) => (a = a + b.points), 0),
  );

  // Public Methods
  startQuiz(): void {
    this.state.update((state) => {
      return {
        ...state,
        status: QuizStatus.Ready,
      };
    });
  }

  selectAnswer(opt: number): void {
    const question = this.state().questions.at(this.state().index);
    this.state.update((state) => {
      return {
        ...state,
        answer: opt,
        selectedOption:opt,
        points:
          opt === question?.correctOption
            ? state.points + question.points
            : state.points,
      };
    });
  }

  nextQuestion(): void {
    this.state.update((state) => {
      return {
        ...state,
        answer: null,
        selectedOption: null,
        index: state.index + 1,
      };
    });
  }

  finishQuiz(): void {
    this.state.update((state) => {
      return {
        ...state,
        status: QuizStatus.Finish,
      };
    });
  }

  restartQuiz(): void {
    this.state.update((state) => {
      return {
        ...this.initState,
        status: QuizStatus.Ready,
      };
    });
  }
}
