import { AuthService } from './../../services/authentication/auth.service';
import { MemComponent } from './../mem/mem.component';
import { FireStoreServicesService } from './../../services/fire-store-services.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-single-mem',
  templateUrl: './single-mem.component.html',
  styleUrls: ['./single-mem.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SingleMemComponent implements OnInit {
  memObserv: Observable<any[]>;
  docId;
  upVoteButton = this.m.upVoteButton;
  downVoteButton = this.m.downVoteButton;

  constructor(public asf: FireStoreServicesService, public m: MemComponent,
              public ats: AuthService, private route: ActivatedRoute, private db: AngularFirestore) {

    this.docId = this.route.snapshot.paramMap.get('id');
    this.memObserv = asf.getDoc().pipe(map(me => {
      const l = me.filter(mem => mem.id === this.docId);
      return l;
    }));
  }

  ngOnInit() {

  }
  public upVote(id, ocena) {

    if (this.upVoteButton) {
      this.db.collection('memy').doc(id).update({ocena: ocena -1});
      this.upVoteButton = null;
    } else {
      this.upVoteButton = true;
      this.downVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: ocena + 1});
    }
  }
  public downVote(id, ocena) {
    if (this.downVoteButton) {
      this.db.collection('memy').doc(id).update({ocena: ocena + 1});
      this.downVoteButton = null;
    } else {
      this.downVoteButton = true;
      this.upVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: ocena - 1});
    }
  }
}
