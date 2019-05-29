import { AngularFirestore } from '@angular/fire/firestore';
import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-mem',
  templateUrl: './mem.component.html',
  styleUrls: ['./mem.component.scss']
})
export class MemComponent implements OnInit{
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
  constructor(public asf: FireStoreServicesService, private db: AngularFirestore) {
   }

  ngOnInit() {
    this.docId = this.asf.getDocId(this.memLink);
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
    public upVote(id) {
      if (this.upVoteButton) {
        this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) -1});
        this.upVoteButton = null;
      } else if( this.downVoteButton){
        this.upVoteButton = true;
        this.downVoteButton = null;
        this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) + 2});
      } else {
        this.upVoteButton = true;
        this.downVoteButton = null;
        this.db.collection('memy').doc(id).update({ocena: this.memOcena + 1});
      }
    }
    public downVote(id) {
      if (this.downVoteButton) {
        this.db.collection('memy').doc(id).update({ocena: this.memOcena +1});
        this.downVoteButton = null;
      } else if(this.upVoteButton) {
        this.downVoteButton = true;
        this.upVoteButton = null;
        this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) - 2});
      } else {
        this.downVoteButton = true;
        this.upVoteButton = null;
        this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) - 1});
      }
    }

}
