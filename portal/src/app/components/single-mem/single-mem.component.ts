import { MemComponent } from './../mem/mem.component';
import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-single-mem',
  templateUrl: './single-mem.component.html',
  styleUrls: ['./single-mem.component.scss']
})
export class SingleMemComponent implements OnInit {
  singleMem;
  memObserv: Observable<any[]>;
  docId;
  upVoteButton = this.m.upVoteButton;
  downVoteButton = this.m.downVoteButton;
  constructor(public asf: FireStoreServicesService, public m: MemComponent, private route: ActivatedRoute, private db: AngularFirestore) {
    this.docId = this.route.snapshot.paramMap.get('id');
    this.db.collection('memy').doc(this.docId).ref.get().then((doc) => {
     this.singleMem = doc.data();
    });
  }

  ngOnInit() {

  }
  public set(){
    this.memObserv = this.asf.getDocId(this.singleMem.link);
  }
  public upVote(id) {
    if (this.upVoteButton) {
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.singleMem.ocena) -1});
      this.upVoteButton = null;
    } else {
      this.upVoteButton = true;
      this.downVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: this.singleMem.ocena + 1});
    }
  }
  public downVote(id) {
    if (this.downVoteButton) {
      this.db.collection('memy').doc(id).update({ocena: this.singleMem.ocena +1});
      this.downVoteButton = null;
    } else {
      this.downVoteButton = true;
      this.upVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.singleMem.ocena) - 1});
    }
  }

}
