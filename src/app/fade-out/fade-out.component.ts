import { Component, OnInit } from '@angular/core';
import { fadeEffectAnimation } from '../animations';

@Component({
  selector: 'app-fade-out',
  templateUrl: './fade-out.component.html',
  styleUrls: ['./fade-out.component.css'],
  animations: [
    fadeEffectAnimation
  ]
})
export class FadeOutComponent implements OnInit {
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
