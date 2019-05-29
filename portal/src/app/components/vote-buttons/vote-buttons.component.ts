import { map, filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.scss']
})
export class VoteButtonsComponent implements OnInit{
  @Input() docId: string;
  @Input() memOcena;
  upVoteButton;
  downVoteButton;

  constructor(public db: AngularFirestore, private ast: AuthService) { }

  ngOnInit() {
    const liked: AngularFirestoreDocument<any> = this.db.collection('users')
    .doc(this.ast.userData.uid).collection('polubione').doc(this.docId);
    liked.get().subscribe(snap => {
    if (snap.exists) {
      this.upVoteButton = true;
    }
  });
    const unliked: AngularFirestoreDocument<any> = this.db.collection('users')
     .doc(this.ast.userData.uid).collection('nielubiane').doc(this.docId);

    unliked.get().subscribe(snap => {
        if (snap.exists) {
          this.downVoteButton = true;
        }
        });
  }

  public upVote(id) {
    if (this.upVoteButton) {
      this.db.collection('users').doc(this.ast.userData.uid).collection('polubione')
      .doc(this.docId).delete();
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) -1});
      this.upVoteButton = null;
    } else if(this.downVoteButton){
      this.db.collection('users').doc(this.ast.userData.uid).collection('nielubiane')
      .doc(this.docId).delete();

      this.db.collection('users').doc(this.ast.userData.uid).collection('polubione')
    .doc(this.docId).set({
      mem_id: this.docId
    });
      this.upVoteButton = true;
      this.downVoteButton = false;
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) + 2});

    } else {
      this.db.collection('users').doc(this.ast.userData.uid).collection('nielubiane')
      .doc(this.docId).delete();

      this.db.collection('users').doc(this.ast.userData.uid).collection('polubione')
    .doc(this.docId).set({
      mem_id: this.docId
    });
      this.upVoteButton = true;
      this.downVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: this.memOcena + 1});
    }
  }
  public downVote(id) {
    if (this.downVoteButton) {
      this.db.collection('users').doc(this.ast.userData.uid).collection('nielubiane')
        .doc(this.docId).delete();

      this.db.collection('memy').doc(id).update({ocena: this.memOcena +1});
      this.downVoteButton = null;
    } else if(this.upVoteButton) {
      this.db.collection('users').doc(this.ast.userData.uid).collection('polubione')
        .doc(this.docId).delete();

      this.db.collection('users').doc(this.ast.userData.uid).collection('nielubiane')
        .doc(this.docId).set({
          mem_id: this.docId
        });
      this.downVoteButton = true;
      this.upVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) - 2});

    } else {
      this.db.collection('users').doc(this.ast.userData.uid).collection('polubione')
        .doc(this.docId).delete();

      this.db.collection('users').doc(this.ast.userData.uid).collection('nielubiane')
        .doc(this.docId).set({
          mem_id: this.docId
        });
      this.downVoteButton = true;
      this.upVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) - 1});
    }
  }
}
