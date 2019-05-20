import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.scss']
})
export class LeftColumnComponent implements OnInit {
  sekcje = [
    {sekcja: 'Śmieszne', link: '/smieszne', ikona: 'far fa-grin-squint'},
    {sekcja: 'Zwierzęta', link: '/zwierzeta', ikona: 'fas fa-paw'},
    {sekcja: 'Polityka', link: '/polityka',  ikona: 'fab fa-old-republic'},
    {sekcja: 'Nieśmieszne', link: '/niesmieszne', ikona: ' far fa-frown-open'},
    {sekcja: 'Historyjki', link: '/historyjki', ikona: 'far fa-smile-wink'},
  ];
  constructor() {
   }

  ngOnInit() {

  }

}
