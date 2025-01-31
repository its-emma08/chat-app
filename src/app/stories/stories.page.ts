import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.page.html',
  styleUrls: ['./stories.page.scss'],
  standalone: false
})
export class StoriesPage implements OnInit {

  constructor() { }

  stories: any[] = [
    {
      username: 'johndoe',
      image: 'https://via.placeholder.com/150',
      date: '1h'
    },
    {
      username: 'janedoe',
      image: 'https://via.placeholder.com/150',
      date: '2h'
    },
    {
      username: 'johndoe',
      image: 'https://via.placeholder.com/150',
      date: '3h'
    },
    {
      username: 'janedoe',
      image: 'https://via.placeholder.com/150',
      date: '4h'
    },
    {
      username: 'johndoe',
      image: 'https://via.placeholder.com/150',
      date: '5h'
    },
    {
      username: 'janedoe',
      image: 'https://via.placeholder.com/150',
      date: '6h'
    },
    {
      username: 'johndoe',
      image: 'https://via.placeholder.com/150',
      date: '7h'
    },
    {
      username: 'janedoe',
      image: 'https://via.placeholder.com/150',
      date: '8h'
    },
    {
      username: 'johndoe',
      image: 'https://via.placeholder.com/150',
      date: '9h'
    },
    {
      username: 'janedoe',
      image: 'https://via.placeholder.com/150',
      date: '10h'
    },
  ];

  ngOnInit() {
  }

}
