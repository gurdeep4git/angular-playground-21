import { Component } from '@angular/core';
import { QuizService, QuizStatus } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
  providers:[QuizService]
})
export class QuizComponent {
  quizStatus = QuizStatus;
  constructor(public quizService: QuizService) {}


  onQuizStart(): void{
    this.quizService.startQuiz()
  }

  onAnswerSelect(opt:number): void{
    this.quizService.selectAnswer(+opt)
  }

  onNext(){
    this.quizService.nextQuestion()
  }

  onFinish(){
    this.quizService.finishQuiz()
  }

  onRestart(){
    this.quizService.restartQuiz()
  }

}
