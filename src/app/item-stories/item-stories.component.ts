import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-stories',
  templateUrl: './item-stories.component.html',
  styleUrls: ['./item-stories.component.scss'],
  standalone: false,
})
export class ItemStoriesComponent  implements OnInit {
  
  @Input() username: string = '';
  @Input() image: string = '';
  @Input() date: string = '';

  constructor() { }

  ngOnInit() {}

}
