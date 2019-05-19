import { MidColumnComponent } from './../mid-column/mid-column.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mem',
  templateUrl: './mem.component.html',
  styleUrls: ['./mem.component.scss']
})
export class MemComponent implements OnInit {
  @Input() memTworca: string;
  @Input() memKategoria: string;
  @Input() memLink: string;
  @Input() memTytul: string;
  constructor() {

   }

  ngOnInit() {
    console.log(this.memTworca);
  }

  getSize(url){
    const img = new Image();
    img.src = url;
    const maxWidth = 680;
    if (img.width > maxWidth){
    const ratio = maxWidth / img.width;
    return img.height * ratio;
    }
  }

}
