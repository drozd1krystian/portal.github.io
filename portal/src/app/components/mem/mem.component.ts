import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { FireStoreServicesService } from './../../services/fire-store-services.service';
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

  docId: any;
  upVoteButton: boolean;
  downVoteButton = null;
  constructor(private asf: FireStoreServicesService, private db: AngularFirestore) {
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
    const docId = this.asf.getDocId(this.memLink);
    docId.subscribe(a => {
        this.db.collection('memy').doc(a[0]).update({ocena: this.memOcena + 1});
        return;
    });
  }
  public downVote() {
    this.upVoteButton = null;
    this.downVoteButton = true;
    //this.asf.getDocId(this.memLink, this.memOcena, 'down');
  }
}
