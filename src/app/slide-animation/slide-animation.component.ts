import { Component, OnInit } from '@angular/core';
import { slideEffectAliasAnimation } from '../animations';

@Component({
  selector: 'app-slide-animation',
  templateUrl: './slide-animation.component.html',
  styleUrls: ['./slide-animation.component.css'],
  animations: [
    slideEffectAliasAnimation
  ]
})
export class SlideAnimationComponent implements OnInit {
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
