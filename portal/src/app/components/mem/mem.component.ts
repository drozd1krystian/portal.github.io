import { AngularFirestore } from '@angular/fire/firestore';
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
  @Input() memOcena: string;
  @Input() memId: string;
  @Input() autorAvatar: string;

  @Input() awatarTworcy: string;


  upVoteButton: boolean;
  downVoteButton = null;
  constructor(private db: AngularFirestore) {
   }

  ngOnInit() {
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
  public getWidth(url) {
    const img = new Image();
    img.src = url;
    return img.width;
    }
  public upVote() {
    this.upVoteButton = true;
    this.downVoteButton = null;
    this.db.collection('memy').doc(this.memId).update({ocena: this.memOcena + 1});
  }
  public downVote() {
    this.upVoteButton = null;
    this.downVoteButton = true;
    this.db.collection('memy').doc(this.memId).update({ocena: parseInt(this.memOcena) - 1});
  }
}
