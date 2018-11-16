import { Component }   from '@angular/core';

import { MathsService, MathTest } from './maths.service';
// import { UserService } from '../core/user.service';

    // <router-outlet></router-outlet>
@Component({
  selector: 'math-test',
  templateUrl: './math-test.component.html',
  styleUrls: ['./math-test.component.css'],
  providers: [ MathsService ]
})
export class MathTestComponent {
  
  public currentTest:MathTest

  public availableTests:MathTest[]
  currentAnswer:string

  public answerQuestion(answerString:string){
    let result = this.currentTest.answerCurrentQuestion(parseInt(answerString))
    setTimeout(()=>{
      this.currentTest.nextQuestion()
      setTimeout(()=>{
      document.getElementById("solutionInput").focus()
      },10)
    },700)
    this.currentAnswer = null
  }

  public startTest(test:MathTest){
    this.currentTest = new MathTest(test.secondsTotal,test.title);
    this.currentTest.start()
    setInterval(()=>{
    window.scrollTo({top:0})
    },100)
  }

  public showMenu(){
    this.currentTest = null;
  }

  constructor(mathsService: MathsService) {
    this.availableTests = mathsService.tests;
    // this.userName = userService.userName;
  }
}
