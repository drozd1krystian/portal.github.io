import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-column',
  templateUrl: './mid-column.component.html',
  styleUrls: ['./mid-column.component.scss']
})
export class MidColumnComponent implements OnInit {
  nick = 'JakisNick123';
  title = 'Jakiś tytuł';
  sekcja = 'JakasSekcja';
  constructor() {

  }

  ngOnInit() {
  }

}
