import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  nazwaMema: string = '';
  kategorie = ['Śmieszne', 'Nieśmieszne',
            'Polityka', 'Historyjki'];
  showVar: boolean = false;
  toggleChild(){
    this.showVar = !this.showVar;
}
  constructor() { }

  ngOnInit() {
  }

}
