import { Injectable, OnDestroy } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay }      from 'rxjs/operators';

export class MathQuestion {

  constructor(public maxNumberTop:number = 99,public maxNumberBottom:number=10,public operator:string="+"){
    let numbers = [Math.floor(Math.random()*maxNumberTop),Math.floor(Math.random()*maxNumberBottom)]
    this.numberTop = Math.max.apply(Math,numbers) // largest number on top
    this.numberBottom = Math.min.apply(Math,numbers) // largest number on bottom
    this.correctSolution = eval(this.numberTop+operator+this.numberBottom); // ugly
    this.answeredCorrectly = false;
    this.answered=false;
  }

  public numberTop:number
  public numberBottom:number
  public correctSolution:number
  public answered:boolean
  public answeredCorrectly:boolean

  // test for correctness
  public answerQuestion(answer:number){
    this.answeredCorrectly = (answer === this.correctSolution);
    this.answered = true;
    console.log(this)
    return this.answeredCorrectly;
  }

}

export class MathTest {
  constructor(public secondsTotal: number,public title:string) { 
    this.secondsRemaining = secondsTotal;
    this.questionsTotal=0;
    this.questionsCorrect=0;
    this.questionsIncorrect=0;
    this.isRunning = false;
  }
  
  public secondsRemaining:number
  public questionsTotal:number
  public questionsCorrect:number
  public questionsIncorrect:number
  public isRunning:boolean

  public currentQuestion:MathQuestion

  private interval

  public start(){
    this.nextQuestion()
    this.isRunning = true
    this.interval = setInterval(()=>{
      if(this.isRunning){
        this.secondsRemaining--
        if(this.secondsRemaining === 0){
          this.isRunning=false;
          clearInterval(this.interval)
        }
      }
    },1000)
  }

  public stop(){
    this.isRunning=false;
  }

  public nextQuestion(){
    this.currentQuestion = new MathQuestion();
  }

  public answerCurrentQuestion(answer:number){
    let correct = this.currentQuestion.answerQuestion(answer)
    if(correct){
      this.questionsCorrect++
    }else{
      this.questionsIncorrect++
    }
  }
}

const MATH_TESTS: MathTest[] = [
  new MathTest(30, '30 Seconds'),
  new MathTest(60, '1 Minute'),
  new MathTest(300, '5 Minutes'),
];

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves heroes from a server */
@Injectable()
export class MathsService implements OnDestroy {

  constructor() { console.log('MathTestService instance created.'); }
  ngOnDestroy() { console.log('MathTestService instance destroyed.'); }

  public tests:MathTest[] = MATH_TESTS

  getMathTests(): Observable<MathTest[]>  {
    return of(MATH_TESTS).pipe(delay(FETCH_LATENCY));
  }

  getMathTest(id: number | string): Observable<MathTest> {
    const mathTest$ = of(MATH_TESTS.find(()=>true));
    return mathTest$.pipe(delay(FETCH_LATENCY));
  }
}

