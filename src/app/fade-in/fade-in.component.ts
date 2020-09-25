import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-fade-in',
  templateUrl: './fade-in.component.html',
  styleUrls: ['./fade-in.component.css'],
  animations: [
    trigger('fade', [
      // state(),
      /** transition() function requries two paramerters, 
       * 1. State Change expression, This expression defines the source and target states
       *    Ex: void => * (Here when the element goes to void state to default(*) state, then add an array as 2nd paramerter
       * 2. Here add the code to run during the animation. We can add 2 functons called style() and animate()
       * */
      transition('void=>*', [
        /** style(): function applies the style immediately
         *           Here we can add css classes
        */
        style({
          backgroundColor: 'red',
          opacity: 0
        }),
        /** animate(): function applies the style over period of time, here it is 2ms we are changing the backgroundColor yellow to white
         *             It takes 2 arguments, 1. timer and 2nd css class
        */
        animate(2000, style({
          backgroundColor: 'aqua',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class FadeInComponent implements OnInit {

  items: any[] = [
    'ASDAD sdfsdf',
    'sdfsdfsf',
    'fgdg gerte4fdg5t4w'
  ]
  addItem = (input: HTMLInputElement) => {
    this.items.splice(0, 0, input.value)
    input.value = ''
  }
  removeItem = (item) => {
    console.log("Remove >>>>> ", item);
    const index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit(): void {
  }


}
