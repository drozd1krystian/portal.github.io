import { Component, OnInit, Input } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { finalize, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
import { FireStoreServicesService } from 'src/app/services/fire-store-services.service';
import { User } from 'src/app/services/authentication/user';




@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Input() showMePartially: boolean;
  // Main task
  task: AngularFireUploadTask;
  @Input() tytul: string;
  @Input() rodzaj: string;
  @Input() czyAwatar = false;
  // Progress monitoring
  percentage: Observable<number>;


  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;


  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private authService: AuthService, private router: Router, public ffs: FireStoreServicesService) {

  }


  toggleHover(event: boolean) {
    this.isHovering = event;
  }





  async startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;
    const ref = this.storage.ref(path);
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };

    // czy wstawiamy awatar?
console.log("status czyAwatar = "+this.czyAwatar);
    if (this.czyAwatar) {
      console.log(' w srodku czyAwatar, photoURL:'+this.authService.userData.photoURL);
      if ( this.authService.userData.photoURL === null) {

        console.log('nie ma zdjecia');
        // The main task
        this.task = this.storage.upload(path, file, { customMetadata });

        // Progress monitoring
        this.percentage = this.task.percentageChanges();
        this.snapshot = this.task.snapshotChanges();

        this.snapshot = this.task.snapshotChanges().pipe(
          tap(console.log),
          // The file's download URL
          finalize(async () => {

            // link do nowego awatara:
            this.downloadURL = await ref.getDownloadURL().toPromise();
            console.log('aktualizuje download URL dla nowo dodanego awatara');
            return this.db
              .collection('users')
              .doc(this.authService.userData.uid)
              .update({ photoURL: this.downloadURL }).then(value => {
                this.router.navigate(['/user-profile']);
                console.log(this.authService.userData.displayName);
                console.log('updatnieto awatarcio');
              }).catch(value => {
                console.log('bugi:');
                console.log(value);
              });

          }),
        );



      }
      // uzytkownik ma juz awatar, teraz go aktualizuje
      else {

        this.task = this.storage.upload(path, file, { customMetadata });
        this.storage.storage.refFromURL(this.authService.userData.photoURL);



      }





    }
    // uploadujemy mema
    else {
      // The main task
      this.task = this.storage.upload(path, file, { customMetadata });

      // Progress monitoring
      this.percentage = this.task.percentageChanges();
      this.snapshot = this.task.snapshotChanges();

      this.snapshot = this.task.snapshotChanges().pipe(
        tap(console.log),
        // The file's download URL
        finalize(async () => {


          this.downloadURL = await ref.getDownloadURL().toPromise();
          // zapis do kolekcji "memy" dokumentu z polami link, id, ocena, tworca

          // tslint:disable-next-line: max-line-length
          this.db.collection('memy').add({
            link: this.downloadURL,
            ocena: 1,
            tytul: this.tytul,
            kategoria: this.rodzaj,
            tworca: this.authService.userData.displayName,
            dataDodania: new Date(),
            awatarTworcy: this.authService.userData.photoURL
          }).then(value => {
            window.alert('Upload zakończony sukcesem!');
            this.router.navigate(['/']);
          }).catch(value => {
            window.alert('Upload zakończony niepowodzeniem!');
            this.router.navigate(['/']);
          });


        }),
      );

    }
  }
  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }



}
