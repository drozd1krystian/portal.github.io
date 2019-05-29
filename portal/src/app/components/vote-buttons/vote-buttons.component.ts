import { map, filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vote-buttons',
  templateUrl: './vote-buttons.component.html',
  styleUrls: ['./vote-buttons.component.scss']
})
export class VoteButtonsComponent implements OnInit {
  @Input() docId;
  @Input() memOcena;
  upVoteButton;
  downVoteButton;
  liked;
  unliked;
  constructor(public db: AngularFirestore, private ast: AuthService) { }

  ngOnInit() {
    this.sprawdzPolubione();
    this.sprawdzNielubiane();
  }
  public sprawdzPolubione(){
    this.liked = this.db.collection('user').doc(this.ast.userData.uid)
    .collection('polubione', ref => ref.where('mem_id', '==', this.docId) )
     .snapshotChanges()
     .pipe(map(value =>{
       return value.map(liked =>{
         const id = liked.payload.doc.id;
         return id;
       });
     }));
  }
  public sprawdzNielubiane(){
    this.liked = this.db.collection('user').doc(this.ast.userData.uid)
    .collection('polubione', ref => ref.where('mem_id', '==', this.docId) )
     .snapshotChanges()
     .pipe(map(value =>{
       return value.map(liked =>{
         const id = liked.payload.doc.id;
         return id;
       });
     }));
  }

  public checkButtons(liked, notLiked){
    if (liked != null) {
      this.upVoteButton = true;
    } else if(notLiked != null){
      this.downVoteButton = true;
    }
  }
  public upVote(id, likedId) {
    if (this.upVoteButton) {
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) -1});
      this.upVoteButton = null;
      this.db.collection('memy').doc(this.docId).collection('polubione').doc(likedId).delete();
    } else if(this.downVoteButton){
      this.upVoteButton = true;
      this.downVoteButton = false;
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) + 2});
      this.db.collection('memy').doc(id).collection('polubione').add({
        mem_id: this.docId
      });
    } else {
      this.upVoteButton = true;
      this.downVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: this.memOcena + 1});
      this.db.collection('memy').doc(id).collection('polubione').add({
        mem_id: this.docId
      });
    }
  }
  public downVote(id, unlikedId) {
    if (this.downVoteButton) {
      this.db.collection('memy').doc(id).update({ocena: this.memOcena +1});
      this.downVoteButton = null;
      this.db.collection('memy').doc(this.docId).collection('nielubiane').doc(unlikedId).delete();
    } else if(this.upVoteButton) {
      this.downVoteButton = true;
      this.upVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) - 2});
      this.db.collection('memy').doc(id).collection('nielubiane').add({
        mem_id: this.docId
      });
    } else {
      this.downVoteButton = true;
      this.upVoteButton = null;
      this.db.collection('memy').doc(id).update({ocena: parseInt(this.memOcena) - 1});
      this.db.collection('memy').doc(id).collection('nielubiane').add({
        mem_id: this.docId
      });
    }
  }
}
