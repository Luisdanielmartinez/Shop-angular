
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { collectionUser } from './../../Setting/SettingCollection';
import { User } from './../../models/user.model';
import { MessageService } from '../Message/message.service';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  answers: string[] = [];
  bsModalRef: BsModalRef;
  constructor(private router:Router,private userAuth:AngularFireAuth,private db:AngularFirestore, private messageService: MessageService) { }

   async createUser(name:string,email:string,password:string) {
       
      await this.userAuth.auth.createUserWithEmailAndPassword(email,password)
      .then(()=>{
        this.userAuth.auth.onAuthStateChanged((userData)=>{
          userData.updateProfile({
            displayName:name
          });
        })
        const userID = this.userAuth.auth.currentUser.uid;
        let user={
          Name:name,
          Email:email,
          Password:password,
          Id:userID
        };     
        this.db.collection(collectionUser).doc(user.Id).set(user);;
        
        this.userAuth.auth.currentUser.sendEmailVerification();

         alert('Registro exitoso');
         this.router.navigate(['/login']);
      }).catch(err=>{
        const errorCodes = err.code;
        switch (errorCodes) {
          case 'auth/invalid-email':
            alert('Correo incorrecto');
            break;
          case 'auth/email-already-in-use':
            alert('Correo en uso');
            break;
          case 'auth/operation-not-allowed':
            alert('Este correo no existe.');
            break;
          case 'auth/weak-password':
           alert('Estamos trabajando por un mejor pais');
            break;
        }
      });
  }

  async LoginIn(email:string,password:string){
        this.userAuth.auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
          this.showMessage();
          this.router.navigate(['/employee']);
        }).catch(err=>{
          const errorCodes = err.code;
          switch (errorCodes) {
            case 'auth/invalid-email':
              alert('Correo incorrecto');
              break;
            case 'auth/email-already-in-use':
              alert('Correo en uso');
              break;
            case 'auth/internal-error.':
              alert('Estamos trabajando con el servicio.');
              break;
            case 'auth/invalid-password':
              alert('Contraseña invalida.');
              break;
          }
        });
  }
 async showMessage(){
     await this.messageService.confirm(
        "Informacion",
        "Bienvenido al Sistema",
        ["Ok"])
        .subscribe((answer) => {
          this.answers.push(answer);
        });
  }
}
